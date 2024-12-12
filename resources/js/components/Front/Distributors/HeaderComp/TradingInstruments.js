import React, { Component } from "react";
import { a } from "react-router-dom";

export default class TradingInstruments extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
        <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">Trading Instruments</h5>
            <a href="/trading-instruments">
              <div className="headerDropDownItem">Trading Instruments</div>
            </a>
          </div>
          <div
            className="headerDropDownItemDiv "
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">More</h5>


            <a href="/trading-currencies">
              <div className="headerDropDownItem">Currencies (FX)</div>
            </a>
            <a href="/account-type">
              <div className="headerDropDownItem">Precious Metals (Spot)</div>
            </a>
            <a href="/trading-instruments">
              <div className="headerDropDownItem">Commodities (Spot)</div>
            </a>
            <a href="/trading-currencies">
              <div className="headerDropDownItem">CFD indices (Spot)</div>
            </a>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/paymentsDrop.svg"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
