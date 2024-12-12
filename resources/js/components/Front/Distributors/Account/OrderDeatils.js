import Axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../Dis_Navbar'
import {img_baseurl} from '../../../Configs/apibase'
class Orderdetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:false,
            order:[]
        }
    }
    componentDidMount(){
        let senderdata = {
            id:window.localStorage.getItem('d_oid')
        } 
        this.setState({
            loading:true
        })
        Axios.post('/api/get_dis_order_by_id',senderdata).then(res=>{
            console.log(res.data);
            this.setState({
                order:res.data,
               
            },function(){
                this.setState({
                    loading:false
                })
            })
        })
    }
    render() {
        return (
            <div>
                <Navbar></Navbar>
                {
                    
                    this.state.loading ? 
                    <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                             <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                 <span className="sr-only">Loading...</span>
                             </div>
                         </div>
                     :<> 
                     <div className="products_page container">
                     <h2 className="page_title">Order Details</h2>
                 </div>
                    <div className="container">
                        <div className="row">
                        <div id="distributor_profile" className="col-md-8">
                    <div className="row">
                    <div className="col-md-4 row mt-1 ml-2">
                        <div className="col-md-8 ml-2 mt-3 ">
                            <h4>#{this.state.order.id} </h4>
                            <h6>{this.state.order.date}</h6>
                            <h6>{this.state.order.status}</h6>
                        </div>  
                    </div>
                    <div className="col-md-7 mt-1 ml-2 left_border">
                        <h1 className="title_text">Address</h1>
                        <h4>{this.state.order.fname}</h4>
                        <h6>{this.state.order.email}</h6>
                        <h6>{this.state.order.phone}</h6>
                        <h6>{this.state.order.address}</h6>
                        <h6>{this.state.order.country}</h6>
                    </div> 
                    {/* <div className="col-md-2 mt-1 ml-2 left_border">
                        <h4>{this.state.distributor.address}</h4>
                        <h6>Distributor</h6>
                    </div>  */}
                </div>
                <hr/>
                {/* <div className="mt-2 col-md-12">
                    <h6>Customer ID: {this.state.order.cus_id}</h6>
                </div> */}
                <div className="mt-5 col-md-12">
                    <div className="row">
                        <h4 className="col-md-8 mt-2 title_text">Order Products</h4>
                    </div>
                    <div id="products_table" className="mt-3">
                                <table className="table table-bordered table-light table-stripped table-hover">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>ID</th>
                                            <th>Code</th>
                                            <th>Name</th>
                                            <th>Variant</th>
                                            <th>Qty</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    {
                                        this.state.order.products ? 
                                        <tbody>


                                        {
                                            this.state.order.products.map((data, index) => {
                                                return (
                                                    <tr key={index}>
                                                       <td><img style={{width:'60px',height:'60px'}}
                                                src={data.images.length > 0 ? img_baseurl+data.images[0].image :''}></img>
                                                           </td>
                                                        <td>{data.product_id}</td>
                                                        <td>{data.product.code}</td>
                                                        <td>{data.product.name}</td>
                                                        <td>{data.product.varients[0].name}</td>
                                                        <td>{data.qty}</td>
                                                        <td>{data.price}<span style={{fontSize:'12px'}} className="text-small priceCancelText text-secondary">       
                                                        {data.discount > 0 ? ' ( '+ data.original_price +' )' : null}
                                                        </span></td>

                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                    :null
                                    }
                                </table>
                            </div>
                            <hr></hr>
                        </div>
                </div>
                <div className="col-md-4">
                <div className="ibox">
                                            <div className="ibox-title">
                                                <h5>Order Summary</h5>
                                            </div>
                                            <div className="ibox-content">
                                            <div>
                                                   Sub Total
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs, {this.state.order.subtotal} </strong>
                                                    </span>
                                                </div>
                                                <div>
                                                    Discount 
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs, {this.state.order.discount} </strong>
                                                    </span>
                                                </div>
                                                <div>
                                                    Shipping 
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs, {this.state.order.shipping} </strong>
                                                    </span>
                                                </div>
                                                <div>
                                                    Loyalty Discount 
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs, {this.state.order.loyaltydiscount} </strong>
                                                    </span>
                                                </div>
                                                <hr/>
                                                <span>
                                                    Total
                                                </span>
                                                <h2 className="font-bold">
                                                    Rs, {this.state.order.totals}
                                                </h2>

                                                <hr/>
                                                {/* <span className="text-muted small">
                                                    *For United States, France and Germany applicable sales tax will be applied
                                                </span> */}
                                                
                                            </div>
                                        </div>
                </div>
                        </div>
                    </div>
                 </>
                }
            </div>
        );
    }
}
export default Orderdetails;