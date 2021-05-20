import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'
class Orderslist extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            customers:[]
        }
    }
    
    componentDidMount(){
        let senderdata = {
            cus_id:this.props.id
        }
        Axios.post(baseurl+'/api/get_orders_by_customer_id',senderdata).then(res=>{
            console.log(res);
            this.setState({
                orders:res.data.data
            })
        })
    }
    render() {
        return (
            <div className="container">
                {/* <div className="top_section_title_div">
                    <h2 className="section_title"> Lists</h2>
                </div> */}
                <table className="table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>date</th>
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
                                        <td>{data.totals}</td>
                                        <td>{data.status}</td>
                                        <td><Link to={`/adminpanel/customer-order-details/${data.id}`}><button className="btn btn-outline-success"> <i  className="fas fa-eye"> </i></button></Link></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Orderslist;