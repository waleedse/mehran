import React, { Component } from "react";

export default class Dream extends Component {
  render() {
    return (
      <div>
        <div className="row dreamRow">
          <div className="col-md-7 ">
            <img className="dreamImage" src={"/images/imageDream.gif"}></img>
          </div>
          <div className="col-md-5 ">
            <h1 className="title-text mt-5">
              <span className="redDivider">A Dur</span>able Dream come true
            </h1>
            <p className="text-secondary justify-content mt-4">
              You have come to the right place for online mattress shopping. We are one of the best mattress brands in
              Pakistan.
              Customers who were looking for improvement of back pain, orthopedic memory foam mattresses,
              antibacterial microfibre features, contemporary design or dual comfort mattresses are now happy and
              well-rested customers. Our mattress is the right fit for every body type. Sleepers of all shapes and sizes
              stay comfortable and cozy in every sleeping position. Chairman Foam Mattress is neither too hard nor too
              soft. It is comfortable, breathable and durable. You can use our mattress with any kind of bed base like
              wooden beds or slatted bed frames without the need of mattress protectors or fitted bed sheets. We invite
              you to join the best mattress experience. Your search to find the perfect mattresses online for your needs
              ends here.

            </p>
          </div>
        </div>
      </div>
    );
  }
}
