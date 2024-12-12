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

  componentDidMount(){
    const url=this.props.history.location.pathname;
    console.log(url)
    if(url==="/")
    console.log(url)
    this.setState({
      home:true
    })
    let senderdata = {
      token:window.localStorage.getItem('distoken')
    }
    console.log(senderdata);
    Axios.post('/api/distributor_check_auth',senderdata).then(res=>{
      console.log(res);
      if(res.data.status == 200){
        let distributor = {
          dis:res.data.distributor[0].id,
          name:res.data.distributor[0].fname + ' ' + res.data.distributor[0].lname,
          email:res.data.distributor[0].email,
          image:res.data.distributor[0].image,
          fname:res.data.distributor[0].fname,
          lname:res.data.distributor[0].lname,
          company:res.data.distributor[0].company,
          phone:res.data.distributor[0].phone,  
          address:res.data.distributor[0].address,
          city:res.data.distributor[0].address,
          country:res.data.distributor[0].country,
          loyaltypoints:res.data.distributor[0].loyaltypoints,
          d_islogin:true
        }
        this.props.changeUser(distributor);
        this.setState({
          islogin:true
        })
      }
    })
  }

 
  constructor(){
    super();
    this.state={activeAboutUs:false,islogin:false}

  }
  render() {
    const {activeAboutUs}=this.state
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

              <a styles={{borderLeft:'0'}} class="navBarItem" href="/distributor/Products/15">HEALTHCARE</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/distributor/Products/24">ACCESSORIES</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Aboutus">ABOUT US</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/faqs">FAQ's</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/contact-us">CONTACT US</a>
              {
                this.state.islogin ? 
                <a styles={{borderLeft:'0'}} class="navBarItem" href="/distributor/CustomerAccount">PROFILE</a>
                :
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/distributor/login">LOGIN</a>

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
    changeUser:(distributor)=>{dispatch({type:'CHANGE_DISTRIBUTOR',payload:distributor})}
  }
}
const mapStateToProps = (state)=>{
  return {
    distributor:state.distributor
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Header));
