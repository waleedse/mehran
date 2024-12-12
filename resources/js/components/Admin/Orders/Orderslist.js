import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'
class Orderslist extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            customers:[],
            search_string:''
        }
    }
    
    componentDidMount(){
        Axios.post(baseurl+'/api/get_all_orders').then(res=>{
            this.setState({
                orders:res.data
            })
        })
    }
    search(e){
        this.setState({
            search_string:e.target.value
        })
    }
    search_records(){
        let senderdata = {
            string:this.state.search_string
        }
        Axios.post('/api/search_orders',senderdata).then(res=>{
            this.setState({
                orders:res.data
            })
        })
    }
    render() {
        return (
            <div className="container">
                <div className="top_section_title_div">
                    <h2 className="section_title">Order Lists</h2>
                </div>
                <div className="card content_card_div mt-4 mb-5">
                        
                        <div class="form-group input_div col-md-12">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <input type="email" onChange={this.search.bind(this)} class="form-control ml-1 mt-2" 
                                    aria-describedby="emailHelp" placeholder="Search by Order Id, Customer Id, Name, Email, Phone, Date" />
                                </div>
                                <div className="col-md-2">
                                    <button onClick={this.search_records.bind(this)} className="btn btn-success ml-1 mt-2">Search</button>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Date</th>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Customer Phone</th>
                            <th>Order Total</th>
                            <th>Order Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.orders.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.date}</td>
                                        <td>{data.cus_id}</td>
                                        <td>{data.fname} {data.lname}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.totals}</td>
                                        <td>{data.status}</td>
                                        <td><Link to={`/adminpanel/customer-order-details/${data.id}`}><button className="btn btn-outline-success"> <i  className="fas fa-eye"> </i></button></Link></td>
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.orders.length == 0 ? 
                                    <tr><td colSpan="9">No records founded</td></tr>:null
                                }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orderslist;