<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Category;
use App\Subcategory;
use App\Product_Images;
use App\Product_Variations;
use App\Product;
use App\ProductValues;
use App\Customer;
use App\Order;
use Validator;
use App\Dis_Order_Products;
use App\Order_Products;
use App\DicountVariation;
use App\Distributor;
use App\DistributorProductVariations;
use App\Http\Controllers\Controller;
use Intervention\Image\ImageManagerStatic as Image;
use DB;
use App\AutomaticDiscount;
use App\Dis_Order;
use DateTime;
use App\Discountcode;
use Exception;

class productscontroller extends Controller
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

    public function add_product(Request $request){
        $p_code = DB::table('products')
                        ->where('code',$request->p_code)
                        ->get();
        if(sizeof($p_code) == 0){
            $new_product = new Product();
            $new_product->name = $request->p_name;
            $new_product->code = $request->p_code;
            $new_product->description = $request->p_description;
            $new_product->varient_type = $request->p_varient_type;
            $new_product->qty_type = $request->p_qnty_type;
            $new_product->cat_id = $request->p_cat_id;
            $new_product->sub_cat_id = $request->p_subcat_id;
            $new_product->enabled = $request->p_enabled;
            $new_product->retail = $request->p_retail;
            $new_product->distribution = $request->p_distribution;
            $new_product->featuerd = $request->p_featuerd;
            $new_product->p_short_description = $request->p_short_description;
            $new_product->feature_image = $request->feature_image;
            $new_product->save();
                $name = '';
                foreach ($request['files'] as $file) {
                    $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
                    \Image::make($file[0])->save(public_path('images/') . $name);
                    $p_image = new Product_Images();
                    $p_image->product_id = $new_product->id;
                    $p_image->image = $name;
                    $p_image->save();
                }
                foreach($request->varients as $v){
                    $p_variations = new Product_Variations();
                    $p_variations->product_id = $new_product->id;
                    $p_variations->name = $v['varient'];
                    $p_variations->price = $v['price'];
                    $p_variations->save();
                    $distributors = Distributor::all();
                    foreach($distributors as $d){
                        $dis_var = new DistributorProductVariations();
                        $dis_var->variation_id	= $p_variations->id;
                        $dis_var->distributor_id = $d->id;
                        $dis_var->discount = 0;
                        $dis_var->save();
                    }
                }
            return 1;
        }else{
            return 0;
        }

    }
    public function upload_file(Request $request){
        try{
            if ($request->hasFile('file')) {
                $file = $request->file;
                $filename = $file->getClientOriginalName();
                $image = date('His') . $filename;
                $destination_path = public_path() . '/images/';
                $file->move($destination_path, $image);
                $url = $image;
                $response = ['status' => 200 , 'msg' =>'File Uploaded.','url' => $url];
                return $response;
            }
        }catch(Exception $e){
            $response = ['status' => 401 , 'msg' => 'File Uploaded.','error' => $e];
            return $response;
        }
    }
    public function get_all_products(Request $request){
        $products = DB::table('products')
                        ->get();
        foreach($products as $p){
            $images = DB::table('product_images')->where('product_id',$p->id)->get();
            $p->images = $images;
        }
        return $products;
    }
    public function deleteproduct(Request $request){
        $product =  Product::find($request->id);
        $product->delete();
    }
    public function get_product_by_id(Request $request){
        $product =  Product::find($request->id);
        $product->images = DB::table('product_images')->where('product_id',$product->id)->get();
        $product->varients = DB::table('product_variations')->where('product_id',$product->id)->get();
        return $product;
    }
    public function get_dis_product_by_id(Request $request){
        $product =  Product::find($request->id);
        $product->images = DB::table('product_images')->where('product_id',$product->id)->get();
        $product->varients = DB::table('product_variations')->where('product_id',$product->id)->get();
        return $product;
    }
    public function get_featuerd_products(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('featuerd' , '1')
        ->get();
        $discount = AutomaticDiscount::where('status',1)->get();
        $check = 0;
        $filter_discount = [];
        foreach($discount as $d){
            if(new DateTime($d->startdate) <= new DateTime("now") &&  new DateTime($d->enddate) >= new DateTime("now")){
                $filter_discount = $d;
                $check = 1;
            }
        }
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($filter_discount){
                $d_v = DicountVariation::where('variation_id',$v->id)->where('discount_id',$filter_discount->id)->first();
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }
            }
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_products_by_sub_cat(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('sub_cat_id',$request->id)
        ->get();
        $discount = AutomaticDiscount::where('status',1)->get();
        $check = 0;
        $filter_discount = [];
        foreach($discount as $d){
            if(new DateTime($d->startdate) <= new DateTime("now") &&  new DateTime($d->enddate) >= new DateTime("now")){
                $filter_discount = $d;
                $check = 1;
            }
        }
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($filter_discount){
                $d_v = DicountVariation::where('variation_id',$v->id)->where('discount_id',$filter_discount->id)->first();
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }
            }
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_dis_products_by_sub_cat(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('distribution', '1')
        ->where('sub_cat_id',$request->id)
        ->get();

        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
                $dis = Distributor::where('token',$request->dis_token)->first();
                $d_v = null;
                if($dis){
                    $d_v = DistributorProductVariations::where('variation_id',$v->id)->where('distributor_id',$dis->id)->first();
                }
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function add_product_values(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
        }
        $newValue = new ProductValues();
        $newValue->image = $name;
        $newValue->product_id = $request->id;
        $newValue->name = $request->name;
        $newValue->description = $request->description;
        $newValue->save();
    }
    public function get_product_values(Request $request){
        $product_values = DB::table('productvalues')
                            ->where('product_id',$request->id)
                            ->get();
        return $product_values;
    }
    public function update_product_values(Request $request){
        $pr = ProductValues::find($request->id);
        $pr->name = $request->name;
        $pr->description = $request->description;
        $pr->save();
    }
    public function delete_product_values(Request $request){
        $pr = ProductValues::find($request->id);
        $pr->delete();
    }
    public function add_product_img(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $p_image = new Product_Images();
            $p_image->product_id = $request->id;
            $p_image->image = $name;
            $p_image->save();
        }
    }
    public function delete_produc_img(Request $request){
        $p_img = Product_Images::find($request->id);
        $p_img->delete();
    }
    public function get_product_images(Request $request){
        $product_images = DB::table('product_images')
                            ->where('product_id',$request->id)
                            ->get();
        return $product_images;
    }
    public function search_product(Request $request){
        $products = DB::table('products')->where('id', 'like', '%' .$request->string. '%')
                    ->orWhere('code', 'like', '%' . $request->string . '%')
                    ->orWhere('name', 'like', '%' . $request->string . '%')->limit(100)->get();
                    foreach($products as $p){
                        $images = DB::table('product_images')->where('product_id',$p->id)->get();
                        $p->images = $images;
                    }
        return $products;
    }
    public function get_category_by_sub_cat_id(Request $request){
        $sub_cat = DB::table('subcategories')
                    ->join('categories','categories.id' , '=' , 'subcategories.cat_id')
                    ->where('subcategories.id',$request->id)
                    ->select('categories.name','subcategories.image')
                    ->get();
        return $sub_cat;
    }
    public function get_all_enabled_products(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->get();
        $discount = AutomaticDiscount::where('status',1)->get();
        $check = 0;
        $filter_discount = [];
        foreach($discount as $d){
            if(new DateTime($d->startdate) <= new DateTime("now") &&  new DateTime($d->enddate) >= new DateTime("now")){
                $filter_discount = $d;
                $check = 1;
            }
        }
        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($filter_discount){
                $d_v = DicountVariation::where('variation_id',$v->id)->where('discount_id',$filter_discount->id)->first();
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }
            }
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_product_enabled_by_id(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('id',$request->id)
        ->get();
        $discount = AutomaticDiscount::where('status',1)->get();
        $check = 0;
        $filter_discount = [];
        foreach($discount as $d){
            if(new DateTime($d->startdate) <= new DateTime("now") &&  new DateTime($d->enddate) >= new DateTime("now")){
                $filter_discount = $d;
                $check = 1;
            }
        }

        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){
            if($filter_discount){
                $d_v = DicountVariation::where('variation_id',$v->id)->where('discount_id',$filter_discount->id)->first();
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }
            }
            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_dis_product_enabled_by_id(Request $request){
        $products = DB::table('products')
        ->where('enabled','1')
        ->where('retail', '1')
        ->where('id',$request->id)
        ->get();


        foreach($products as $p){
        $images = DB::table('product_images')->where('product_id',$p->id)->get();
        $p->images = $images;
        $varients = DB::table('product_variations')->where('product_id',$p->id)->get();
        $p->varients = $varients;
        $cheep_varient = $varients[0];
        $price = 0;
        foreach($varients as $v){

            $dis = Distributor::where('token',$request->dis_token)->first();
                $d_v = null;
                if($dis){
                    $d_v = DistributorProductVariations::where('variation_id',$v->id)->where('distributor_id',$dis->id)->first();
                }
                if($d_v){
                    $v->discount = $d_v->discount;
                    $v->discount_id = $d_v->discount_id;
                    $v->original_price = $v->price;
                    $v->price = (int)$v->price - (int) $d_v->discount;
                }else{
                    $v->discount = 0 ;
                    $v->discount_id = 0 ;
                    $v->original_price = $v->price;
                }

            if($cheep_varient->price > $v->price){
                $cheep_varient = $v;
            }
        }
        $p->cheep_varient = $cheep_varient;
        }
        return $products;
    }
    public function get_cats_with_subs(Request $request){
        $categories = DB::table('categories')->get();
        foreach($categories as $c){
            $c->subcategories = DB::table('subcategories')
                                        ->where('cat_id',$c->id)
                                        ->get();

        }
        return $categories;
    }
    public function get_cities(){
        $cities = DB::table('cities')->get();
        return $cities;
    }
    public function update_city_price(Request $request){
        $city = DB::table('cities')
        ->where('id',$request->id)
        ->update(['price'=>$request->price]);
    }
    public function update_varients(Request $request){
        if($request->id == 0){
            // return $request;
            $p_variations = new Product_Variations();
            $p_variations->product_id = $request->pid;
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
            $distributors = Distributor::all();
            foreach($distributors as $d){
                        $dis_var = new DistributorProductVariations();
                        $dis_var->variation_id	= $p_variations->id;
                        $dis_var->distributor_id = $d->id;
                        $dis_var->discount = 0;
                        $dis_var->save();
                    }
        }else{
            $p_variations = Product_Variations::find($request->id);
            $p_variations->name = $request->name;
            $p_variations->price = $request->price;
            $p_variations->save();
        }
    }
    public function deletep_variations(Request $request){
        $p_variations = Product_Variations::find($request->id);
        $p_variations->delete();
    }
    public function update_product(Request $request){
        $new_product = Product::find($request->id);
        $new_product->name = $request->p_name;
        $new_product->code = $request->p_code;
        $new_product->description = $request->p_description;
        $new_product->varient_type = $request->p_varient_type;
        $new_product->qty_type = $request->p_qnty_type;
        $new_product->cat_id = $request->p_cat_id;
        $new_product->sub_cat_id = $request->p_subcat_id;
        $new_product->enabled = $request->p_enabled;
        $new_product->retail = $request->p_retail;
        $new_product->distribution = $request->p_distribution;
        $new_product->featuerd = $request->p_featuerd;
        $new_product->p_short_description = $request->p_short_description;
        $new_product->feature_image = $request->feature_image;
        $new_product->save();
    }
    public function addcategory(Request $request){
        $new_cat = new Category();
        $new_cat->name = $request->name;
        $new_cat->save();
    }

    public function update_category(Request $request){
        $up_cat = Category::find($request->id);
        $up_cat->name = $request->name;
        $up_cat->save();
    }

    public function get_allcategories(){
        $cats = Category::all();
        return $cats;
    }
    public function delete_category(Request $request){
        $up_cat = Category::find($request->id);
        $up_cat->delete();
    }
    public function addSubcategory(Request $request){
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
        }
        $new_cat = new Subcategory();
        $new_cat->cat_id = $request->cat_id;
        $new_cat->name = $request->name;
        $new_cat->image = $name;
        $new_cat->save();
    }

    public function update_Subcategory(Request $request){
        $up_cat = Subcategory::find($request->id);
        $up_cat->cat_id = $request->cat_id;
        $name = '';
        foreach ($request['files'] as $file) {
            $name = time() . '.' . explode('/', explode(':', substr($file[0], 0, strpos($file[0], ';')))[1])[1];
            \Image::make($file[0])->save(public_path('images/') . $name);
            $up_cat->image = $name;
        }
        $up_cat->name = $request->name;
        $up_cat->save();
    }
    public function get_admin_dash_data(){
        $users = Customer::all();
        $products = Product::all();
        $orders = Order::all();
        $dis_orders = Dis_Order::all();
        $pending = Order::where('status','Pending')->get();
        $Processing = Order::where('status','Processing')->get();
        $Completed = Order::where('status','Completed')->get();
        $dis_pending = Dis_Order::where('status','Pending')->get();
        $dis_Processing = Dis_Order::where('status','Processing')->get();
        $dis_Completed = Dis_Order::where('status','Completed')->get();
        $cus_sales = 0;
        $dis_sales = 0;
        $o_dates = [];
        $charorders = Order::orderBy('id', 'DESC')->limit(50)->get();
        foreach($charorders as $o){
          $cus_sales  = $cus_sales + sizeof(Order_Products::where('order_id',$o->id)->get());
          if(sizeof($o_dates) > 0){
            $check = 0;
            foreach($o_dates as $od){
                if($od == $o->date){
                    $check = 1;
                }
            }
            if($check == 0){
                array_push($o_dates,$o->date);
            }
          }else{
            array_push($o_dates,$o->date);
          }
        }
        $dates_orders = [];
        foreach($o_dates as $od){
            $dates_orders[] = sizeof(Order::where('date',$od)->get());
        }
        foreach($dis_orders as $o){
            $dis_sales  = $dis_sales + sizeof(Dis_Order_Products::where('order_id',$o->id)->get());
          }
        $pending = sizeof($pending) + sizeof($dis_pending);
        $Processing = sizeof($Processing) + sizeof($dis_Processing);
        $dis_Completed = sizeof($Completed) + sizeof($dis_Completed);
        $enabled_products = Product::where('enabled',1)->get();
        $unenabled_products = Product::where('enabled',0)->get();
        $featured_products = Product::where('featuerd',1)->get();
        $distributors = Distributor::all();
        $response = ['users' => sizeof($users) , 'products' => sizeof($products) ,
        'orders' => sizeof($orders) , 'dis_orders' => sizeof($dis_orders) ,
         'enabled_products' => sizeof($enabled_products) ,
         'unenabled_products' => sizeof($unenabled_products) ,
         'featured_products' => sizeof($featured_products),
         'distributors' => sizeof($distributors),
         'dis_sales' => $dis_sales,
         'cus_sales' => $cus_sales,
         'pending_orders' => $pending , 'completed_orders' => $Completed ,
        'processing_orders' => $Processing,
        'o_dates' => $o_dates,
        'total_orders_by_date' => $dates_orders];
        return $response;
    }

    public function get_Subcategory(Request $request){
        $categories = $this->get_allcategories();
        $subs = [];
        foreach($categories as $c){
            $cat_subs = Subcategory::where('cat_id',$c->id)->get();
           foreach($cat_subs as $cs){
                $subs[] = $cs;
           }

        }
        return $subs;
    }
    public function get_categories_with_sub_cats(Request $request){
        $cats = DB::table('categories')
                    ->join('subcategories','subcategories.cat_id','=','categories.id')
                    ->get();
        return $cats;
    }
    public function delete_Subcategory(Request $request){
        $up_cat = Subcategory::find($request->id);
        $up_cat->delete();
    }
    public function get_discount_codes(Request $request){
        $codes = Discountcode::all();
        return $codes;
    }
    public function create_discount_codes(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'discount' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
        ]);

        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() ,
            'errors' => $validator->errors()];
            return $response;
        }else{
            $code = new Discountcode();
            $code->name = $request->name;
            $code->discount = $request->discount;
            $code->startdate = $request->startdate;
            $code->enddate = $request->enddate;
            $code->status = 1;
            $code->save();
            $response = ['status' => 200 , 'msg' => 'Discount Code Created Successfully' ,
                ];
            return $response;
        }
    }

    public function update_discount_codes(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'discount' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',

        ]);

        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() ,
            'errors' => $validator->errors()];
            return $response;
        }else{
            $code = Discountcode::find($request->id);
            $code->name = $request->name;
            $code->discount = $request->discount;
            $code->startdate = $request->startdate;
            $code->enddate = $request->enddate;
            $code->status = $request->status;
            $code->save();
            $response = ['status' => 200 , 'msg' => 'Discount Code Updated Successfully' ,
                ];
            return $response;
        }
    }
    public function get_automatic_discount_codes(Request $request){
        $codes = AutomaticDiscount::all();
        return $codes;
    }
    public function create_automatic_discount_codes(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'startdate' => 'required',
            'enddate' => 'required',
        ]);

        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() ,
            'errors' => $validator->errors()];
            return $response;
        }else{
            $code = new AutomaticDiscount();
            $code->name = $request->name;
            $code->startdate = $request->startdate;
            $code->enddate = $request->enddate;
            $code->status = 1;
            $code->save();
            $variations = Product_Variations::all();
            foreach($variations as $v){
                $dis_var = new DicountVariation();
                $dis_var->variation_id	= $v->id;
                $dis_var->discount_id = $code->id;
                $dis_var->discount = 0;
                $dis_var->save();
            }
            $response = ['status' => 200 , 'msg' => 'Automatic Discount Code Created Successfully' ,
                ];
            return $response;
        }
    }
    public function get_discount_product_variations(Request $request){
        $variations = DB::table('discountvariations')
                        ->join('product_variations','product_variations.id' , '=' , 'discountvariations.variation_id')
                        ->where('product_variations.product_id',$request->product_id)
                        ->where('discountvariations.discount_id',$request->discount_id)
                        ->select('discountvariations.discount','discountvariations.id','discountvariations.variation_id',
                        'product_variations.product_id','product_variations.price','product_variations.name')
                        ->get();
        return $variations;
    }
    public function update_discount_varients(Request $request){
            $dis_var = DicountVariation::find($request->id);
            $dis_var->discount = $request->discount;
            $dis_var->save();
    }
    public function update_automatic_discount_codes(Request $request){
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:3',
            'startdate' => 'required',
            'enddate' => 'required',

        ]);

        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() ,
            'errors' => $validator->errors()];
            return $response;
        }else{
            $code = AutomaticDiscount::find($request->id);
            $code->name = $request->name;
            $code->startdate = $request->startdate;
            $code->enddate = $request->enddate;
            $code->status = $request->status;
            $code->save();
            $response = ['status' => 200 , 'msg' => 'Automatic Discount Code Updated Successfully' ,
                ];
            return $response;
        }
    }

    public function check_discount_code(Request $request){
        $validator = Validator::make($request->all(), [
            'code' => 'required',
        ]);

        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first() ,
            'errors' => $validator->errors()];
            return $response;
        }else{
            $code = Discountcode::where('name', $request->code)->where('status' , 1)->first();
            if($code){

                if(new DateTime($code->startdate) <= new DateTime("now") &&  new DateTime($code->enddate) >= new DateTime("now")){
                    $response = ['status' => 200 , 'msg' => 'Code Validation successfull' , 'code' => $code ];
                    return $response;
                }else{
                    $response = ['status' => 219 , 'msg' => 'Discount Code is Expired.'
            ];
            return $response;
                }
            }else{
                $response = ['status' => 219 , 'msg' => 'Invalid Discount Code.' ,
            ];
            return $response;
            }
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
