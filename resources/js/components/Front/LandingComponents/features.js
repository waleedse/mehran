import React, { Component } from "react";
import { img_baseurl } from "../../Configs/apibase";
export default class features extends Component {
  render() {
    return (
      <div className="conatiner">
        <div className="text-center title-div">
          <p className=" title-text">
            <span className="redDivider">Pre</span>mium Sleep experience you can
            trust
          </p>
        </div>
        <div className="row feature-row mt-4">
        <h1 className="col-lg-1 ml-5"></h1>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="outerFeatureBox">
              <div className="featureBox text-center">
                <img className="featureIcon" src={img_baseurl+"icon2.png"}></img>
                <h3 className="featureItemText">
                  Fast Shipping
                </h3>
                <p className="subtext">Providing fastest and safest delivery service within all major cities of Pakistan</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            
            <div className="outerFeatureBox">
              <div className="  featureBox text-center">
                <img className="featureIcon" src={img_baseurl+"premium2.png"}></img>
                <h3 className="featureItemText">Amazing Deals</h3>
                <p className="subtext">Offering exciting discounts, bundle deals and online contents throughout the year</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="outerFeatureBox">
              <div className="featureBox  text-center">
                <img className="featureIcon" src={img_baseurl+"premium1.png"}></img>
                <h3 className="featureItemText">Customer Support</h3>
                <p className="subtext">Our customer support team is working 24/7 to help you sleep better</p>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12">
            {" "}
            <div className="outerFeatureBox">
              <div className="featureBox text-center">
                <img className="featureIcon" src="/icons/icon1.png"></img>
                <h3 className="featureItemText">Posture Adjustment</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    );
  }
}
