// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, NavLink } from "react-bootstrap";
import { connect } from "react-redux";
import { Link ,withRouter } from "react-router-dom";
import AccountDropDown from "./HeaderComp/AccountDropDown";

import HeaderIem from "./HeaderComp/HeaderIem";

 class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      islogin:false,
      cart_items_total:0

    };
  }
   
  componentDidMount(){
    const url=this.props.history.location.pathname;
    console.log(url)
    if(url==="/")
    console.log(url)
    this.setState({
      home:true
    })
    Axios.post('/api/get_cart_items_total',{cart_cookie_id:window.localStorage.getItem('cart_cookie_id')}).then(res=>{
      this.setState({
        cart_items_total:res.data.cart_item_totals
      })
    })
    let senderdata = {
      token:window.localStorage.getItem('key1')
    }
    Axios.post('/api/check_customer_auth',senderdata).then(res=>{
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



  render() {
    return (
      <div >
        <Navbar  className={this.props.history.location.pathname == '/' ? "navbar-dark nav_home" : "navbark-dark"} expand="lg"  >
          <Navbar.Brand href="/" className="navBrand">
            <img
              className={this.props.history.location.pathname == '/' ? "headerLogo" : "headerLogoAllPages"}
              src="/images/site_logo.png"
              alt="logo"
            ></img>
          </Navbar.Brand>
          <Navbar.Toggle onClick={this.props.handleSideBar} aria-controls="" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto m1-5 d-none d-md-flex navItemRow">
            <a styles={{borderLeft:'0'}} class="navBarItem" href="/">Home</a>
                {/* <HeaderIem styles={{borderLeft:'0'}} title="HOME">
                <AboutUsDropDown />
                </HeaderIem> */}
              <HeaderIem   title="MATRESSES">
                <AccountDropDown />
              </HeaderIem>
              
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Products/15">HEALTHCARE</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Products/24">ACCESSORIES</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Aboutus">ABOUT US</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/faqs">FAQ's</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/contact-us">CONTACT US</a>
              {
                this.state.islogin ? 
                <a styles={{borderLeft:'0'}} class="navBarItem" href="/CustomerAccount">PROFILE</a>
                :
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/login">LOGIN</a>

              }
              {/* <NavLink>
                <FontAwesomeIcon
                  icon={faSearch}
                  size="sm"
                  color="###"
                ></FontAwesomeIcon>
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
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
export default  connect(mapStateToProps,mapDispatchToProps) ( withRouter(Header));
