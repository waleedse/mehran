<?php

namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Distributor;
use App\DistributorProductVariations;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;
use App\Mail\DistributorPassword;
use App\Product_Variations;
use DB;
use App\LoyaltyPoint;
use App\Dis_ForgotPassword;
use Validator;
use App\Mail\ForgotPasswordMail;
use Illuminate\Support\Facades\Crypt;

class DistributoresController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create_distributor(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'email' => 'email|unique:distributors,email|max:255',
            'company_name' => 'required',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'credit_limit' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }
        $new_distributors = new Distributor();
        $new_distributors->fname = $request->fname;
        $new_distributors->lname = $request->lname;
        $new_distributors->company = $request->company_name;
        $new_distributors->phone = $request->phone;
        $new_distributors->email = $request->email;
        $new_distributors->password = Str::random(10);
        $new_distributors->credit_limit = $request->credit_limit;
        $new_distributors->token = Hash::make(time());
        $new_distributors->address = $request->address;
        $new_distributors->country = $request->country;
        $new_distributors->city = $request->city;
        $new_distributors->gst = $request->gst;
        $new_distributors->status = 1;
        $new_distributors->save();
            $variations = Product_Variations::all();
            foreach($variations as $v){
                $dis_var = new DistributorProductVariations();
                $dis_var->variation_id	= $v->id;
                $dis_var->distributor_id = $new_distributors->id;
                $dis_var->discount = 0;
                $dis_var->save();
            }
            $body = $request->fname.', We Welcome you to be a part of Us.'.
            'Here below is your password for your account. ' ;
            
            $title = 'Distributors Account Credentials';
            Mail::to($request->email)->send(new DistributorPassword($title,$body,$new_distributors->password));
        $response = ['status' => 200 , 'msg' => 'Distributor Created successfully.' , 'distributor' => $new_distributors];
        return $response;
    }
    public function distributor_by_id (Request $request){
        $distributor = Distributor::find($request->id);
        if($distributor){
            $response = ['status' => 200 , 'distributor' => $distributor];
            return $response;
        }else{
            $response = ['status' => 404 ];
            return $response;
        }
    }
    public function get_loyalty_discount(Request $request){
        $distributor = Distributor::find($request->id);
        if($distributor){
            $points = $this->get_loyalty_points();
            $loyalty_discount = $points[1]->rs * $distributor->loyaltypoints;
            $response = ['status' => 200 , 'loyalty_discount' => $loyalty_discount];
            return $response;
        }else{
            $response = ['status' => 404 ];
            return $response;
        }
    }
    public function dis_ForgotPassword(Request $request){
        $c = Distributor::where('email',$request->email)->first();
        if($c){
            DB::table('dis_forgotpasswords')->where('email', $request->email)->update(array('status' => '0'));  
            $code=rand(1000,9999);	
            $p = new Dis_ForgotPassword();
            $p->email = $request->email;
            $p->token = $code;
            $p->status = 1;
            $p->save();
            $link = 'distributor/reset-password/'.Crypt::encrypt($p->token);
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
    public function save_loyaltiy_point(Request $request){
        $point = LoyaltyPoint::find($request->id);
        $point->point = $request->point;
        $point->rs = $request->rs;
        $point->save();
    }
    public function get_loyalty_points(){
        $points = LoyaltyPoint::all();
        return $points;
    }
    public function disPasswordReset(Request $request){
        
        $data =  Dis_ForgotPassword::where('token', Crypt::decrypt( $request->id))->where('status',1)->first();
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
                    $c =  Distributor::where('email', $data->email)->first(); 
                    $Customer = Distributor::find($c->id);                     
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
    public function update_distributor(Request $request){
        $validator = Validator::make($request->all(), [
            'fname' => 'required|min:3',
            'company_name' => 'required',
            'phone' => 'required|min:11',
            'lname' => 'required',
            'credit_limit' => 'required',
            'address' => 'required',
            'country' => 'required',
            'city' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first()];
            return $response;
        }
        $new_distributors = Distributor::find($request->id);
        $new_distributors->fname = $request->fname;
        $new_distributors->lname = $request->lname;
        $new_distributors->company = $request->company_name;
        $new_distributors->phone = $request->phone;
        $new_distributors->credit_limit = $request->credit_limit;
        $new_distributors->address = $request->address;
        $new_distributors->country = $request->country;
        $new_distributors->city = $request->city;
        $new_distributors->gst = $request->gst;
        $new_distributors->save();
        $response = ['status' => 200 , 'msg' => 'Distributor Updated successfully.'];
        return $response;
    }
    public function update_distributor_profile(Request $request){
        $d = Distributor::find($request->id);
        
        $d->fname = $request->fname;
        $d->lname = $request->lname;
        $d->company = $request->company;
        $d->city = $request->city;
        $d->address = $request->address;
        $d->phone = $request->phone;
        $d->country = $request->country;
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $d->image = $name;
        }
        $d->save();
    }
    public function distributorLogin(Request $request){
        $admin = DB::table('distributors')
                    ->where('email',$request->username)
                    ->where('status',1)
                    ->get();
        if(sizeof($admin) > 0){
            if($admin[0]->password == $request->password){
                $distributor = Distributor::find($admin[0]->id);
                $distributor->token = Hash::make(time());
                $distributor->save();
                $response = ['status' => 200 , 'distributor' => $distributor];
                return $response; 
            }else{
                $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Credentials'];
                return $response;
            }
        }else{
            $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Credentials'];
            return $response;
        }
    }
    public function distributor_check_auth(Request $request){
        $dis_auth = DB::table('distributors')
                ->where('token',$request->token)
                ->get();
        if(sizeof($dis_auth) > 0){
            $response = ['status' => 200 , 'distributor' => $dis_auth];
            return $response; 
        }else{
        $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Token'];
        return $response;
        }
    }
    public function get_distributors(Request $request){
        $distributors = Distributor::all();
        $response = ['status' => 200 , 'distributors' => $distributors];
        return $response;
    }
    public function get_distributor_product_variations(Request $request){
        $variations = DB::table('distributors_product_variations')
                        ->join('product_variations','product_variations.id' , '=' , 'distributors_product_variations.variation_id')
                        ->where('product_variations.product_id',$request->product_id)
                        ->where('distributors_product_variations.distributor_id',$request->distributor_id)
                        ->select('distributors_product_variations.discount','distributors_product_variations.id','distributors_product_variations.variation_id',
                        'product_variations.product_id','product_variations.price','product_variations.name')
                        ->get();
        return $variations;
    }
    public function update_distributor_varients(Request $request){
            $dis_var = DistributorProductVariations::find($request->id);
            $dis_var->discount = $request->discount;
            $dis_var->save();
    }
    public function search_distributors(Request $request){
        $distributors = DB::table('distributors')->where('id', 'like', '%' .$request->string. '%')
                    ->orWhere('fname', 'like', '%' . $request->string . '%')
                    ->orWhere('company', 'like', '%' . $request->string . '%')
                    ->orWhere('phone', 'like', '%' . $request->string . '%')
                    ->orWhere('email', 'like', '%' . $request->string . '%')
                    ->orWhere('lname', 'like', '%' . $request->string . '%')->limit(100)->get();
                   
        return $distributors;
    }
    public function distributor_discount_products(Request $request){
        $products = DB::table('products')
                        ->get();
        $dicounted_products = [];
        foreach($products as $p){
            $dis_var = DB::table('distributors_product_variations')
                    ->join('product_variations','product_variations.id' , '=' , 'distributors_product_variations.variation_id')
                    ->where('product_variations.product_id',$p->id)
                    ->where('distributors_product_variations.distributor_id',$request->distributor_id)
                    ->select('distributors_product_variations.discount','distributors_product_variations.id','distributors_product_variations.variation_id',
                    'product_variations.product_id','product_variations.price','product_variations.name')
                    ->get();
            foreach($dis_var as $dv){
                if($dv->discount > 0){
                    $p->varient = $dv;
                    $dicounted_products[] = $p;
                }
            }
          
        }
            
        return $dicounted_products;
    }
    public function get_distributor_by_id(Request $request){
        $distributor = Distributor::find($request->id);
        return $distributor;
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
    public function update(Request $request)
    {
        
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
