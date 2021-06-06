import React, { Component } from "react";
import { a } from "react-router-dom";
export default class Refferal extends Component {
  render() {
    return (
      <div>
        <div className="headerDropDown">
          <div
            className="headerDropDownItemDiv offset-md-1"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">PARTNERSHIP PROGRAM</h5>
            <a href="/introducing-broker" className="headera">
              <div className="headerDropDownItem">Inroducing Broker </div>
            </a>
            <a href="/affiliate-program" className="headera">
              <div className="headerDropDownItem">Affiliate Program</div>
            </a>

          </div>

          <div
            className="headerDropDownItemDiv"
            onClick={this.props.dropDownHandler}
          >
            <h5 className="headerDropDownTitle">CORPORATE</h5>
            <a href="/white-label" className="headera">
              <div className="headerDropDownItem">White Label Solution</div>
            </a>
            <a href="/reffer-friend" className="headera opacityZero">
              <div className="headerDropDownItem">Refer a Friend</div>
            </a>
          </div>
          <div className="headerDropDownImgDiv">
            <img
              className="headerDropDownImg"
              src="/assets/images/promotionsDrop.svg"
              style={{ width: "180px" }}
              alt="promotion"
            ></img>
          </div>
        </div>
      </div>
    );
  }
}
