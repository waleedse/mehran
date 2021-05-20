import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
class MyOrders extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            loading:true
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            let senderdata = {
                cus_id:this.props.user.cid
            }
            console.log(senderdata);
            Axios.post(baseurl+'/api/get_orders_by_customer_id',senderdata).then(res=>{
                console.log(res);
                this.setState({
                    orders:res.data.data
                })
            })
            this.setState({
                loading:false
            })
        },2000)
    }
    show_order_details(id){
        console.log(this.props);
        window.localStorage.setItem('oid',id);
        this.props.history.push('/order-details');
    }
    render() {
        return (
            <div>
                
                    <div class="table-responsive wishlist-table margin-bottom-none">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>Orders</th>
                                            {/* <th class="text-center"><a class="btn btn-sm btn-outline-danger" href="#"></a></th> */}
                                        </tr>
                                    </thead>
                                    {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <>
                        <tbody>
                                        {
                                            this.state.orders.map((data,index)=>{
                                                return(
                                                    <tr key={index}>
                                                        <td>
                                                            <div onClick={this.show_order_details.bind(this,data.id)} key={index} class="product-item">
                                                                {/* <a class="product-thumb" href="#"><img src="https://via.placeholder.com/220x180/FF0000/000000" alt="Product"/></a> */}
                                                                <div class="product-info">
                                                                    <h4 className="product-title">#000{data.id} </h4>
                                                                    <div class="text-lg text-medium ">
                                                                        {data.date}
                                                                        <span className=" bold title-text" style={{float:'right',fontSize:'25px'}}>{data.totals}</span></div>
                                                                    <div>Status
                                                                        <div class="d-inline text-success"> {data.status}</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                        </>
                        }
                                    
                                </table>
                            </div>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
  }
export default connect(mapStateToProps)(MyOrders);