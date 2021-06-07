import React, { Component } from "react";
import { img_baseurl } from "../../Configs/apibase";
import "./distributor.css";

export default class Distributor extends Component{
  componentdidmount(){
    document.title = "Distributors"
  }

  render() {
    return (
      <div>
          <div>
          </div>
        <h1 className="retailText  text-center">BECOME A RETAIL PARTNER</h1>
        <p className=" text-center  retailDescription">
          Mehran is the pioneer brand in the foam industry and holds the success
          due to its premium quality, innovation and positive feedback from
          customers, satisfied suppliers and the community over the years.
        </p>

        <div className="">
          <div className=" row fulfilRow">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <img
                className="fulfilImage"
                src={img_baseurl+'imageFulfil.png'}
                alt="firstImage"
              ></img>
            </div>
            <div className="col-lg-6 dreams_content col-md-6 col-sm-12 pl-5">
              <h1 className="title-text text-white mt-5">FULFILLING DREAMS </h1>
              <hi className="title-text text-white">
                <span className="redDivider">SINC</span>E 1985
              </hi>
              <p className="text-white justify-content dreams_content mt-5 pr-5 mr-5">
                Join our ever growing distributor’s network nationwide today!
                With over 1000+ distributors and retailers in all cities of
                Pakistan, our fastest growing distributor’s network has been
                successful in achieving highest levels of customer satisfaction,
                happy distributors, maximum product availability and the
                numerous benefits that our distributors enjoy with our Retail
                Partnership Program.
              </p>
            </div>
          </div>
        </div>

        <div className="row coustmProductsRow">
          <div className="col-md-9 col-sm-12 ">
            <div className="coustmProductsTitle">
              <h1 className="title-text mt-5">
                Custom Products <br></br>
                <span className="blueDivider">Ord</span>er
              </h1>
            </div>

            <div className="coustmProductsDescription">
              <p className=" justify-content mt-4">
                Our user-friendly distributor’s portal allows each distributor
                to place orders according to their needs & requirements on a
                timely basis. We have segmented our widest network of
                distributors into 4 categories which makes it very convenient
                for all distributors to make their both regular and new orders
                without any hassel. Order your requirements online, trace it
                with convenience and enjoy the smooth delivery process.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <img
              className="coustmProductsImage d-sm-none d-md-inline"
              src={img_baseurl+'imageSecond.png'}
              alt="imageSection2"
            ></img>
          </div>
          <div className="col-sm-12">
            <img
              className="coustmProductsImageSm d-none d-sm-inline d-md-none"
              src={img_baseurl+'imageSecond.png'}
              alt="secondImage"
            ></img>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="distributorCatTitle">
              <h1 className="title-text mt-5">Distributor Categories</h1>
            </div>
          </div>
          <div className="col-md-8 col-sm-12 d-sm-none d-md-inline redUselessBox"></div>
        </div>

        <div className="row distributorCatImgRow">
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div>
              <img
                className="distributorCatImg"
                src={img_baseurl+'cat1.png'}
                alt="distributorImage"
              ></img>
              <h3 className="text-center distrbutorCatImgText">Chairman</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div>
              <img
                className="distributorCatImg"
                src={img_baseurl+'cat2.png'}
                alt="distributorImage"
              ></img>
              <h3 className="text-center distrbutorCatImgText">Plasma</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div>
              <img
                className="distributorCatImg"
                src={img_baseurl+'cat3.png'}
                alt="distributorImage"
              ></img>
              <h3 className="text-center distrbutorCatImgText">Silk</h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6">
            <div>
              <img
                className="distributorCatImg"
                src={img_baseurl+'cat4.png'}
                alt="distributorImage"
              ></img>
              <h3 className="text-center distrbutorCatImgText">Superior</h3>
            </div>
          </div>
        </div>

        <div className="row retailerRow">
          <div className="col-12">
            <div className="retailerTitle">
              <h1 className="title-text text-center mt-5">
                <span className="redDivider">WHY</span> JOIN THE MEHRAN'S FAMILY
                AS A RETAILER ? <br></br>
              </h1>
            </div>
            <div className="row retailerPointsRow">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">1</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Huge Trade Discount for the distributors
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">2</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Earn exclusive loyalty points based on:
                    </h3>
                    <p className="retailerDescriptionLite pl-2 pr-2">
                      {"\u25CF"} Bulk buying (in addition to trade discounts)
                      <br></br>
                      {"\u25CF"} Earn More as you sell more!. Achiving or
                      Over-achiving monthly sales target. A distributor achiving
                      the monthly sales target will earn our Loyalty rewards
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">3</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Personalized Online Portal
                    </h3>
                    <p className="retailerDescriptionLite pl-4 pr-4">
                      Our online Portal enables the top of range online ordering
                      system for the distributors.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">4</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Dedicated account management and support
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">5</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Exclusive content on request including offers and
                      competitions for your audience
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">6</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Market-specific marketing planning and excution
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="retailerPointsCol">
                  <div className="blueCircle">
                    <h2 className="blueCircleText">7</h2>
                  </div>
                  <div className="retailerDescriptionBox">
                    <h3 className="retailerDescription">
                      Assortment: Full access to range of Chiarman Foam and
                      mattresses and accessories across a discounted price range
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row joinUsRow">
          <div className="col-12 text-center">
            <a href="/distributor/signup"><button className="btnJoinUs">Join Us</button></a>
          </div>
        </div>
        <div>
        </div>
      </div>
    );
  }
}
