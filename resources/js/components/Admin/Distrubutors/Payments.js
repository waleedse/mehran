import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

class Payments extends Component {
    constructor(props) {
        super(props);
        this.state={
            orders:[],
            customers:[]
        }
    }
    
    componentDidMount(){
        let senderdata = {
            dis_id:this.props.id
        }
        Axios.post(baseurl+'/api/get_orders_by_distributor_id',senderdata).then(res=>{
            console.log(res);
            this.setState({
                orders:res.data.data
            })
        })
    }
    onchange_payment(val,id){
        let temp_arr = this.state.orders;
        temp_arr.map((data,index)=>{
            if(data.id == id){
                data.payment = val;
            }
        })
        this.setState({
            orders:temp_arr
        })
       }
       update_payment(val,id){
           let senderdata = {
               payment:val,
               id:id
           }
           console.log(senderdata);
           Axios.post('/api/update_distributor_order_payment',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: "Payemnt Added SuccessFully",
                showConfirmButton: false,
                timer: 1500
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
                            <th>Payment</th>
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
                                        <td><input onChange={(e)=>{this.onchange_payment(e.target.value,data.id)}} 
                                        value={data.payment} type="number" className="form-control"></input></td>
                                        <td><button onClick={(e)=>{this.update_payment(data.payment,data.id)}}  className="btn btn-outline-success"> <i  style={{color:'green'}}  className="fas fa-save"></i></button></td>
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

export default Payments;