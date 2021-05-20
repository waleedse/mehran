import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'

class AddDistributor extends Component {
    constructor(props) {
        super(props);
        this.state={
            fname:'',
            lname:'',
            company_name:'',
            phone:'',
            email:'',
            credit_limit:'',
            address:'',
            country:'',
            city:'',
            gst:'',
            gst_check:true
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        Axios.post('/api/get_distributor_by_id',senderdata).then(res=>{
            console.log(res);
            let data = res.data;
            this.setState({
               fname:data.fname,
               lname:data.lname,
               company_name:data.company,
               phone:data.phone,
               email:data.email,
               credit_limit:data.credit_limit,
               address:data.address,
               country:data.country,
               city:data.city,
               gst:data.gst
            })
        })
    }
    fname(e){
        this.setState({
            fname:e.target.value
        })
    }
    lname(e){
        this.setState({
            lname:e.target.value
        })
    }
    company_name(e){
        this.setState({
            company_name:e.target.value
        })
    }
    phone(e){
        this.setState({
            phone:e.target.value
        })
    }
    email(e){
        this.setState({
            email:e.target.value
        })
    }
    credit_limit(e){
        this.setState({
            credit_limit:e.target.value
        })
    }
    address(e){
        this.setState({
            address:e.target.value
        })
    }
    country(e){
        this.setState({
            country:e.target.value
        })
    }
    city(e){
        this.setState({
            city:e.target.value
        })
    }
    gst(e){
        this.setState({
            gst:e.target.value
        })
    }
    gst_check(e){
        this.setState({
            gst_check:!this.state.gst_check
        })
    }
    create_distributor(){
        let senderdata = {
            fname:this.state.fname,
            lname:this.state.lname,
            company_name:this.state.company_name,
            phone:this.state.phone,
            email:this.state.email,
            credit_limit:this.state.credit_limit,
            address:this.state.address,
            country:this.state.country,
            city:this.state.city,
            gst:this.state.gst,
            id:this.props.match.params.id
        }
        Axios.post('/api/update_distributor',senderdata).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        })
    }
    render() {
        return (
            <div>
                 <div className="top_section_title_div">
                    <h2 className="section_title">Update Distributor</h2>
                </div>
                <div className="container">
                    <div className="card mt-3">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">First Name</label>
                                <input value={this.state.fname || ""}  onChange={this.fname.bind(this)}  type="email" class="form-control " aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Last Name</label>
                                <input  value={this.state.lname || ""} onChange={this.lname.bind(this)}   type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Last Name" />
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Company Name</label>
                                <input value={this.state.company_name || ""} onChange={this.company_name.bind(this)}   type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Company Name" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Phone Number</label>
                                <input value={this.state.phone || ""} onChange={this.phone.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Phone Number" />
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Email Address</label>
                                <input value={this.state.email || ""} disabled onChange={this.email.bind(this)}   type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Email Address" />
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Credit Limit</label>
                                <input value={this.state.credit_limit || ""} onChange={this.credit_limit.bind(this)}   type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Credit Limit" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-12">
                                <label className="input_label" for="exampleInputEmail1">Bussiness Address</label>
                                <input value={this.state.address || ""} onChange={this.address.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="Bussiness Address" />
                            </div>
                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Country </label>
                                <input value={this.state.country || ""} onChange={this.country.bind(this)}  type="email" class="form-control " aria-describedby="emailHelp" placeholder="Country " />
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">City</label>
                                <input value={this.state.city || ""} onChange={this.city.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="City" />
                            </div>
                        </div>
                        {/* <div className="row col-md-12">
                            <div class="form-group input_div col-md-1">
                                <input  value={this.state.fname || ""} onChange={this.gst_check.bind(this)} checked={this.state.gst_check} type="radio" className="mr-1"  name="gst" aria-describedby="emailHelp" />GST
                            </div>
                            <div class="form-group input_div col-md-2">
                                <input value={this.state.fname || ""} onChange={this.gst_check.bind(this)} checked={this.state.gst_check == false} type="radio" className="mr-1" name="gst" aria-describedby="emailHelp"  />Non GST
                            </div>
                        </div> */}
                        <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">GST</label>
                                <input value={this.state.gst || ""} onChange={this.gst.bind(this)}  type="email" class="form-control "  aria-describedby="emailHelp" placeholder="GST " />
                        </div>
                        <button onClick={this.create_distributor.bind(this)} className="btn btn-success ml-3 mb-4 col-md-1">save</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddDistributor;