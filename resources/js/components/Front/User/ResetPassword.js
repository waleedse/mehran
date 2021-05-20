import Axios from 'axios';
import React, { Component } from 'react';
import { img_baseurl } from '../../Configs/apibase';
import Swal from 'sweetalert2'

class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            username:'',
            password:'',
            confirm_password:'',
            loading:false
        }
    }

    ConfirmPassword(e){
        this.setState({
            confirm_password:e.target.value
        })
    }
    password(e){
        this.setState({
            password:e.target.value
        })
    }
    PasswordReset(e){
        e.preventDefault();
        let senderdata = {
            confirm_password:this.state.confirm_password,
            password:this.state.password,
            id:this.props.match.params.id
        }
        this.setState({
            loading:true
        })
        Axios.post('/api/PasswordReset',senderdata).then(res=>{
            this.setState({
                loading:false
            })
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('/');
            }else{
                Swal.fire({
                    icon: 'error',
                    title: res.data.msg,
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
                            <br></br>Reset Your Password</h5>
                            <form className="form-signin">
                            <div className="form-label-group">
                                <input onChange={this.password.bind(this)} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                                <label for="inputPassword">Password</label>
                            </div>
                            <div className="form-label-group">
                                <input onChange={this.ConfirmPassword.bind(this)} type="password" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
                                <label for="inputEmail">Cofirm Password</label>
                            </div>

                            
                            
                            <button onClick={this.PasswordReset.bind(this)} className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">
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

export default ResetPassword;