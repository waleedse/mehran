import Axios from 'axios';
import React, { Component } from 'react';
import {img_baseurl} from '../../Configs/apibase'
import Swal from 'sweetalert2'
class Orderdetails extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:false,
            order:[],
            loading2:false
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/get_order_by_id',senderdata).then(res=>{
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
    print_order_invoice(){
        let senderdata = {
            id:this.props.match.params.id
        }
        this.setState({
            loading2:true
        })
        Axios.post('/api/print_order_invoice',senderdata,{
          
            responseType: 'blob'
                }).then(response => {
                    this.setState({
                        loading2:false
                    })
                    const file = new Blob(
                        [response.data], 
                        {type: 'application/pdf'});
                    const fileURL = URL.createObjectURL(file);
                    window.open(fileURL);
                })
    }
    status(e){
        console.log(e.target.value);
        let order = this.state.order;
        order.status = e.target.value; 
        console.log(order);
        this.setState({
            order:order
        })
    }
    update_order_status(){
        let senderdata = {
            id:this.state.order.id,
            status:this.state.order.status
        }
        Axios.post('/api/update_customer_order_status',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: "Order Updated SuccessFully",
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    render() {
        return (
            <div>
             
                {
                    
                    this.state.loading ? 
                    <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                             <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                 <span className="sr-only">Loading...</span>
                             </div>
                         </div>
                     :<> 
                      <div className="top_section_title_div">
                    <h2 className="section_title">Order Details</h2>
                </div>
                    <div className="container">
                        <div className="row">
                        <div id="distributor_profile" className="col-md-8">
                    <div className="row">
                    <div className="col-md-4 row mt-1 ml-2">
                        <div className="col-md-8 ml-2 mt-3 ">
                            <h4>#{this.state.order.id} </h4>
                            <h6>{this.state.order.date}</h6>
                            <select value={this.state.order.status}  onChange={this.status.bind(this)} className="form-control col-md-12">
                                <option value="Pending">Pending</option>
                                <option value="Processing">Processing</option>
                                <option value="Completed">Completed</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                            <button onClick={this.update_order_status.bind(this)} className="btn btn-success mt-2">
                                Save
                            </button>
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
                                            <th>Discount</th>
                                            <th>Discount ID</th>
                                            <th>Sub Total</th> 
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
                                                        <td>{data.original_price}</td>
                                                        <td>{data.discount}</td>
                                                        <td>{data.discount_id}</td>
                                                        <td>{data.price}</td>
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
                                                </div><hr/>
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
                                                <button onClick={this.print_order_invoice.bind(this)} className="btn btn-success">
                                                
                                                <i className="fas fa-print"></i> Print
                                                    {
                                                        this.state.loading2?
                                                        <div className="spinner-border text-light ml-2" style={{width:'25px',height:'25px'}} role="status">
                                                            <span className="sr-only">Loading...</span>
                                                        </div>
                                                        :
                                                        null
                                                    }
                                                    </button>
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