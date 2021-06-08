import Axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2'

 class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
            s_fname:'',
            s_lname:'',
            s_phone:'',
            s_address:'',
            s_username:'',
            s_email:'',
            s_password:'',
            error_string:'',
            postcode:'',
            city:''
    }
  }
  s_email(e){
    this.setState({
      s_email:e.target.value
    })
  }
  city(e){
    this.setState({
      city:e.target.value
    })
  }
  s_phone(e){
    this.setState({
      s_phone:e.target.value
    })
  }
  s_address(e){
    this.setState({
      s_address:e.target.value
    })
  }
  s_lname(e){
    this.setState({
      s_lname:e.target.value
    })
  }
  s_fname(e){
    this.setState({
      s_fname:e.target.value
    })
  }
  s_password(e){
    this.setState({
      s_password:e.target.value
    })
  }
  s_username(e){
    this.setState({
      s_username:e.target.value
    })
  }
  postcode(e){
    this.setState({
      postcode:e.target.value
    })
  }
  signup(){
    let senderdata = {
        fname:this.state.s_fname,
        email:this.state.s_email,
        lname:this.state.s_lname,
        password:this.state.s_password,
        phone:this.state.s_phone,
        address:this.state.s_address,
    }
    Axios.post('/api/Add_new_customer',senderdata).then(res=>{
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
          title: 'You Signed Up Successfully.',
          showConfirmButton: false,
          timer: 1500
          })
          window.open('/' , '_self');
      }else{
        this.setState({
          error_string: res.data.msg
        })
      }
    })
  }
  render() {
    return (
      <div className="mt-5 container">
        
        {/* <div>
          <label className="formLabel">UserName</label>
          <input onChange={this.s_username} className="form-control input_box" type="text"></input>
        </div> */}
        <div className="col-md-6 ml-auto mr-auto " >
        <div className=" mt-5 page_title px-0">Sign Up</div>
        <div className="row " >
          <div className=" col-md-6 ">
            <label className="formLabel">First Name</label>
            <input onChange={this.s_fname.bind(this)} className="form-control input_box" name="firstname" type="text"></input>
          </div>
          <div className=" col-md-6">
            <label className="formLabel">Last Name</label>
            <input onChange={this.s_lname.bind(this)} className="form-control input_box" name="lastname" type="text"></input>
          </div>
        </div>
        <div className="row mt-3">
          <div className=" col-md-12 ">
            <label className="formLabel">Phone Number</label>
            <input onChange={this.s_phone.bind(this)} className="form-control input_box" name="phone" type="text"></input>
          </div>
        </div>
        <div className="row mt-3">
        <div className=" col-md-12">
            <label className="formLabel">Email</label>
            <input onChange={this.s_email.bind(this)} className="form-control input_box" name="email" type="email"></input>
          </div>
        </div>
        <div className="row mt-3">
          <div className=" col-md-12 ">
            <label className="formLabel">Password</label>
            <input  onChange={this.s_password.bind(this)} className="form-control input_box" type="password"></input>
          </div>
        </div>
        {/* <div >
            <label className="formLabel">City</label>
            <input  onChange={this.city.bind(this)}  className="form-control input_box" name="addCityress" type="text"></input>
          </div> */}
        {/* <div >
            <label className="formLabel">Postcode</label>
            <input  onChange={this.postcode.bind(this)}  className="form-control input_box" name="address" type="text"></input>
          </div> */}
        <div >
            <label className="formLabel">Address</label>
            <input  onChange={this.s_address.bind(this)}  className="form-control input_box" name="address" type="text"></input>
          </div>
          {
          this.state.error_string != '' ?
          <p className="text-center text-danger">{this.state.error_string}</p>
          :null
        }
        <div className="mr-2 mt-3 text-right">
          <button onClick={this.signup.bind(this)} className="btn-submit btn" >
            SIGN UP
          </button>
        </div>
        <div className="loginDivider"></div>
                    <div className="text-center mb-4">
                      <p className=" text-secondary">
                       Already have an account?{" "}
                        <span
                          className="text-danger danger_text"
                          onClick={()=>{window.open('/login','_self')}}
                        >
                          log In
                        </span>
                      </p>
                    </div>
        </div>
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
export default connect(mapStateToProps,mapDispatchToProps)(SignUpForm);