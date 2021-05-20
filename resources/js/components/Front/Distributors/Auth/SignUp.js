import Axios from 'axios';
import React, { Component } from 'react';
import { img_baseurl } from '../../../Configs/apibase';
import Swal from 'sweetalert2'

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            loading:false,
            fname:'',
            lname:'',
            company_name:'',
            phone:'',
            email:'',
            credit_limit:0,
            address:'',
            country:'',
            city:'',
        }
    }
    componentDidMount(){
        let senderdat = {
            token:window.localStorage.getItem('sop256skikl')
        }
        // Axios.post('/api/admin_check_auth',senderdat).then(res=>{
        //     if(res.data.status == 200){
        //         Swal.fire({
        //             icon: 'success',
        //             title: 'You are already loged in Successfully.',
        //             showConfirmButton: false,
        //             timer: 1500
        //             })
        //     }
        // })
    }
    username(e){
        this.setState({
            username:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
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
    signUpModal(){
        this.props.history.push('/distributor/login')
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
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/create_distributor',senderdata).then(res=>{
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                window.localStorage.setItem('distoken',res.data.distributor.token);
                this.props.history.push('/distributor');
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
            <div classNameName="adminlogin ">
                  <div className="container ">
                    <div className="row">
                    <div className="col-sm-9 col-md-7 col-lg-7 mx-auto">
                        <div className="card card-signin my-5 animate_auth_modal">
                        <div className="card-body">
                            <div classNameName="site_logo">
                            
                            </div>
                            <h5 className="card-title text-center "><img style={{width:'120px',height:'120px'}}  src={img_baseurl+'site_logo.png'}></img>
                            <br></br>Distributor Sign Up</h5>
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input onChange={this.fname.bind(this)} type="name" id="fname" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="fname">First Name</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.lname.bind(this)} type="name" id="lname" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="lname">Last Name</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.company_name.bind(this)} type="name" id="company" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="company">Company</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.phone.bind(this)} type="email" id="Phone" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="Phone">Phone</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.email.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.address.bind(this)} type="address" id="Bussiness_Address" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="Bussiness_Address">Bussiness Address</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.country.bind(this)} type="name" id="Country" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="Country">Country</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.city.bind(this)} type="city" id="city" className="form-control" placeholder="Password" required/>
                                <label for="city">City</label>
                            </div>
                            
                            <button onClick={this.create_distributor.bind(this)} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                {this.state.loading ?  
                                    <div className="spinner-border text-light ml-2" style={{width:'25px',height:'25px',color:'white'}} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> 
                                    : 'Sign Up'
                                }
                                
                                
                                </button>
                                <div className="loginDivider"></div>
                                <div className="text-center mb-4">
                                <p className=" text-secondary">
                                    Are you new to Chairman's Foam ?{" "}
                                    <span
                                    className="text-danger danger_text"
                                    onClick={this.signUpModal.bind(this)}
                                    >
                                    Sign In
                                    </span>
                                </p>
                                </div>
                            </form>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;