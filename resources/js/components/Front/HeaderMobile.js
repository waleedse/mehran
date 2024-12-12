import {
  faAngleRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import HeaderMobileLastDropDown from "./HeaderComp/HeaderMobileLastDropDown";

 class HeaderMobile extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = { activeDropDown: null ,   islogin:false };

  }

  componentDidMount(){

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
  // handleChange drop down fun
  handleChangeDropDown  (value) {
    console.log(value);
    this.setState({
      activeDropDown: value,
    });
  };
  render() {
    return (
      <>
        <div
          className={
            this.props.active
              ? "headerMobile headerMobileActive"
              : "headerMobile"
          }
        >
          <div className="sideBarHead">
              <h2 className="text-light ">Menu</h2>
            <span>
              {this.state.activeDropDown && (
                <div onClick={() => this.handleChangeDropDown(null)}>
                  <FontAwesomeIcon
                    className="pointer"
                    icon={faArrowLeft}
                    color="#fff"
                    size="lg"
                  />
                </div>
              )}
            </span>
            <FontAwesomeIcon
              onClick={this.props.closeHeader}
              className="pointer"
              icon={faTimes}
              color="#fff"
              size="lg"
            ></FontAwesomeIcon>
          </div>
          <div
            className={
              this.state.activeDropDown
                ? "sideBarBody activeDropDown"
                : "sideBarBody"
            }
          >
               <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/">
                        <div className="sideBarItem">
                          <span> Home</span>
                        </div>
                      </Link>
                      </div>
              <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("Matresses")}
            >

              <span>Matresses</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div>
            <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/Products/15">
                        <div className="sideBarItem">
                          <span> HEALTHCARE</span>
                        </div>
                      </Link>
                      </div>
                      <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/Products/24">
                        <div className="sideBarItem">
                          <span> ACCESSORIES</span>
                        </div>
                      </Link>
                      </div>
                      <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/Aboutus">
                        <div className="sideBarItem">
                          <span> ABOUT US</span>
                        </div>
                      </Link>
                      </div>
                      <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/faqs">
                        <div className="sideBarItem">
                          <span> FAQ's</span>
                        </div>
                      </Link>
                      </div>
                      <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/contact-us">
                        <div className="sideBarItem">
                          <span> CONTACT US</span>
                        </div>
                      </Link>
                      </div>
                      {
                          this.state.islogin ?
                          <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/CustomerAccount">
                        <div className="sideBarItem">
                          <span>PROFILE</span>
                        </div>
                      </Link>
                      </div>
                      :
                      <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                      <Link to="/login">
                        <div className="sideBarItem">
                          <span> LOGIN</span>
                        </div>
                      </Link>
                      </div>
                      }

            {/* <div
              className="sideBarItem"
              onClick={() => this.handleChangeDropDown("pamm")}
            >
              <span> ANALYSIS & EDUCATION</span>
              <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
            </div> */}

          </div>

          {this.state.activeDropDown && (
            <div
              className="sideBarItem sideBarItemNew"
              onClick={() => {
                // this.handleChangeDropDown(null);
                // this.props.closeHeader();
                // return;
              }}
            >
                 {this.state.activeDropDown === "Matresses" && (
                <>
                  <HeaderMobileLastDropDown activeDropDown={true} title="Matresses">
                    <div
                      onClick={() => {
                        this.handleChangeDropDown(null);
                        this.props.closeHeader();
                        return;
                      }}
                    >
                       <div
                                    className="sideBarItem"
                                    onClick={this.props.dropDownHandler}
                                >
                                    <a href="/Products/18">
                                    {/* <img className="headerImage" src="/images/icon_menu1.png"></img> */}
                                    <h3 className="pt-2 text-light" >FOAM MATTRESS</h3>
                                    <h6  className="text-light des_menu_text">
                        Meet the premium quality foam  <br></br>  mattress
                        that's turning good nights  <br></br>  into better mornings</h6></a>

          </div>
          <div
            className="sideBarItem"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/19">
           {/* <img className="headerImage" src="/images/icon_menu2.png"></img> */}
            <h3 className="pt-2 text-light" >SPRING MATTRESS</h3>
            <h6 className="text-light des_menu_text">Luxe spring mattresses with grandeur <br></br>appeal,
 exuberant features <br></br> and contoured cushioning</h6></a>
          </div>
          <div
            className="sideBarItem"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/20">
               {/* <img className="headerImage" src="/images/icon3_menu.png"></img> */}
            <h3 className="pt-2 text-light" >LUXURY MATTRESS</h3>
            <h6  className="text-light des_menu_text">An epitome of innovation,  high-resilience <br></br> foam
 ensuring years of comfortable <br></br> and restful sleep  </h6>
            </a>
          </div>
                    </div>
                  </HeaderMobileLastDropDown>
                </>
              )}








            </div>
          )}
        </div>
      </>
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
  export default  connect(mapStateToProps,mapDispatchToProps) ( withRouter(HeaderMobile));
