<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Role;
use DB;
use PDF;
use Hash;
use App\Permissions;
use App\AdminAccounts;
use App\Admin_Auth_Model;
use App\SliderImages;
use App\Order_Products;
use App\Dis_Order;
use App\Dis_Order_Products;
use App\Order;
use DateTime;
class AdminAccountsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function add_role(Request $request){
        $role = new Role();
        $role->name = $request->name;
        $role->save();
        $permissions = new Permissions();
        $permissions->role_id = $role->id;
        $permissions->save();
    }
    public function get_permissions_by_role_id(Request $request){
        $permissions = DB::table('permissions')
                        ->where('role_id',$request->role_id)
                        ->get();
        return $permissions;
    }
    public function update_permissions(Request $request){
        $permissions = Permissions::find($request->permission_id);
        $permissions->dashboard = $request->lists[0]['check'];
        $permissions->customers = $request->lists[1]['check'];
        $permissions->products = $request->lists[2]['check'];
        $permissions->distributors = $request->lists[3]['check'];
        $permissions->permissions = $request->lists[4]['check'];
        $permissions->reports = $request->lists[5]['check'];
        $permissions->save();
    }
    public function get_roles(Request $request){
        $roles = DB::table('roles')->get();
        return $roles;
    }
    public function search_customer_sales(Request $request){
        $orders = Order::all();
        $sales = [];
        $order_totals = 0;
        
        foreach($orders as $o){
            
            if(new DateTime($request->startdate) <= new DateTime($o->date) &&  new DateTime($request->enddate) >= new DateTime($o->date)){
                $products = Order_Products::join('products','products.id','=','order_products.product_id')
                                            ->select('order_products.order_id','order_products.product_id','order_products.discount'
                                            ,'order_products.varient_id','order_products.qty','order_products.price','products.name','products.code')
                                            ->where('order_id',$o->id)->get();
                foreach($products as $p){
                    array_push($sales,$p);
                }
                $order_totals = $order_totals + (int) $o->totals;

            }
        }
        if(sizeof($sales) > 0 ){
            $response = ['status' => 200 , 'sale_totals' => $order_totals , 'total_sales' => sizeof($sales) , 'sales' => $sales];
            return $response;
        }else{
            $response = ['status' => 404 ,'sale_totals' => $order_totals , 'total_sales' => sizeof($sales) , 'sales' => $sales];
            return $response;
        }
    }
    public function search_distributor_sales(Request $request){
        $orders = Dis_Order::all();
        $sales = [];
        $order_totals = 0;
        
        foreach($orders as $o){
            
            if(new DateTime($request->startdate) <= new DateTime($o->date) &&  new DateTime($request->enddate) >= new DateTime($o->date)){
                $products = Dis_Order_Products::join('products','products.id','=','dis_order_products.product_id')
                                            ->select('dis_order_products.order_id','dis_order_products.product_id','dis_order_products.discount'
                                            ,'dis_order_products.varient_id','dis_order_products.qty','dis_order_products.price','products.name','products.code')
                                            ->where('order_id',$o->id)->get();
                foreach($products as $p){
                    array_push($sales,$p);
                }
                $order_totals = $order_totals + (int) $o->totals;

            }
        }
        if(sizeof($sales) > 0 ){
            $response = ['status' => 200 , 'sale_totals' => $order_totals , 'total_sales' => sizeof($sales) , 'sales' => $sales];
            return $response;
        }else{
            $response = ['status' => 404 ,'sale_totals' => $order_totals , 'total_sales' => sizeof($sales) , 'sales' => $sales];
            return $response;
        }
    }
    public function search_distributor_Orders(Request $request){
        $orders = Dis_Order::all();
        $sales = [];
        $order_totals = 0;
        $total_orders = 0;
        $filter_orders = [];
        foreach($orders as $o){
            if(new DateTime($request->startdate) <= new DateTime($o->date) &&  new DateTime($request->enddate) >= new DateTime($o->date)){
                $order_totals = $order_totals + (int) $o->totals;
                $total_orders = $total_orders + 1;
                $filter_orders[] = $o;
            }
        }
        if(sizeof($filter_orders) > 0 ){
            $response = ['status' => 200 , 'order_totals' => $order_totals , 'total_orders' => $total_orders , 'Orders' => $filter_orders];
            return $response;
        }else{
            $response = ['status' => 404 , 'Orders' => $filter_orders];
            return $response;
        }
    }
    public function search_Customer_Orders(Request $request){
        $orders = Order::all();
        $sales = [];
        $order_totals = 0;
        $total_orders = 0;
        $filter_orders = [];
        foreach($orders as $o){
            if(new DateTime($request->startdate) <= new DateTime($o->date) &&  new DateTime($request->enddate) >= new DateTime($o->date)){
                $order_totals = $order_totals + (int) $o->totals;
                $total_orders = $total_orders + 1;
                $filter_orders[] = $o;
            }
        }
        if(sizeof($filter_orders) > 0 ){
            $response = ['status' => 200 , 'order_totals' => $order_totals , 'total_orders' => $total_orders , 'Orders' => $filter_orders];
            return $response;
        }else{
            $response = ['status' => 404 , 'Orders' => $filter_orders];
            return $response;
        }
    }
    public function print_customer_sales_report(Request $request){
        $sales = $this->search_customer_sales($request);
        $startdate = $request->startdate;
        $enddate = $request->enddate;
        $title = 'Retail Customer Sales Report';
        view()->share('sales',$sales);
        view()->share('startdate',$startdate);
        view()->share('enddate',$enddate);
        view()->share('title',$title);
        $pdf = PDF::loadView('Pdf/CustomerSalesReport');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream();
    }
    public function print_distributor_sales_report(Request $request){
        $sales = $this->search_distributor_sales($request);
        $startdate = $request->startdate;
        $enddate = $request->enddate;
        $title = 'Distributors Sales Report';
        view()->share('sales',$sales);
        view()->share('startdate',$startdate);
        view()->share('enddate',$enddate);
        view()->share('title',$title);
        $pdf = PDF::loadView('Pdf/CustomerSalesReport');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream();
    }
    public function print_customer_orders_report(Request $request){
        $orders = $this->search_Customer_Orders($request);
        $startdate = $request->startdate;
        $enddate = $request->enddate;
        $title = 'Retail Customer Orders Report';
        view()->share('orders',$orders);
        view()->share('startdate',$startdate);
        view()->share('enddate',$enddate);
        view()->share('title',$title);
        $pdf = PDF::loadView('Pdf/CustomerOrdersReport');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream();
    }
    public function print_distributors_orders_report(Request $request){
        $orders = $this->search_distributor_Orders($request);
        $startdate = $request->startdate;
        $enddate = $request->enddate;
        $title = 'Distributor Orders Report';
        view()->share('orders',$orders);
        view()->share('startdate',$startdate);
        view()->share('enddate',$enddate);
        view()->share('title',$title);
        $pdf = PDF::loadView('Pdf/DistributorsOrderReport');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream(); 
    }
    public function add_admin_account(Request $request){
        $new = new AdminAccounts();
        $new->fname = $request->fname;
        $new->email = $request->email;
        $new->password = $request->password;
        $new->role_id = $request->role_id;
        $new->surname = $request->surname;
        $new->job_designation = $request->job_designation;
        $new->telephone = $request->telephone;
        $new->pin_code = $request->pin_code;
        $new->status = 'Active';
        $new->save();

    }
    public function add_slider_img(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $p_image = new SliderImages();
            $p_image->image = $name;
            $p_image->save();
        }
    }
    public function update_slider_img(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $p_image = SliderImages::find($request->id);
            $p_image->image = $name;
            $p_image->save();
        }
    }
    
    public function delete_slider_img(Request $request){
        $sliderimages = SliderImages::find($request->id);
        $sliderimages->delete();
    }
    public function get_slider_images(Request $request){
        $sliderimages = DB::table('sliderimages')
                            ->get();
        return $sliderimages;
    }
    
    public function Update_admin_account(Request $request){
        $new = AdminAccounts::find($request->id);
        $new->fname = $request->fname;
        $new->email = $request->email;
        $new->password = $request->password;
        $new->role_id = $request->role_id;
        $new->surname = $request->surname;
        $new->job_designation = $request->job_designation;
        $new->telephone = $request->telephone;
        $new->pin_code = $request->pin_code;
        $new->status =  $request->status;
        $new->save();

    }
    public function get_admin_account_by_id(Request $request){
        $admin = AdminAccounts::find($request->id);
        return $admin;
    }
    public function get_admin_accounts(Request $request){
        $admins = AdminAccounts::all();
        return $admins;
    }
    public function adminLogin(Request $request){
        $admin = DB::table('admin_accounts')
                    ->where('email',$request->username)
                    ->where('status','Active')
                    ->get();
        if(sizeof($admin) > 0){
            if($admin[0]->password == $request->password){
                $auth_meta = DB::table('admin_auth_meta')
                                ->where('admin_id',$admin[0]->id)
                                ->where('ip',$request->ip())
                                ->get();
                if(sizeof($auth_meta) > 0){
                    $token = $auth_meta[0]->token;
                }else{
                    $auth_meta = new Admin_Auth_Model();
                    $auth_meta->admin_id = $admin[0]->id;
                    $auth_meta->token = Hash::make($admin[0]->id);
                    $auth_meta->ip = $request->ip();
                    $auth_meta->validation = time();
                    $auth_meta->save();
                    $token = $auth_meta->token;
                    
                }
                $permissions = DB::table('permissions')
                                ->where('role_id',$admin[0]->role_id)
                                ->get();
                $admin[0]->permissions = $permissions;
                $admin[0]->token = $token;
                $response = ['status' => 200 , 'user' => $admin];
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
    public function admin_check_auth(Request $request){
        $admin_auth = DB::table('admin_auth_meta')
                ->where('token',$request->token)
                ->where('ip',$request->ip())
                ->get();
        if(sizeof($admin_auth) > 0){
            $admin = DB::table('admin_accounts')
                        ->where('id',$admin_auth[0]->admin_id)
                        ->where('status','Active')
                        ->get();
            $permissions = DB::table('permissions')
                            ->where('role_id',$admin[0]->role_id)
                            ->get();
            $admin[0]->permissions = $permissions;
            $response = ['status' => 200 , 'user' => $admin];
            return $response; 
        }else{
        $response = ['status' => 401 , 'msg' => 'Sorry, Incorrect Token'];
        return $response;
        }
    }
    public function index()
    {
        //
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
