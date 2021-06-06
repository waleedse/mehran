// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, NavLink } from "react-bootstrap";
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
  }


  constructor(){
    super();
    this.state={activeAboutUs:false}

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

              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Products/15">HEALTHCARE</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Products/24">ACCESSORIES</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/Aboutus">ABOUT US</a>
              <a styles={{borderLeft:'0'}} class="navBarItem" href="/faqs">FAQ's</a>


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
export default withRouter(Header)
