import React, { Component } from 'react';
import { img_baseurl } from "../../Configs/apibase";

class faeture2 extends Component {
    render() {
        return (
            <div className="container-fluid" style={{backgroundColor:'#011A34'}}>
                <div className="text-center title-div">
            <p className=" title-text text-light">
                <span className="redDivider text-light">Pre</span>mium Sleep experience you can
                trust
            </p>
            </div>
            <div  className="row depositCardRow margin_web">

          <div className="col-lg-1 col-md-6 col-sm-12 depositCard"></div>
          <div className="col-lg-3 col-md-6 col-sm-12  depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src={img_baseurl+"icon2.png"} alt="card"></img></div>
              <h4 className="title"> Fast <br/> Shipping</h4>
              <p className="text">Providing fastest and safest delivery service within all major cities of Pakistan</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12  depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src={img_baseurl+"premium2.png"} alt="card"></img></div>
              <h4 className="title">Amazing <br/> Deals</h4>
              <p className="text">
              Offering exciting discounts, bundle deals and online contents throughout the year
</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12  depositCard">
            <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src={img_baseurl+"premium1.png"} alt="card"></img></div>
              <h4 className="title">Customer Support</h4>
              <p className="text">Our customer support team is working 24/7 to help you sleep better
</p>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 col-sm-12 mt-5 depositCard">
            {/* <div className="outerDiv">
            <div className="centerDiv">  <img className="Img" src="/assets/images/deposite4.png" alt="card"></img></div>
              <h4 className="title">Earn</h4>
              <p className="text">Use Your IB link to register clients and earn IB commissions</p>
            </div> */}
          </div>
            </div>
          </div>
        );
    }
}

export default faeture2;
