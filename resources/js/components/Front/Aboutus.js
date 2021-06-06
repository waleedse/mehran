import React, { Component } from 'react';


class Aboutus extends Component {
    render() {
        return (
            <div>
                <div className="aboutus_page">
                    {/* <div className="container">
                    <h2 className="page_title text-center">About Us</h2>
                    </div> */}
                    <div className=" aboutuspage" >
                    {/* <div>
                        <img style={{width:'100%'}} src="/images/Aboutus.png"/>
                    </div> */}
                    <div>
        <h1 className=" aboutUs-div aboutUs-text text-center">ABOUT US</h1>
            <div >
                  <img className="top_image" src="/images/handshake.png"></img>
                  <div className="intro_content">
                    <p className="p-4 justify-content intro-text">
                    Established in 1985, Mehran is the pioneer brand in the foam industry and holds the success due to its
                    premium quality, innovation and positive feedback from customers, suppliers and the community over the
                    years. Chairman Foam, it’s sub-brand, has become the most trusted name in the foam industry for
                    providing uncompromised quality products and unmatched customer service with the highest degree of
                    comfort and customer satisfaction.
                    </p>
                  </div>
            </div>
        <div>
          <div className="row inspirationRow">
            <div className="col-md-8 col-sm-12">
              <img className="storyImage" src='/images/inspire.png'></img>
            </div>
            <div className="col-md-4 col-sm-12">
              <h1 className="title-text mt-5">
                <span className="redDivider">Our</span> Inspiration
              </h1>
              <p className="text-secondary justify-content detailed-text mt-4">
                Creating an excellent product supported with outstanding
                customer service isn't easy. It takes dedication, hard work, and
                to feel inspired. We believe that innovation is the driving
                force behind achieving excellence. In our pursuit to ensure 100%
                satisfaction for all our customers, we use innovation to guide
                us towards creative solutions that exceed expectations and align
                with our commitments to the community. We consistently use
                upgraded production techniques and latest machinery & equipment
                with the help of our extensive R&D, which is working
                comprehensively to meet the emerging needs of our customers.
              </p>
            </div>
          </div>
        </div>

        <div className="row responsibiltyRow storyTextBox">
          <div className="col-md-6 col-sm-12 ">
            <h1 className="title-text mt-5">Corporate Social</h1>
            <hi className="title-text">
              <span className="redDivider mb-2"> Res</span>ponsibility
            </hi>
            <p className="text-secondary justify-content detailed-text mt-4 mb-2">
              Our team is passionate about providing a product that's better for
              people and for the planet. From materials to packaging, each
              choice we make for our mattresses is supported by our commitment
              to providing customers and future generations with access to a
              better quality of sleep.<br></br><br></br> Being a known-family brand name for 25
              years, Chairman Foam feels responsible to maintain its integrity
              and successful brand image to reach the highest levels of customer
              loyalty and satisfaction. The Mehran Group took the initiative to
              move its production facilities to the remote areas of Azad Jammu
              and Kashmir in 1997 to support and create employment opportunities
              and reduce pollution in urban areas of Pakistan.<br></br><br></br> Every thread
              that's woven into our mattress is sourced through a supply chain
              that reflects the highest standards we live by. We believe in
              making the smallest possible environmental impact while providing
              a product of the highest possible quality and craftsmanship. We
              utilize a life cycle assessment to analyze the environmental and
              health impact of our products and take all possible steps to
              minimize carbon emissions, waste stream pollutants and
              non-recyclable content. By shipping our mattresses directly to
              your doorstep, we further eliminate the need for excess
              transportation, and thereby help to reduce pollution. We are
              committed to minimizing pollution, reducing waste, and causing the
              least possible environmental harm.
            </p>
          </div>
          <div className="col-md-6 col-sm-12">
            <img className="responsibiltyImage" src='/images/team.png'></img>
          </div>
        </div>

        <div className="row estoreRow">
          <div className="col-md-6 col-sm-12 ">
            <h1 className="title-text mob_left text-right mt-3">
              <span className="redDivider mb-2">Our </span>
              Estore
            </h1>
          </div>
          <div className="col-md-6 col-sm-12">
            <p className="text-secondary  justify-content detailed-text mt-4">
              Our customer-friendly website has been designed with the customer
              in mind. Without leaving the comfort of your home, you can shop
              and make your mattress decision at your leisure using our
              easy-to-navigate website.After placing your order, you will
              receive your product(s) shipped directly to your door within 2-3
              business days. Get ready for an enjoyable online purchasing
              experience.
            </p>
          </div>
        </div>

        <div className="row happyShoppingRow text-center">
          <div className="col-12">
          <img src='/images/happyshopping.png'></img>
          </div>
        </div>
      </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Aboutus;
