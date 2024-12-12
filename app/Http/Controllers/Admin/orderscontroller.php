<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Customer;
use App\Order;
use DB;
use PDF;
use App\Product_Images;
use App\Product_Variations;
use App\Product;
use App\Order_Products;
use App\Dis_Order;
use App\Dis_Order_Products;
use App\Http\Controllers\Controller;

class orderscontroller extends Controller
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

    public function get_all_customers(){
        $customers = Customer::all();
        return $customers;
    }
    
    public function get_all_orders(){
        $orders = Order::orderBy('id', 'DESC')->limit(50)->get();
        return $orders;
    }
    public function get_dis_all_orders(){
        $orders = Dis_Order::orderBy('id', 'DESC')->limit(50)->get();
        return $orders;
    }
    public function update_distributor_order_payment(Request $request){
        $order = Dis_Order::find($request->id);
        $order->payment = (int) $request->payment;
        $order->save();
    }
    public function update_distributor_order_status(Request $request){
        $order = Dis_Order::find($request->id);
        $order->status = $request->status;
        $order->save();
    }
    public function update_customer_order_status(Request $request){
        $order = Order::find($request->id);
        $order->status = $request->status;
        $order->save();
    }
    public function print_order_invoice(Request $request){
        $order = $this->get_order_by_id($request);
        view()->share('order',$order);
        $pdf = PDF::loadView('Pdf/OrderInvoice');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream();
    }
    public function print_dis_order_invoice(Request $request){
        $order = $this->get_dis_order_by_id($request);
        view()->share('order',$order);
        $pdf = PDF::loadView('Pdf/Dis_OrderInvoice');
        $pdf->setPaper('A4', 'portrait');   
        return $pdf->stream();
    }
    public function get_orders_by_customer_id(Request $request){
        $orders = DB::table('orders')
                    ->where('cus_id',$request->cus_id)
                    ->orderBy('id', 'DESC')
                    ->paginate(10);
        return $orders;
    }
    public function get_orders_by_distributor_id(Request $request){
        $orders = DB::table('dis_orders')
                    ->where('dis_id',$request->dis_id)
                    ->orderBy('id', 'DESC')
                    ->paginate(10);
        return $orders;
    }
    public function get_dis_orders_by_customer_id(Request $request){
        $orders = DB::table('dis_orders')
                    ->where('dis_id',$request->dis_id)
                    ->orderBy('id', 'DESC')
                    ->paginate(10);
        return $orders;
    }
    public function search_orders(Request $request){
        $orders = DB::table('orders')->where('id', 'like', '%' .$request->string. '%')
                    ->orWhere('date', 'like', '%' . $request->string . '%')
                    ->orWhere('email', 'like', '%' . $request->string . '%')
                    ->orWhere('phone', 'like', '%' . $request->string . '%')
                    ->orWhere('lname', 'like', '%' . $request->string . '%')
                    ->orWhere('cus_id', 'like', '%' . $request->string . '%')
                    ->orWhere('fname', 'like', '%' . $request->string . '%')
                    ->orderBy('id', 'DESC')->limit(100)->get();
                   
        return $orders;
    }
    public function search_dis_orders(Request $request){
        $orders = DB::table('dis_orders')->where('id', 'like', '%' .$request->string. '%')
                    ->orWhere('date', 'like', '%' . $request->string . '%')
                    ->orWhere('email', 'like', '%' . $request->string . '%')
                    ->orWhere('phone', 'like', '%' . $request->string . '%')
                    ->orWhere('lname', 'like', '%' . $request->string . '%')
                    ->orWhere('dis_id', 'like', '%' . $request->string . '%')
                    ->orWhere('fname', 'like', '%' . $request->string . '%')
                    ->orderBy('id', 'DESC')->limit(100)->get();
                   
        return $orders;
    }
    public function get_order_by_id(Request $request){
        $orders = Order::where('id',$request->id)
                    ->first();
        
            $products = Order_Products::where('order_id',$orders->id)->get();
            foreach($products as $p){
                $product =  Product::find($p->product_id);
                $p->product = $product;
                $p->images = Product_Images::where('product_id',$product->id)->get();
                $p->product->varients = Product_Variations::where('id',$p->varient_id)->get();
            }
            $orders->products = $products;
        
        return $orders;
    }
    public function get_dis_order_by_id(Request $request){
        $orders = Dis_Order::where('id',$request->id)
                    ->first();
        
            $products = Dis_Order_Products::where('order_id',$orders->id)->get();
            foreach($products as $p){
                $product =  Product::find($p->product_id);
                $p->product = $product;
                $p->images = Product_Images::where('product_id',$product->id)->get();
                $p->product->varients = Product_Variations::where('id',$p->varient_id)->get();
            }
            $orders->products = $products;
        
        return $orders;
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
