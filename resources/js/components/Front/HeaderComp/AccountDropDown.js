import React, { Component } from "react";
import { a } from "react-router-dom";
export default class AccountDropDown extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/18">
            <img className="headerImage" src="/images/cat2.png"></img>
            <h3 className="pt-2 text-light" >FOAM MATTRESS</h3>
            <h6  className="text-light">We have a large range of <br></br> Foam Mattress</h6></a>
            {/* <a  href={"/Product/21"}>
                                   <button className="btn btn_shopnow">Shop Now</button>
                            </a> */}
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/19">
           <img className="headerImage" src="/images/cat3.png"></img>
            <h3 className="pt-2 text-light" >SPRING MATTRESS</h3>
            <h6 className="text-light">We have a large range of <br></br> Spring Mattress</h6></a>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/20">
               <img className="headerImage" src="/images/cat4.png"></img>
            <h3 className="pt-2 text-light" >LUXURY MATTRESS</h3>
            <h6  className="text-light">We have a large range of <br></br> Luxury Mattress</h6>
            </a>
          </div>

          <div className="headerDropDownImgDiv">
           <a  href={"/shop"}>
                                   <button className="btn btn_shopnow">Shop Now</button>
                            </a>
          </div>
        </div>
      </div>
    );
  }
}
