import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'


class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      l_username:'',
      l_password:'',
      islogin:false,
      error_string:''
    }
    console.log(this.props)
  }
  login_email(e){
    this.setState({
      l_username:e.target.value
    })
  }
  l_password(e){
    this.setState({
      l_password:e.target.value
    })
  }
  login(){
    let senderdata = {
      username:this.state.l_username,
      password:this.state.l_password
  }
  console.log(senderdata);
  Axios.post('/api/customer_login',senderdata).then(res=>{
    console.log(res);
    
   
    if(res.data.status == 200){
      let customer = {
        cid:res.data.cus.id,
        lname:res.data.cus.lname,
          email:res.data.cus.email,
          fname:res.data.cus.fname,
          phone:res.data.cus.phone,
          address:res.data.cus.address,
        image:res.data.cus.image,
        c_islogin:true
      }
      this.props.changeUser(customer);
      window.localStorage.setItem('key1',res.data.cus.token);
      Swal.fire({
        icon: 'success',
        title: 'You Loged In Successfully.',
        showConfirmButton: false,
        timer: 1500
        })
        console.log( this.props.match.params.redirect);
       let redirect = this.props.match.params.redirect ? '/'+this.props.match.params.redirect : '/'
        window.open(redirect ,'_self' );
    }else{
      this.setState({
        error_string:res.data.msg
      })
    }
  })
  }
  render() {
    return (
      <div className="mt-5 container">
        
        {/* <div className="row">
            <div className="col-md-3"></div> */}
        <div className="col-md-4 ml-auto mr-auto mt-3">
        <div className="page_title mt-5 text-left px-0">Log In</div>
        <div >
          <label className="formLabel">Email</label>
          <input onChange={this.login_email.bind(this)} className="form-control input_box" type="text"></input>
        </div>
        <div className="mt-3">
          <label className="formLabel">Password</label>
          <input onChange={this.l_password.bind(this)} className="form-control input_box" type="password"></input>
          <p className="text-right"><a className="text-secondary " href="/forgot-password">Forgot Password?</a></p>
        </div>

        {
          this.state.error_string != '' ?
          <p className="text-center text-danger">{this.state.error_string}</p>
          :null
        }
        <div className=" mt-3">
          <button onClick={this.login.bind(this)} className="btn btn-submit">
            SIGN IN
          </button>
        </div>
        <div className="loginDivider"></div>
                    <div className="text-center mb-4">
                      <p className=" text-secondary">
                        Are you new to Chairman Foam ?{" "}
                        <span
                          className="text-danger danger_text"
                          onClick={()=>{window.open('/signup','_self')}}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
        </div>
        {/* </div */}
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changeUser:(user)=>{dispatch({type:'CHANGE_USER',payload:user})}
  }
}
const mapStateToProps = (state)=>{
  return {
      user:state.user
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(LoginPage);