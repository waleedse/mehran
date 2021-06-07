import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../../Configs/apibase';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
            loading: true,
            cart_products: [],
            cart_totals: 0,
            discounts:0
        }
    }
    componentDidMount() {
            console.log('caleed');
            let senderdata = {
                cart_cookie_id : window.localStorage.getItem('dis_cart_cookie_id')
            }
            Axios.post(baseurl + '/api/get_dis_cookie_session_cart', senderdata).then(res => {
                if(res.data.cart){
                    if(res.data.cart.length > 0){
                        this.setState({
                            cart_products: res.data.cart[0].products,
                            cart_totals: res.data.cart[0].cart_totals,
                            discounts: res.data.cart[0].discounts,
                            cart:res.data.cart,

                        },function(){
                            this.setState({
                                loading:false
                            })
                        })
                    }else{
                        this.setState({
                            loading:false
                        })
                    }
                }else{
                    this.setState({
                        loading:false,
                        cart:[]
                    })
                }


            })


    }
    delete_from_cart(id){
        let senderdata = {
            id:id
        }
        Axios.post(baseurl+'/api/remove_dis_product_from_cart',senderdata).then(res=>{
            this.componentDidMount();
            Swal.fire({
                icon: 'success',
                title: 'Product Deleted From cart Successfully.',
                showConfirmButton: false,
                timer: 1500
            })

        })
    }
    render() {
        return (
            <div className="container">
                <div className="products_page ">
                    <h2 className="page_title">Cart</h2>
                </div >
                <div >
                {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                            <>
                            {
                         this.state.cart.length == 0 ?
                                <div className="container mt-5 no_data">
                                    <img src={img_baseurl+"sorry.png"}></img>
                                    <h5 classNam="text-center" >Sorry your cart is Empty</h5>
                                </div>
                            :
                            <div className="wrapper wrapper-content animated mt-3 fadeInRight">
                                <div className="row">
                                    <div className="col-md-9">
                                        <div className="ibox">
                                            <div className="ibox-title">
                                                <span  style={{float:'right'}} className="pull-right">(<strong>{this.state.cart.length}</strong>) items</span>
                                                <h5>Items in your cart</h5>
                                            </div>
                                           {
                                               this.state.cart.map((data,index)=>{
                                                   return(
                                                    <div key={index} className="ibox-content">
                                                    <div className="table-responsive">
                                                        <table className="table shoping-cart-table">
                                                            <tbody>
                                                            <tr>
                                                                <td width="90">
                                                                    <div className="cart-product-imitation">
                                                                    <img style={{width:'100%',height:'100%'}} src={img_baseurl+data.product[0].images[0].image}></img>
                                                                    </div>
                                                                </td>
                                                                <td className="desc">
                                                                    <h3>
                                                                    <a href="#" className="text-navy">
                                                                    {data.product[0].name}
                                                                    </a>
                                                                    </h3>
                                                                    <p className="small">
                                                                    {data.product[0].description}
                                                                    </p>
                                                                    <dl className="small m-b-none">
                                                                        <dt>Qty <span> {data.qty}</span> </dt>
                                                                        <dt>{data.product[0].varient_type} <span> {data.product[0].varients[0].name}</span> </dt>
                                                                    </dl>

                                                                    <div className="m-t-sm">
                                                                        {/* <a href="#" className="text-muted"><i className="fa fa-gift"></i> Add gift package</a>
                                                                        | */}
                                                                        <a onClick={this.delete_from_cart.bind(this,data.id)} className="delete_cart_product"><i className="fa fa-trash"></i> Remove item</a>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <h4>

                                                                    Rs,{data.price}
                                                                    <span style={{fontSize:'12px'}} className="text-small priceCancelText text-secondary">
                                                                    {data.discount > 0 ? ' ( '+ data.original_price +' )' : null}
                                                                    </span>
                                                                    </h4>

                                                                </td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                </div>
                                                   )
                                               })
                                           }

                                            <div className="ibox-content">
                                               <a href="/distributor/checkout" ><button style={{float:'right'}}  className="btn btn-success pull-right"><i className="fa fa fa-shopping-cart"></i> Checkout</button></a>
                                                {/* <a href="/shop"><button className="btn btn-warning"><i className="fa fa-arrow-left"></i> Continue shopping</button></a> */}

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col-md-3">
                                        <div className="ibox">
                                            <div className="ibox-title">
                                                <h5>Cart Summary</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <div>
                                                    Discount
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs, {this.state.discounts} </strong>
                                                    </span>
                                                </div>
                                                <hr></hr>
                                                <span>
                                                    Total
                                                </span>
                                                <h2 className="font-bold">
                                                    Rs, {this.state.cart_totals}
                                                </h2>

                                                <hr/>
                                                {/* <span className="text-muted small">
                                                    *For United States, France and Germany applicable sales tax will be applied
                                                </span> */}
                                                <div className="m-t-sm">
                                                    <div className="btn-group">
                                                    <a href="/distributor/checkout" className="btn btn-success btn-sm"><i className="fa fa-shopping-cart"></i> Checkout</a>
                                                    {/* <a href="#" className="btn btn-white btn-sm"> Cancel</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        }
                            </>
                }
                  </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Cart);
