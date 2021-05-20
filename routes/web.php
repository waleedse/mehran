<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::view('/{path?}', 'welcome');
Route::get('{reactRoutes}', function () {
    return view('welcome');
});

Route::view('/Products/{id}', 'welcome');
Route::view('/Product/{id}', 'welcome');

Route::view('/adminpanel', 'welcome');
Route::view('/adminpanel/Dashboard', 'welcome');
Route::view('/adminpanel/AddProducts', 'welcome');
Route::view('/adminpanel/ManageCategory', 'welcome');
Route::view('/adminpanel/ManageSubCategory', 'welcome');
Route::view('/adminpanel/ProductLists', 'welcome');
Route::view('/adminpanel/EditProduct/{id}', 'welcome');
Route::view('/adminpanel/Cutomers', 'welcome');
Route::view('/adminpanel/Orders', 'welcome');
Route::view('/adminpanel/ProductValues/{id}', 'welcome');
Route::view('/adminpanel/ProductImages/{id}', 'welcome');
Route::view('/adminpanel/ManageRoles', 'welcome');
Route::view('/adminpanel/ManageAdminAccounts', 'welcome');
Route::view('/adminpanel/AddAdminAccount', 'welcome');
Route::view('/adminpanel/EditAdminAccount/{id}', 'welcome');
Route::view('/adminpanel/ADDNewDistributor', 'welcome');
Route::view('/adminpanel/DistributorLists', 'welcome');
Route::view('/adminpanel/DistributorView/{id}', 'welcome');
Route::view('/adminpanel/AddDiscountonproducts/{id}', 'welcome');
Route::view('/adminpanel/AddNewUser', 'welcome');
Route::view('/adminpanel/UodateDistributor/{id}', 'welcome');
Route::view('/adminpanel/customer-order-details/{id}', 'welcome');
Route::view('/adminpanel/customer-view/{id}', 'welcome');
Route::view('/adminpanel/customer-profile/{id}', 'welcome');
Route::view('/adminpanel/shipping', 'welcome');
Route::view('/adminpanel/discounts', 'welcome');
Route::view('/adminpanel/distributor-orders', 'welcome');
Route::view('/adminpanel/distributor-order-details/{id}', 'welcome');
Route::view('/adminpanel/slider-images', 'welcome');
Route::view('/adminpanel/distributor-sales-report', 'welcome');
Route::view('/adminpanel/distributor-orders-report', 'welcome');
Route::view('/adminpanel/customer-sales-report', 'welcome');
Route::view('/adminpanel/customer-order-report', 'welcome');
Route::view('/adminpanel/loyalty-points', 'welcome');



//Front
Route::view('/distributor/Products/{id}', 'welcome');
Route::view('/distributor/product/{id}', 'welcome');
Route::view('/distributor/cart', 'welcome');
Route::view('/distributor/signup', 'welcome');
Route::view('/distributor/login', 'welcome');
Route::view('/distributor/account', 'welcome');
Route::view('/distributor/checkout', 'welcome');
Route::view('/distributor/order-details', 'welcome');
Route::view('/distributor', 'welcome');
Route::view('/reset-password/{id}', 'welcome');
Route::view('/distributor/forgot-password', 'welcome');
Route::view('/distributor/reset-password/{id}', 'welcome');

