<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class DisCarts extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dis_carts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('product_id');
            $table->string('cus_id');
            $table->string('qty');
            $table->string('price');
            $table->string('varient_id');
            $table->string('original_price');
            $table->string('discount');
            $table->string('discount_id');
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
        Schema::dropIfExists('dis_carts');
    }
}
