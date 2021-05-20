<?php

namespace App\Http\Controllers\Front;

use Illuminate\Http\Request;
use DB;
use App\Customer;
use App\Order_Products;
use App\Order;
use Hash;
use App\Dis_Cart;
use App\Dis_Order;
use App\Cart;
use App\Distributor;
use Validator;
use App\Dis_Order_Products;
use App\ForgotPassword;
use Illuminate\Support\Facades\Mail;
use App\Mail\ForgotPasswordMail;
use App\Mail\OrderMailVendor;
use App\LoyaltyPoint;
use Illuminate\Support\Facades\Crypt;
use App\Http\Controllers\Controller;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function get_cart_items_total(Request $request){
        $cart = Cart::where('cart_cookie_id',$request->cart_cookie_id)->get();
        $response = ['status' => 200 , 'cart_item_totals' => sizeof($cart)];
        return $response;
    }
    public function get_dis_cart_items_total(Request $request){
        $cart = Dis_Cart::where('cart_cookie_id',$request->cart_cookie_id)->get();
        $response = ['status' => 200 , 'cart_item_totals' => sizeof($cart)];
        return $response;
    }
    public function PasswordReset(Request $request){
        
        $data =  ForgotPassword::where('token', Crypt::decrypt( $request->id))->where('status',1)->first();
        if($data){
            $validator = Validator::make($request->all(), [
                'password' => 'required|min:6',
                'confirm_password' => 'required|min:6',
            ]);
            if($validator->fails()){
                $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
                return $response;
            }else{
                if($request->password == $request->confirm_password){
                    $c =  Customer::where('email', $data->email)->first(); 
                    $Customer = Customer::find($c->id);                     
                    $Customer->password = $request->password;
                    $Customer->save();
                    $response = ['status' => 200 , 'msg' => 'Success - your password has been reset.'];
                    return $response;
                }else{
                    $response = ['status' => 404 , 'msg' => 'Error - your password does not matches with confirm password.'];
                    return $response;
                }
            }
        }else{
            $response = ['status' => 404 , 'msg' => 'Error - This password reset link is expired.'];
            return $response;
        }
    }
    public function ForgotPassword(Request $request){
        $c = Customer::where('email',$request->email)->first();
        if($c){
            DB::table('forgotpasswords')->where('email', $request->email)->update(array('status' => '0'));  
            $code=rand(1000,9999);	
            $p = new ForgotPassword();
            $p->email = $request->email;
            $p->token = $code;
            $p->status = 1;
            $p->save();
            $link = 'reset-password/'.Crypt::encrypt($p->token);
            $title = 'Password Reset';
            $subtile = 'Password Reset Link';
            Mail::to($request->email)->send(new ForgotPasswordMail($link,$title,$subtile));
            $response = ['status' => 200 , 'msg' => 'Success - Password reset link sent to your email.'];
            return $response;
        }else{
            $response = ['status' => 404 , 'msg' => 'Error - Inavlid Email.'];
            return $response;
        }
    }
   
    public function create_customer_order(Request $request){
        $cart = $this->get_cookie_session_cart($request);
        if($cart['status'] == 200){
        $neworder = new Order();
        $neworder->cus_id = $request->cus_id;
        $neworder->fname = $request->firstName;
        $neworder->lname = $request->lastName;
        $neworder->email = $request->email;
        $neworder->phone = $request->phone;
        $neworder->date = date("d-m-Y");
        $neworder->totals = $request->totals;
        $neworder->country = $request->country;
        $neworder->city = $request->city;
        $neworder->subtotal = $request->cart_totals;
        $neworder->shipping = $request->Shipping;
        $neworder->discount = $request->discount;
        $neworder->discount_id = $request->discount_id; 
        $neworder->address = $request->address1 .' '. $request->address2;
        $neworder->status = 'Pending';
        $neworder->save(); 
        foreach($cart['cart'] as $c){
            $order_product = new Order_Products();
            $order_product->order_id = $neworder->id;
            $order_product->product_id = $c->product[0]->id;
            $order_product->varient_id = $c->varient_id;
            $order_product->discount = (int)$c->discount;
            $order_product->discount_id = (int)$c->discount_id;
            $order_product->original_price = (int)$c->original_price;
            $order_product->qty = $c->qty;
            $order_product->price = $c->price;
            $order_product->save();
            $cart_cookie_id = $c->cart_cookie_id;
        }
       
        $title = 'New Order Placed by Customer';
        $order = $neworder;
        Mail::to("mehranorders@gmail.com")->send(new OrderMailVendor($order,$title));
        DB::table('carts')->where('cart_cookie_id',$cart_cookie_id)->delete();
        $response = ['status' => 200 , 'msg' => 'Order Placed SuccessFully'];
        return $response;
        }   else{
            $response = ['status' => 219 , 'msg' => 'Error- Cart is empty.'];
            return $response;
        }
    }
    public function create_dis_customer_order(Request $request){
        $cart = $this->get_dis_cookie_session_cart($request);
        if($cart['status'] == 200){
        $neworder = new Dis_Order();
        $neworder->dis_id = $request->cus_id;
        $neworder->fname = $request->firstName;
        $neworder->lname = $request->lastName;
        $neworder->email = $request->email;
        $neworder->phone = $request->phone;
        $neworder->loyaltydiscount = $request->loyaltydiscount;
        $neworder->date = date("d-m-Y");
        $neworder->totals = $request->totals;
        $neworder->country = $request->country;
        $neworder->city = $request->city;
        $neworder->subtotal = $request->sub_cart_totals;
        $neworder->shipping = $request->Shipping;
        $neworder->discount = $request->discount;
        $neworder->discount_id = $request->discount_id; 
        $neworder->address = $request->address1 .' '. $request->address2;
        $neworder->status = 'Pending';
        $neworder->save(); 
        
            if($request->loyaltydiscount > 0){
                $dis = Distributor::find($request->cus_id);
                $dis->loyalty_points = 0;
                $dis->save();
            }
            $points  = LoyaltyPoint::all();
            $loyalty_points = $points[0]->point / $points[0]->rs * $request->totals;
            $dis = Distributor::find($request->cus_id);
            $dis->loyalty_points = (int) $loyalty_points; 
            $dis->save();
            foreach($cart['cart'] as $c){
                $order_product = new Dis_Order_Products();
                $order_product->order_id = $neworder->id;
                $order_product->product_id = $c->product[0]->id;
                $order_product->varient_id = $c->varient_id;
                $order_product->discount = (int)$c->discount;
                $order_product->discount_id = (int)$c->discount_id;
                $order_product->original_price = (int)$c->original_price;
                $order_product->qty = $c->qty;
                $order_product->price = $c->price;
                $order_product->save();
                $cart_cookie_id = $c->cart_cookie_id;
            }
            $title = 'New Order Placed by Distributor';
            $order = $neworder;
            Mail::to("mehranorders@gmail.com")->send(new OrderMailVendor($order,$title));
            DB::table('dis_carts')->where('cart_cookie_id',$cart_cookie_id)->delete();
            $response = ['status' => 200 , 'msg' => 'Order Placed SuccessFully'];
            return $response;
        }else{
            $response = ['status' => 219 , 'msg' => 'Error- Cart is empty.'];
            return $response;
        }
        

    }
    public function add_product_in_cart(Request $request){
        $cart = new Cart();
        $cart->product_id = $request->product_id;
        $cart->cart_cookie_id = $request->cart_cookie_id;
        $cart->qty = $request->qty;
        $cart->price = $request->price;
        $cart->varient_id = $request->varient_id;
        $cart->original_price = (int)$request->original_price;
        $cart->discount = (int) $request->p_discount;
        $cart->discount_id = (int)  $request->discount_id;
        $cart->save();

    }
    public function add_dis_product_in_cart(Request $request){
        $cart = new Dis_Cart();
        $cart->product_id = $request->product_id;
        $cart->cart_cookie_id = $request->cart_cookie_id;
        $cart->qty = $request->qty;
        $cart->price = $request->price;
        $cart->varient_id = $request->varient_id;
        $cart->original_price = (int)$request->original_price;
        $cart->discount = (int) $request->p_discount;
        $cart->discount_id = (int)  $request->discount_id;
        $cart->save();

    }
    public function get_cookie_session_cart(Request $request){
        $cart = DB::table('carts')->where('cart_cookie_id',$request->cart_cookie_id)->get();
        if(sizeof($cart) > 0){
            $cart_products = [];
            $cart_totals = 0;
            $discount = 0;
            $sub_cart_totals = 0;
            foreach($cart as $key => $c){
                $sub_cart_totals = $sub_cart_totals + (int)$c->original_price;
                $cart_totals = $cart_totals + (int)$c->price;
                $discount = (int)$c->discount + (int)$discount;
                $product = DB::table('products')
                            ->where('id',$c->product_id)
                            ->get();
                foreach($product as $p){
                    $images = DB::table('product_images')->where('product_id',$p->id)->get();
                    $p->images = $images;
                    $varients = DB::table('product_variations')->where('id',$c->varient_id)->get();
                    $p->varients = $varients;
                    $cheep_varient = $varients[0];
                    $price = 0;
                }
                $cart[$key]->product = $product;
            }
            $cart[0]->sub_cart_totals = $sub_cart_totals;
            $cart[0]->cart_totals = $cart_totals;
            $cart[0]->discounts = $discount;
            $response = ['status' => 200 , 'cart' => $cart];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Cart Is Empty'];
            return $response;
        }
    }
    public function get_dis_cookie_session_cart(Request $request){
        $cart = DB::table('dis_carts')->where('cart_cookie_id',$request->cart_cookie_id)->get();
        if(sizeof($cart) > 0){
            $cart_products = [];
            $cart_totals = 0;
            $discount = 0;
            $sub_cart_totals = 0;
            foreach($cart as $key => $c){
                $sub_cart_totals = $sub_cart_totals + (int)$c->original_price;
                $cart_totals = $cart_totals + (int)$c->price;
                $discount = (int)$c->discount + (int)$discount;
                $product = DB::table('products')
                            ->where('id',$c->product_id)
                            ->get();
                foreach($product as $p){
                    $images = DB::table('product_images')->where('product_id',$p->id)->get();
                    $p->images = $images;
                    $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
                    $p->varients = $varients;
                    $cheep_varient = $varients[0];
                    $price = 0;
                }
                $cart[$key]->product = $product;
            }
            $cart[0]->sub_cart_totals = $sub_cart_totals;
            $cart[0]->cart_totals = $cart_totals;
            $cart[0]->discounts = $discount;
            $response = ['status' => 200 , 'cart' => $cart];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Cart Is Empty'];
            return $response;
        }
    }
    public function remove_product_from_cart(Request $request){
        $cart = Cart::find($request->id);
        $cart->delete();
    }
    public function remove_dis_product_from_cart(Request $request){
        $cart = Dis_Cart::find($request->id);
        $cart->delete();
    }
    public function Add_new_customer(Request $request){

        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'email' => 'email|unique:customers,email|max:255',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'address' => 'required',
            'password' => 'required|min:6'
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
            $cus = new Customer();
            $cus->fname = $request->fname;
            $cus->lname = $request->lname;
            $cus->email = $request->email;
            $cus->password = $request->password;
            $cus->phone = $request->phone;
            $cus->address = $request->address;
            $cus->token = Hash::make(time());
            $cus->status = 'Active';
            $cus->save();
            $response = ['status' => 200 , 'cus' => $cus];
            return $response;
        }
    }

    public function update_cutomer_profile(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'address' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }else{
        $c = Customer::find($request->id);
        $c->fname = $request->fname;
        $c->lname = $request->lname;
        $c->phone = $request->phone;
        $c->address = $request->address;
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $c->image = $name;
        }
        $c->save();
        $response = ['status' => 200 , 'cus' => $c];
        return $response;
        }
    }
    
    public function update_customer(Request $request){
        $c = Customer::find($request->id);
        $c->status = $request->status;
        $c->save();
    }
    public function get_customer_by_id(Request $request){
        $c = Customer::find($request->id);
        return $c;
    }
    public function search_customers(Request $request){
        $customer = DB::table('customers')->where('id', 'like', '%' .$request->string. '%')
                    ->orWhere('email', 'like', '%' . $request->string . '%')
                    ->orWhere('name', 'like', '%' . $request->string . '%')->limit(100)->get();
                   
        return $customer;
    }
    public function customer_login(Request $request){
        $c = DB::table('customers')->where('email',$request->username)
        ->get();
        if(sizeof($c) > 0){
            if($c[0]->password == $request->password){
                $cus = Customer::find($c[0]->id);
                $cus->token = Hash::make($c[0]->id);
                $cus->save();
                $response = ['status' => 200 , 'cus' => $cus];
                return $response;
            }else{
                $response = ['status' => 401 , 'msg' => 'Wrong Password'];
                return $response;
            }
            
        }else{
            $response = ['status' => 401 , 'msg' => 'Error- Wrong Username or email'];
            return $response;
        }
    }

    public function check_customer_auth(Request $request){
        $c = DB::table('customers')->where('token',$request->token)
        ->get();
        if(sizeof($c) > 0){
           
            $response = ['status' => 200 , 'cus' => $c];
            return $response;
        }else{
            $response = ['status' => 401 , 'msg' => 'Error- Authentication failed'];
            return $response;
        }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
