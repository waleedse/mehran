import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'

class EditAdminAccount extends Component {
    constructor(props) {
        super(props);
        this.state={
            fname:'',
            email:'',
            password:'',
            confirm_password:'',
            role:'',
            roles:[],
            surname:'',
            telephone:'',
            job_designation:'',
            pincode:'',
            status:''
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
           }
           Axios.post('/api/get_roles',senderdata).then(res=>{
               console.log(res);
               this.setState({
                   roles:res.data
               })
           })
           Axios.post('/api/get_admin_account_by_id',senderdata).then(res=>{
               console.log(res);
               this.setState({
                   fname:res.data.fname,
                   email:res.data.email,
                   password:res.data.password,
                   confirm_password:res.data.password,
                   job_designation:res.data.job_designation,
                   surname:res.data.surname,
                   pincode:res.data.pin_code,
                   telephone:res.data.telephone,
                   role:res.data.role_id,
                   status:res.data.status
               })
           })  
    }
    fname(e){
        this.setState({
            fname:e.target.value
        })
    }
    job_designation(e){
        this.setState({
            job_designation:e.target.value
        })
    }
    telephone(e){
        this.setState({
            telephone:e.target.value
        })
    }
    pincode(e){
        this.setState({
            pincode:e.target.value
        })
    }
    surname(e){
        this.setState({
            surname:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    confirm_password(e){
        this.setState({
            confirm_password:e.target.value
        })
    }
    role(e){
        this.setState({
            role:e.target.value
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    Update_admin_account(){
        if(this.state.password == this.state.confirm_password){
            if(this.state.name != '' && this.state.email != '' && this.state.password != '' && this.state.role != '' && 
            this.state.job_designation != '' && this.state.surname != '' && this.state.pincode != '' && this.state.telephone!= ''
             ){
                let senderdata={
                    fname:this.state.fname,
                    email:this.state.email,
                    telephone:this.state.telephone,
                    job_designation:this.state.job_designation,
                    surname:this.state.surname,
                    pin_code:this.state.pincode,
                    password:this.state.password,
                    role_id:this.state.role,
                    id:this.props.match.params.id,
                    status:this.state.status,
                }
                console.log(senderdata);
                Axios.post('/api/Update_admin_account',senderdata).then(res=>{
                        console.log(res);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Admin Account Updated SuccessFully',
                        showConfirmButton: false,
                        timer: 1500
                        })
                    this.props.history.push('/adminpanel/ManageAdminAccounts');
                })
            }else{
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Please fill all the fields',
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Password not Equals to Confirm Password',
                showConfirmButton: false,
                timer: 1500
                })
        }
        
        
    }
    render() {
        return (
            <div>
                <div className="top_section_title_div">
                    <h2 className="section_title">Add Admin Accounts</h2>
                </div> 
                <div className="container">
                    <div className="card mt-3">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">First Name</label>
                                <input value={this.state.fname || ""} onChange={this.fname.bind(this)} type="Name" class="form-control "  aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Surname</label>
                                <input value={this.state.surname || ""} onChange={this.surname.bind(this)} type="Name" class="form-control "  aria-describedby="emailHelp" placeholder="Surname" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Email</label>
                                <input value={this.state.email || ""} onChange={this.email.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1"> Job Designation</label>
                                <input  value={this.state.job_designation || ""} onChange={this.job_designation.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Job Designation" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1"> Telephone</label>
                                <input value={this.state.telephone || ""} onChange={this.telephone.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Telephone" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Password</label>
                                <input value={this.state.password || ""} onChange={this.password.bind(this)} type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Password" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Confirm Password</label>
                                <input value={this.state.confirm_password || ""} onChange={this.confirm_password.bind(this)} type="email" class="form-control " aria-describedby="emailHelp" placeholder="Confirm Password" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1"> Pin Code</label>
                                <input value={this.state.pincode || ""} onChange={this.pincode.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Pin Code" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Role</label>
                                <select value={this.state.role || ""} type="name" className="form-control col-sm-6 mt-2 " onChange={this.role.bind(this)}  >
                                <option value=''>--Select User Account--</option>
                                {
                                    this.state.roles.map((data,index)=>{
                                        return(
                                            <option value={data.id} key={index}>{data.name}</option>
                                        )
                                    })
                                }
                            </select>
                            </div>
                            <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Status</label>
                                <select value={this.state.status || ""} onChange={this.status.bind(this)} type="email" class="form-control " 
                                 aria-describedby="emailHelp" placeholder="Product code" >
                                     <option value="Active">Active</option>
                                     <option value="Disable">Disable</option>
                                 </select>
                            </div>
                        </div>
                        </div>
                        <div className="mt-3 ml-3 mb-3">
                            <button onClick={this.Update_admin_account.bind(this)} className="btn btn-success">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default EditAdminAccount;