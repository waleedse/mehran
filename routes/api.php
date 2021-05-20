<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Admin Routes 


//products Controller Routes
Route::post('/get_admin_dash_data', 'Admin\productscontroller@get_admin_dash_data');

Route::post('/addcategory', 'Admin\productscontroller@addcategory');
Route::post('/update_category', 'Admin\productscontroller@update_category');
Route::post('/get_allcategories', 'Admin\productscontroller@get_allcategories');
Route::post('/delete_category', 'Admin\productscontroller@delete_category');

Route::post('/addSubcategory', 'Admin\productscontroller@addSubcategory');
Route::post('/update_Subcategory', 'Admin\productscontroller@update_Subcategory');
Route::post('/get_Subcategory', 'Admin\productscontroller@get_Subcategory');
Route::post('/delete_Subcategory', 'Admin\productscontroller@delete_Subcategory');
Route::post('/get_categories_with_sub_cats', 'Admin\productscontroller@get_categories_with_sub_cats');

Route::post('/add_product', 'Admin\productscontroller@add_product');
Route::post('/get_all_products', 'Admin\productscontroller@get_all_products');
Route::post('/get_product_by_id', 'Admin\productscontroller@get_product_by_id');
Route::post('/update_product', 'Admin\productscontroller@update_product');
Route::post('/deleteproduct', 'Admin\productscontroller@deleteproduct');
Route::post('/get_cats_with_subs', 'Admin\productscontroller@get_cats_with_subs');
Route::post('/get_featuerd_products', 'Admin\productscontroller@get_featuerd_products');
Route::post('/get_products_by_sub_cat', 'Admin\productscontroller@get_products_by_sub_cat');
Route::post('/get_all_enabled_products', 'Admin\productscontroller@get_all_enabled_products');
Route::post('/get_product_enabled_by_id', 'Admin\productscontroller@get_product_enabled_by_id');
Route::post('/get_category_by_sub_cat_id', 'Admin\productscontroller@get_category_by_sub_cat_id');
Route::post('/add_product_values', 'Admin\productscontroller@add_product_values');
Route::post('/get_product_values', 'Admin\productscontroller@get_product_values');
Route::post('/update_product_values', 'Admin\productscontroller@update_product_values');
Route::post('/delete_product_values', 'Admin\productscontroller@delete_product_values');
Route::post('/delete_produc_img', 'Admin\productscontroller@delete_produc_img');
Route::post('/add_product_img', 'Admin\productscontroller@add_product_img');
Route::post('/get_product_images', 'Admin\productscontroller@get_product_images');
Route::post('/update_varients', 'Admin\productscontroller@update_varients');
Route::post('/deletep_variations', 'Admin\productscontroller@deletep_variations');
Route::post('/search_product', 'Admin\productscontroller@search_product');
Route::post('/get_cities', 'Admin\productscontroller@get_cities');
Route::post('/update_city_price', 'Admin\productscontroller@update_city_price');
Route::post('/create_discount_codes', 'Admin\productscontroller@create_discount_codes');
Route::post('/get_discount_codes', 'Admin\productscontroller@get_discount_codes');
Route::post('/update_discount_codes', 'Admin\productscontroller@update_discount_codes');
Route::post('/check_discount_code', 'Admin\productscontroller@check_discount_code');
Route::post('/get_automatic_discount_codes', 'Admin\productscontroller@get_automatic_discount_codes');
Route::post('/create_automatic_discount_codes', 'Admin\productscontroller@create_automatic_discount_codes');
Route::post('/update_automatic_discount_codes', 'Admin\productscontroller@update_automatic_discount_codes');
Route::post('/get_discount_product_variations', 'Admin\productscontroller@get_discount_product_variations');
Route::post('/update_discount_varients', 'Admin\productscontroller@update_discount_varients');
Route::post('/get_dis_products_by_sub_cat', 'Admin\productscontroller@get_dis_products_by_sub_cat');
Route::post('/get_dis_product_enabled_by_id', 'Admin\productscontroller@get_dis_product_enabled_by_id');


//AdminAccounts Controller Routes

Route::post('/add_role', 'Admin\AdminAccountsController@add_role');
Route::post('/get_permissions_by_role_id', 'Admin\AdminAccountsController@get_permissions_by_role_id');
Route::post('/get_roles', 'Admin\AdminAccountsController@get_roles');
Route::post('/update_permissions', 'Admin\AdminAccountsController@update_permissions');
Route::post('/add_admin_account', 'Admin\AdminAccountsController@add_admin_account');
Route::post('/get_admin_accounts', 'Admin\AdminAccountsController@get_admin_accounts');
Route::post('/Update_admin_account', 'Admin\AdminAccountsController@Update_admin_account');
Route::post('/get_admin_account_by_id', 'Admin\AdminAccountsController@get_admin_account_by_id');
Route::post('/adminLogin', 'Admin\AdminAccountsController@adminLogin');
Route::post('/admin_check_auth', 'Admin\AdminAccountsController@admin_check_auth');
Route::post('/add_slider_img', 'Admin\AdminAccountsController@add_slider_img');
Route::post('/get_slider_images', 'Admin\AdminAccountsController@get_slider_images');
Route::post('/delete_slider_img', 'Admin\AdminAccountsController@delete_slider_img');
Route::post('/update_slider_img', 'Admin\AdminAccountsController@update_slider_img');
Route::post('/search_customer_sales', 'Admin\AdminAccountsController@search_customer_sales');
Route::post('/search_distributor_sales', 'Admin\AdminAccountsController@search_distributor_sales');
Route::post('/search_Customer_Orders', 'Admin\AdminAccountsController@search_Customer_Orders');
Route::post('/search_distributor_Orders', 'Admin\AdminAccountsController@search_distributor_Orders');
Route::post('/print_customer_sales_report', 'Admin\AdminAccountsController@print_customer_sales_report');
Route::post('/print_customer_orders_report', 'Admin\AdminAccountsController@print_customer_orders_report');
Route::post('/print_distributor_sales_report', 'Admin\AdminAccountsController@print_distributor_sales_report');
Route::post('/print_distributors_orders_report', 'Admin\AdminAccountsController@print_distributors_orders_report');



//Distributors Controller Routes
Route::post('/create_distributor', 'Admin\DistributoresController@create_distributor');
Route::post('/get_distributor_product_variations', 'Admin\DistributoresController@get_distributor_product_variations');
Route::post('/get_distributors', 'Admin\DistributoresController@get_distributors');
Route::post('/get_distributor_by_id', 'Admin\DistributoresController@get_distributor_by_id');
Route::post('/update_distributor', 'Admin\DistributoresController@update_distributor');
Route::post('/update_distributor_varients', 'Admin\DistributoresController@update_distributor_varients');
Route::post('/distributor_discount_products', 'Admin\DistributoresController@distributor_discount_products');
Route::post('/search_distributors', 'Admin\DistributoresController@search_distributors');
Route::post('/distributorLogin', 'Admin\DistributoresController@distributorLogin');
Route::post('/distributor_check_auth', 'Admin\DistributoresController@distributor_check_auth');
Route::post('/update_distributor_profile', 'Admin\DistributoresController@update_distributor_profile');
Route::post('/disPasswordReset', 'Admin\DistributoresController@disPasswordReset');
Route::post('/dis_ForgotPassword', 'Admin\DistributoresController@dis_ForgotPassword');
Route::post('/save_loyaltiy_point', 'Admin\DistributoresController@save_loyaltiy_point');
Route::post('/get_loyalty_points', 'Admin\DistributoresController@get_loyalty_points');
Route::post('/distributor_by_id', 'Admin\DistributoresController@distributor_by_id');
Route::post('/get_loyalty_discount', 'Admin\DistributoresController@get_loyalty_discount');



// Orders Controller
Route::post('/get_all_customers', 'Admin\orderscontroller@get_all_customers');
Route::post('/get_all_orders', 'Admin\orderscontroller@get_all_orders');
Route::post('/get_orders_by_customer_id', 'Admin\orderscontroller@get_orders_by_customer_id');
Route::post('/get_order_by_id', 'Admin\orderscontroller@get_order_by_id');
Route::post('/print_order_invoice', 'Admin\orderscontroller@print_order_invoice');
Route::post('/search_orders', 'Admin\orderscontroller@search_orders');
Route::post('/get_dis_orders_by_customer_id', 'Admin\orderscontroller@get_dis_orders_by_customer_id');
Route::post('/get_dis_order_by_id', 'Admin\orderscontroller@get_dis_order_by_id');
Route::post('/search_dis_orders', 'Admin\orderscontroller@search_dis_orders');
Route::post('/get_dis_all_orders', 'Admin\orderscontroller@get_dis_all_orders');
Route::post('/get_orders_by_distributor_id', 'Admin\orderscontroller@get_orders_by_distributor_id');
Route::post('/print_dis_order_invoice', 'Admin\orderscontroller@print_dis_order_invoice');
Route::post('/update_distributor_order_payment', 'Admin\orderscontroller@update_distributor_order_payment');
Route::post('/update_distributor_order_status', 'Admin\orderscontroller@update_distributor_order_status');
Route::post('/update_customer_order_status', 'Admin\orderscontroller@update_customer_order_status');



// customer Controller

Route::post('/Add_new_customer', 'Front\CustomerController@Add_new_customer');
Route::post('/customer_login', 'Front\CustomerController@customer_login');
Route::post('/check_customer_auth', 'Front\CustomerController@check_customer_auth');
Route::post('/add_product_in_cart', 'Front\CustomerController@add_product_in_cart');
Route::post('/get_cookie_session_cart', 'Front\CustomerController@get_cookie_session_cart');
Route::post('/create_customer_order', 'Front\CustomerController@create_customer_order');
Route::post('/remove_product_from_cart', 'Front\CustomerController@remove_product_from_cart');
Route::post('/update_customer', 'Front\CustomerController@update_customer');
Route::post('/update_cutomer_profile', 'Front\CustomerController@update_cutomer_profile');
Route::post('/get_customer_by_id', 'Front\CustomerController@get_customer_by_id');
Route::post('/search_customers', 'Front\CustomerController@search_customers');
Route::post('/add_dis_product_in_cart', 'Front\CustomerController@add_dis_product_in_cart');
Route::post('/get_dis_cookie_session_cart', 'Front\CustomerController@get_dis_cookie_session_cart');
Route::post('/remove_dis_product_from_cart', 'Front\CustomerController@remove_dis_product_from_cart');
Route::post('/create_dis_customer_order', 'Front\CustomerController@create_dis_customer_order');

Route::post('/get_dis_cart_items_total', 'Front\CustomerController@get_dis_cart_items_total');
Route::post('/get_cart_items_total', 'Front\CustomerController@get_cart_items_total');
Route::post('/ForgotPassword', 'Front\CustomerController@ForgotPassword');
Route::post('/PasswordReset', 'Front\CustomerController@PasswordReset');


