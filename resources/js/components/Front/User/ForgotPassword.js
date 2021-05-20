import Axios from 'axios';
import React, { Component } from 'react';
import { img_baseurl } from '../../Configs/apibase';
import Swal from 'sweetalert2'

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            email:'',
            password:'',
            loading:false
        }
    }
    componentDidMount(){
        let senderdat = {
            token:window.localStorage.getItem('distoken')
        }
    
    }
    signUpModal(){
        this.props.history.push('/distributor/signup')
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
    ForgotPassword(e){
        e.preventDefault();
        let senderdata = {
            email:this.state.email,
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/ForgotPassword',senderdata).then(res=>{
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: res.data.msg,
                    showConfirmButton: true,
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
                            <br></br>Forgot Password</h5>
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input onChange={this.email.bind(this)} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Email</label>
                            </div>

                            {/* <div className="form-label-group">
                                <input onChange={this.password.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                            </div> */}
                            
                            <button onClick={this.ForgotPassword.bind(this)} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
                                {this.state.loading ?  
                                    <div className="spinner-border text-light ml-2" style={{width:'25px',height:'25px'}} role="status">
                                        <span className="sr-only">Loading...</span>
                                    </div> 
                                    : 'Continue'
                                }
                                
                                </button>
                                
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

export default ForgotPassword;