import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../Configs/apibase';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import { Nav, Navbar , NavDropdown} from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:[],
            s_fname:'',
            s_lname:'',
            s_phone:'',
            s_address:'',
            s_username:'',
            s_email:'',
            s_password:'',
            l_username:'',
            l_password:'',
            islogin:false,
            cart_items_total:0
        }
    }
    componentDidMount(){
        Axios.post(baseurl+'/api/get_cats_with_subs').then(res=>{
            this.setState({
                categories:res.data
            })
        })
        Axios.post('/api/get_cart_items_total',{cart_cookie_id:window.localStorage.getItem('cart_cookie_id')}).then(res=>{
          this.setState({
            cart_items_total:res.data.cart_item_totals
          })
        })
        let senderdata = {
          token:window.localStorage.getItem('key1')
        }
        Axios.post(baseurl+'/api/check_customer_auth',senderdata).then(res=>{
          if(res.data.status == 200){
            let customer = {
              cid:res.data.cus[0].id,
              lname:res.data.cus[0].lname,
              fname:res.data.cus[0].fname,
              email:res.data.cus[0].email,
              phone:res.data.cus[0].phone,
               address:res.data.cus[0].address,
              image:res.data.cus[0].image,
              c_islogin:true
            }
            this.props.changeUser(customer);
            this.setState({
              islogin:true
            })
          }
        })
    }
    onclick_sub_cat(id){
        this.props.history.push('Products/'+id);
    }
    loginModal = () => {
        this.setState({
          showLoginModal: !this.state.showLoginModal,
          showSignUpModal: false,
        });
      };
      signUpModal = () => {
        this.setState({
          showSignUpModal: !this.state.showSignUpModal,
          showLoginModal: false,
        });
      };

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
    s_email(e){
      this.setState({
        s_email:e.target.value
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
    signup(){
      let senderdata = {
          fname:this.state.s_fname,
          email:this.state.s_email,
          lname:this.state.s_lname,
          password:this.state.s_password,
          phone:this.state.s_phone,
          address:this.state.s_address
      }
      Axios.post(baseurl+'/api/Add_new_customer',senderdata).then(res=>{
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
            window.location.reload();
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
    login(){
      let senderdata = {
        username:this.state.l_username,
        password:this.state.l_password
    }
    Axios.post(baseurl+'/api/customer_login',senderdata).then(res=>{
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
        window.localStorage.setItem('key1',res.data.cus.token);
        this.props.changeUser(customer);
        Swal.fire({
          icon: 'success',
          title: 'You Loged In Successfully.',
          showConfirmButton: false,
          timer: 1500
          })
          window.location.reload();
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
    logout(){
      window.localStorage.setItem('key1','null');
      window.location.reload();
    }
    render() {
        return (
            <div>
              <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand href="/"><img className="brand_img" style={{width:'100px' , height:'100px'}} src="/images/site_logo.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto ml-auto">
                  <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
   {
       this.state.categories.map((data,index)=>{  
           return(
            <li key={index} class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {data.name}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                {
                    data.subcategories.map((data,index)=>{
                        return(
                        <a key={index} href={`/Products/${data.id}`}  class="dropdown-item" >{data.name}</a>
                        )
                    })
                }                        
            </div>
        </li>
           )
       })
   }
    <li class="nav-item ">
        <a class="nav-link" href="/Aboutus">About Us </a>
    </li>
    <li class="nav-item  login_box_cart">
        <a class="nav-link" href="/Cart"><i className="fas fa-shopping-cart"></i>
        <span className="cart_items_total">
          {this.state.cart_items_total}
        </span>
         </a>
    </li>
                          {
          this.state.islogin ? 
          
            <li class="nav-item  login_box_user dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user danger_text"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a   class="dropdown-item" >{this.props.user.fname} {this.props.user.lname}</a>
            <a href="/CustomerAccount"  class="dropdown-item" >My Account</a>
            <hr></hr>
            <a  onClick={this.logout.bind(this)} class="dropdown-item" >Logout</a>
            </div>
              </li>
         
          :
          <li onClick={this.loginModal.bind(this)} class="nav-item  login_box_user">
          <button  className="btn btn-outline-secondary  loginbtn">Login</button>
          </li>
        }
                     </Nav>
                  {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav> */}
                </Navbar.Collapse>
              </Navbar>
            {this.state.showLoginModal ? (
          <div className="mainModalDiv">
            <div className="animateModal">
              <div className="container-fluid">
                <div className="loginModal animate_auth_modal">
                  <div className="container-fluid">
                    <div className="btnCloseModal" onClick={this.loginModal}>
                      <i class="fas fa-times danger_text"></i>
                    </div>
                    <h1 className=" loginText">Login</h1>
                    <div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Email </label>

                      <input
                        type="email"
                        placeholder="Enter your Email"
                        className="loginInputField form-control"
                        onChange={this.login_email.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabelPass">Password </label>

                      <input
                        type="password"
                        placeholder="Enter your Password"
                        className="loginInputField form-control"
                        onChange={this.l_password.bind(this)}
                      ></input>
                    </div>
                      <div className="text-center loginBtnDiv">
                        <button onClick={this.login.bind(this)} className=" loginBtn ">Login</button>
                        
                      </div>
                      <div className="text-center">
                      <a href="/forgot-password"><p>Fogrot your password?</p></a>
                      </div>
                    </div>
                    
                    
                    <div className="loginDivider"></div>
                    <div className="text-center mb-4">
                      <p className=" text-secondary">
                        Are you new to Chairman's Foam ?{" "}
                        <span
                          className="text-danger danger_text"
                          onClick={this.signUpModal}
                        >
                          Sign Up
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {this.state.showSignUpModal ? (
          <div className="mainModalDiv">
            <div className="animateModal">
              <div className="container-fluid">
                <div className="loginModal animate_auth_modal">
                  <div className="container-fluid">
                    <div className="btnCloseModal" onClick={this.signUpModal}>
                    <i class="fas fa-times danger_text"></i>
                    </div>
                    <h1 className=" loginText">Sign Up</h1>
                    <div className="loginInputDiv">
                      <label className="loginLabel">First Name </label>

                      <input
                        type="text"
                        placeholder="Enter your First Name"
                        className="loginInputField"
                        onChange={this.s_fname.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabelPass">Last Name </label>

                      <input
                        type="text"
                        placeholder="Enter your Last Name"
                        className="loginInputField"
                        onChange={this.s_lname.bind(this)}
                      ></input>
                    </div>

                    <div className="loginInputDiv">
                      <label className="loginLabel">Email </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        className="loginInputField"
                        onChange={this.s_email.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabelPass">Password </label>

                      <input
                        type="password"
                        placeholder="Enter your Password"
                        className="loginInputField"
                        onChange={this.s_password.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabelPass">Phone</label>

                      <input
                        type="text"
                        placeholder="Enter your Phone"
                        className="loginInputField"
                        onChange={this.s_phone.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabelPass">Address</label>

                      <input
                        type="text"
                        placeholder="Enter your Address"
                        className="loginInputField"
                        onChange={this.s_address.bind(this)}
                      ></input>
                    </div>
                    
                    <div className="text-center loginBtnDiv">
                      <button onClick={this.signup.bind(this)} className=" loginBtn ">Sign Up</button>
                    </div>
                    <div className="loginDivider"></div>
                    <div className="text-center mb-4">
                      <p className=" text-secondary">
                        You already have a account ?{" "}
                        <span className="text-danger danger_text" onClick={this.loginModal}>
                          Login
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        ) : (
          <div></div>
        )}
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
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);