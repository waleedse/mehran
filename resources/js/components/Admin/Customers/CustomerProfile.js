import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'

import Modal from 'react-bootstrap/Modal'
class Profile extends Component {
    constructor(props) {
        super(props);
        this.state={
            customer:[],
            modal:false,
            distributor:[],
            status:''
        }
    }
    
    componentDidMount(){
        let senderdata = {
            id:this.props.id
        }
        Axios.post('/api/get_customer_by_id',senderdata).then(res=>{
            console.log(res);
            this.setState({
                customer:res.data,
                status:res.data.status
            })
        })
       
    }
    show_modal(){
        this.setState ({
            modal:true
        })
    }
    hide_modal(){
        this.setState ({
            modal:false
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    update_customer(){
        let senderdata = {
            status:this.state.status,
            id:this.props.id
        }
        Axios.post('/api/update_customer',senderdata).then(res=>{
            this.componentDidMount();
            Swal.fire({
                icon: 'success',
                title: "Customer Updated SuccessFully",
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    render() {
        return (
            <div id="distributor_profile" className="container-fluid">
                <div className="row">
                    <div className="col-md-6 row mt-1 ml-2">
                        <div className="col-md-3 ml-2 ">
                            <img style={{width:'120px',height:'120px'}} src={img_baseurl+this.state.customer.image}></img>
                        </div>
                        <div className="col-md-8 ml-2 mt-3 ">
                            <h4>{this.state.customer.fname} {this.state.customer.lname}  </h4>
                            <h6>{this.state.customer.email}</h6>
                            <h6>{this.state.customer.phone}</h6>
                            <h6>{this.state.customer.address}</h6>
                         
                    </div>  
                    </div>
                    <div className="col-md-3 mt-1 ml-2 left_border">
                    <div class="form-group input_div col-md-8   ">
                                <label className="input_label" for="exampleInputEmail1">Status</label>
                                <select value={this.state.status || ""} onChange={this.status.bind(this)} type="email" class="form-control " 
                                 aria-describedby="emailHelp" placeholder="Product code" >
                                     <option value="Active">Active</option>
                                     <option value="Disable">Disable</option>
                                 </select>
                            </div>
                            <div className="ml-3">
                                <button onClick={this.update_customer.bind(this)} className="btn btn-success">save</button>
                            </div>
                    </div> 
                    
                </div>
                <div className="mt-2">
                    <h6>Customer ID: 000{this.state.customer.id}</h6>
                </div>
        
               
            </div>
        );
    }
}

export default Profile;