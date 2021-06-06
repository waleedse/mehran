import React, { Component } from "react";
export default class Story extends Component {
  render() {
    return (
      <div>
        <div className="row storyRow">
          <div className="col-md-4 col-sm-12 storyTextBox">
            <h1 className="title-text mt-5">
              <span className="redDivider">Our</span> Story
            </h1>
            <p className="text-secondary justify-content mt-4">
              Trusted by generations, Mehran has become a household name for 35 years. Established in 1985,
              Mehran is the pioneer brand in the foam industry and holds the success due to its premium quality,
              innovation and positive feedback from customers, suppliers and the community over the years. Mehran
              aims to keep its products consistently updated with new technology and innovation, best quality and
              designs. Since customer satisfaction is our top priority, each mattress is carefully engineered to provide
              utmost comfort and reliability to customers.

            </p>
            <div className="row">
              <div className="col-md-6">
              <img style={{width:'220px',height:'80px',marginTop:'15px'}} src={"/images/Signature.png"} />
              </div>


            </div>
            <div className="col-md-6 px-0">
                <h3 className="mt-2">Sheikh Badar Ud Din</h3>
                <p style={{fontSize:'12px'}} className="text-secondary  pb-4">Founder</p>
              </div>
          </div>
          <div className="px-0 col-md-8 col-sm-12">
            <img className="storyImage" src="/images/imageStory.png"></img>
          </div>
        </div>
      </div>
    );
  }
}
