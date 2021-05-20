<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DisOrderProducts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dis_order_products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('order_id');
            $table->string('product_id');
            $table->string('discount');
            $table->string('varient_id');
            $table->string('qty');
            $table->string('price');
            $table->string('original_price');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dis_order_products');
    }
}
