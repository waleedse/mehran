<html>

<head>

<style type="text/css">

 
#mytable { 
  width: 100%; 
  border:1px solid black;
  border-collapse: collapse; 
}
.center-text{
    text-align:center;
}
.total_div{
    margin-top:60px;
    margin-left:60%;
}
#mytable th, td{
    border:1px solid black;
    text-align:center;
    border-collapse: collapse; 
    width: 100%; 
}
th {
	padding-left: 1px;
   font-weight:bold;
   font-size:12px;
}
#mtd {
	padding-left: 10px;
    font-size:10px;
}
.text_right{
    text-align:right;
    border: none !important;
    font-size:20px;
}
.text_right_label{
    text-align:right;
    border: none !important;
    font-size:14px;
}
.margin_left{
    margin-left:30px;
}
/* .panel-title{
    font-weight:500;
    font-family:Helvetica;
} */
#bottom{
    width:100%;
}
#bottom tr{
    border-bottom:1px solid gray;
}
.customer_address{
    position:absolute;
        top:190px;
        left:70%;
}

#rowtable{
        width: 100%; 
        font-size:14px;
        font-style:bold;
        margin-left:0px;
        margin-top:0px;
    }
    #rowtable2{
        width: 100%; 
      
        margin-left:0px;
        margin-top:0px;
    }
    .topheads{
        font-size:12px
    }
div {
	font-family:Helvetica;
}



.products_table{
    margin-top:130px
}



.site_logo{
        width:100px;
        height:100px;
        margin-top:10px;
    }
    .company-details{
        position:absolute;
        top:-20px;
        left:65%;
    }
</style>

</head>
    <body>
    <div class="container">
    <div class="row">
        <div class="col-xs-12">
    		<div class="invoice-title">
                <img class="site_logo"
                    src="images/site_logo.png"><span>
                   
                    </span>
            </div>
            <div class="company-details">
                        <h2 class="name">
                            Chairman Foam
                        </h2>
                        <div>455 Foggy Heights, AZ 85004, US</div>
                        <div>(123) 456-789</div>
                        <div>company@example.com</div>
                    </div>
            <hr>
            <h2 class="center-text">Order Invoice </h2>
            
            <address>
                    <strong>Order: #{{$order->id}}</strong><br>
                    {{$order->date}}
    				</address>
    		<div class="customer_address">
    			
    				<address>
    				<strong>Customer Address</strong><br>
    					{{$order->fname}} {{$order->lname}}<br>
                        {{$order->phone}}<br>
                        {{$order->email}}<br>
    					{{$order->address}}<br>
    					{{$order->country}}
    				</address>
    			
    		</div>
    		
    	</div>
    </div>
    
    <div  class="products_table">
    	<h4 class="panel-title">Order Summary</h4>
    	    <div >
    			
    					<table id = "mytable">
    						<thead>
                                <tr>
                                    <td class="text-center"><strong>Sr</strong></td>
        							<td class="text-center"><strong>Code</strong></td>
        							<td class="text-center"><strong>Product</strong></td>
                                    <td class="text-center"><strong>Variant</strong></td>
        							<td class="text-center"><strong>Quantity</strong></td>
                                    <td class="text-center"><strong>Price</strong></td>
                                    <td class="text-center"><strong>Discount</strong></td>
                                    <td class="text-center"><strong>Sub Total</strong></td>
                                </tr>
    						</thead>
    						<tbody>
                                <!-- foreach ($order->lineItems as $line) or some such thing here -->
                                @foreach($order->products as $key => $p)
    							<tr>
    								<td>{{$key+1}}</td>
    								<td class="text-center">{{$p->product->code}}</td>
    								<td class="text-center">{{$p->product->name}}</td>
                                    <td class="text-center">{{$p->product->varients[0]->name}}</td>
                                    <td class="text-center">{{$p->qty}}</td>
                                    <td class="text-center">{{$p->original_price}}</td>
                                    <td class="text-center">{{$p->discount}}</td>
                                    <td class="text-center">{{$p->price}}</td>
                                </tr>
                                @endforeach
    						</tbody>
    					</table>
    				
        </div>
        <div class="total_div">
            <table id="bottom">
                <tbody>
                    <tr><td  class="text_right_label">Subtotal</td> <td class="text_right_label">{{$order->subtotal}}</td></td></tr>
                    <tr><td  class="text_right_label">Discount</td> <td class="text_right_label">{{$order->discount}}</td></td></tr>
                    <tr><td  class="text_right_label">Shipping</td> <td class="text_right_label">{{$order->shipping}}</td></td></tr>
                    <tr><td  class="text_right">Total</td> <td class="text_right">{{$order->totals}}</td></td></tr>
                </tbody>
            </table>
        </div>
    </div>
</div>

    </body>
</html>