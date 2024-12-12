import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import Modal from 'react-bootstrap/Modal'
import Swal from 'sweetalert2'
import {Link} from 'react-router-dom'
class CustomerLists extends Component {
    constructor(props) {
        super(props);
        this.state={
            customers:[],
            modal:'',
            email:'',
            status,
            name:'',
            id:'',
            search_string:''
        }
    }
    
    componentDidMount(){
        Axios.post(baseurl+'/api/get_all_customers').then(res=>{
            this.setState({
                customers:res.data
            })
        })
    }
    show_modal(data){
        this.setState ({
            name:data.name,
            email:data.email,
            id:data.id,
            status:data.status,
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
            id:this.state.id
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
    search(e){
        this.setState({
            search_string:e.target.value
        })
    }
    search_records(){
        let senderdata = {
            string:this.state.search_string
        }
        Axios.post('/api/search_customers',senderdata).then(res=>{
            this.setState({
                customers:res.data
            })
        })
    }
    render() {
        return (
            <div >
                <div className="top_section_title_div">
                    <h2 className="section_title">Customer Lists</h2>
                </div>
                <div className="card container content_card_div mt-4 mb-5">
                        
                        <div class="form-group input_div col-md-12">
                            <div className="row mb-2">
                                <div className="col-md-10">
                                    <input type="email" onChange={this.search.bind(this)} class="form-control ml-1 mt-2" 
                                    aria-describedby="emailHelp" placeholder="Search by Id, Name, Company, Email, Phone" />
                                </div>
                                <div className="col-md-2">
                                    <button onClick={this.search_records.bind(this)} className="btn btn-success ml-1 mt-2">Search</button>
                                </div>
                            </div>
                        </div>
                   
                    </div>
                <table className="container  table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Name</th>
                            {/* <th>Username</th> */}
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.customers.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.fname} {data.lname}</td>
                                        {/* <td>{data.username}</td> */}
                                        <td>{data.email}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.status}</td>
                                        <td><Link to={`customer-view/${data.id}`}><button className="btn btn-outline-success"> <i  className="fas fa-eye"> </i></button></Link></td>
                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.customers.length == 0 ? 
                                    <tr><td colSpan="6">No records founded</td></tr>:null
                                }
                    </tbody>
                </table>
                <Modal
                    show={this.state.modal}
                    onHide={this.hide_modal.bind(this)}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Edit Customer
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div class="form-group input_div col-md-8">
                                <label className="input_label" for="exampleInputEmail1">Name</label>
                                <input value={this.state.name || ""} disabled type="email" class="form-control " aria-describedby="emailHelp" placeholder="Name" />
                            </div>
                            <div class="form-group input_div col-md-8">
                                <label className="input_label" for="exampleInputEmail1">Email</label>
                                <input value={this.state.email || ""} disabled  type="email" class="form-control " aria-describedby="emailHelp" placeholder="Email" />
                            </div>
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
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default CustomerLists;