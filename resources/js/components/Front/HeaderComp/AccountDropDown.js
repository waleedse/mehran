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
            <img className="headerImage" src="/images/icon_menu1.png"></img>
            <h3 className="pt-2 text-light" >FOAM MATTRESS</h3>
            <h6  className="text-light des_menu_text">
Meet the premium quality foam  <br></br>  mattress
that's turning good nights  <br></br>  into better mornings</h6></a>
            {/* <a  href={"/Product/21"}>
                                   <button className="btn btn_shopnow">Shop Now</button>
                            </a> */}
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/19">
           <img className="headerImage" src="/images/icon_menu2.png"></img>
            <h3 className="pt-2 text-light" >SPRING MATTRESS</h3>
            <h6 className="text-light des_menu_text">Luxe spring mattresses with grandeur <br></br>appeal,
 exuberant features <br></br> and contoured cushioning</h6></a>
          </div>
          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
              <a href="/Products/20">
               <img className="headerImage" src="/images/icon3_menu.png"></img>
            <h3 className="pt-2 text-light" >LUXURY MATTRESS</h3>
            <h6  className="text-light des_menu_text">An epitome of innovation,  high-resilience <br></br> foam
 ensuring years of comfortable <br></br> and restful sleep  </h6>
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
