import React, { Component } from "react";
export default class journey extends Component {
  render() {
    return (
      <div className="journey_bg">
          <div className="container">
        <div className=" row journeyBox">
          <div className="col-lg-1"></div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            {/* <img className="journeyImage" src="/images/imageJourney.png"></img> */}
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12">
            {" "}
            <h1 className="title-text mt-5 text-light">Your Most Comfortable</h1>
            <hi className="title-text text-light">
              {/* <span className="redDivider"></span> */}
              Journey Begins Here
            </hi>
            <p className="text-secondary justify-content mt-2 py-3 text-light">
             We want people to sleep better so they can live better. We offer our customers a premium sleeping
              solution at a fraction of the cost of a traditional mattress and provide a world-class customer experience
              that is hassle and stress free.
            </p>
            <a href="/Shop"><button  className="btnShopNow">Shop Now</button></a>
            {/* <div className="row shippingRow">
              <div className="col-6">
                <h1 className="text-bold featureItemText">Fast Delivery</h1>
                <p className="text-secondary justify-content mt-2">
                  Express delivery is the service provided by the Chairman
                  Foam that allows you to recieve your order faster!
                </p>
              </div>
              <div className="col-6">
                <h1 className="text-bold featureItemText">Highest Quality </h1>
                <p className="text-secondary justify-content mt-2">
                  We are passinate to doing our part to make life better. We
                  provide high quality merchandise
                </p>
              </div>
            </div> */}
          </div>
        </div>
        </div>
      </div>
    );
  }
}
