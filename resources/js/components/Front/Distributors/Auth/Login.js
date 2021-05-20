import Axios from 'axios';
import React, { Component } from 'react';
import { img_baseurl } from '../../../Configs/apibase';
import Swal from 'sweetalert2'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            loading:false
        }
    }
    componentDidMount(){
        let senderdat = {
            token:window.localStorage.getItem('distoken')
        }
        Axios.post('/api/distributor_check_auth',senderdat).then(res=>{
            if(res.data.status == 200){
                this.props.history.push('/distributor');
                Swal.fire({
                    icon: 'success',
                    title: 'You are already loged in Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }
    signUpModal(){
        this.props.history.push('/distributor/signup')
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
    login(e){
        e.preventDefault();
        let senderdata = {
            username:this.state.username,
            password:this.state.password
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/distributorLogin',senderdata).then(res=>{
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                window.localStorage.setItem('distoken',res.data.distributor.token);
                this.props.history.push('/distributor');
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully.',
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
                    <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                        <div className="card card-signin my-5 animate_auth_modal">
                        <div className="card-body">
                            <div classNameName="site_logo">
                            
                            </div>
                            <h5 className="card-title text-center "><img style={{width:'120px',height:'120px'}}  src={img_baseurl+'site_logo.png'}></img>
                            <br></br>Distributor Log In</h5>
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input onChange={this.username.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email</label>
                            </div>

                            <div className="form-label-group">
                                <input onChange={this.password.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                            </div>
                            
                            <button onClick={this.login.bind(this)} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                {this.state.loading ?  
                                    <div className="spinner-border text-light ml-2" style={{width:'25px',height:'25px'}} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> 
                                    : 'Sign in'
                                }
                                
                                
                                </button>
                                <div className="text-center">
                                    <a href="/distributor/forgot-password"><p>Fogrot your password?</p></a>
                                </div>
                                <div className="loginDivider"></div>
                                <div className="text-center mb-4">
                                <p className=" text-secondary">
                                    Are you new to Chairman's Foam ?{" "}
                                    <span
                                    className="text-danger danger_text"
                                    onClick={this.signUpModal.bind(this)}
                                    >
                                    Sign Up
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

export default Login;