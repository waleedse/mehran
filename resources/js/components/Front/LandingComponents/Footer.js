import React, { Component } from "react";
export default class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footerTopDivider"></div>
        <div className="mob_center row footerRow">
          <div className="col-md-2 col-sm-4">
            <div className="footerCol">
              <h5 className="text-bold footerHeadText">Mattress</h5>
              <p className="footerItemText text-secondary">Foam</p>
              <p className="footerItemText text-secondary">Spring</p>
              <p className="footerItemText text-secondary">Luxury</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="footerCol">
              <h5 className="text-bold footerHeadText">Health Care</h5>
              <p className="footerItemText text-secondary">Ortho</p>
              <p className="footerItemText text-secondary">Ortho Luxury</p>
              {/* <p className="footerItemText text-secondary">Medicore</p> */}
              <p className="footerItemText text-secondary">Bodicare</p>
              {/* <p className="footerItemText text-secondary">Medimax</p> */}
              <p className="footerItemText text-secondary">Biopedic</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="footerCol">
              <h5 className="text-bold footerHeadText">Accessories</h5>
              <p className="footerItemText text-secondary">Travel Pillow</p>
              <p className="footerItemText text-secondary">Prayer Mat</p>
              <p className="footerItemText text-secondary">3 fold bed</p>
              <p className="footerItemText text-secondary">Memory Pillow</p>
              <p className="footerItemText text-secondary">Sofa cum Bed</p>
            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            {/* <div className="footerCol">
              <h5 className="text-bold footerHeadText">Furniture</h5>
              <p className="footerItemText text-secondary">Sofa Cum Bed</p>
            </div> */}
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="footerCol">
              <h5 className=" text-bold footerHeadText ">About us</h5>
              <a href="/faqs" style={{color:"gray"}}><h5 className="  footerHeadText">FAQ's</h5></a>
              <a href="/TermsAndconditions" style={{color:"gray"}}><h5 className="  footersmalltext footerHeadText">Terms and Condition</h5></a>
              <a href="/PrivacyPolicy" style={{color:"gray"}}><h5 className="  footersmalltext footerHeadText">Privacy Policy</h5></a>
              <a href="/distributor" style={{color:"gray"}}><h5 className=" footersmalltext footerHeadText">Distributors</h5></a>

            </div>
          </div>
          <div className="col-md-2 col-sm-4">
            <div className="footerCol">
              <h5 className="text-bold footerHeadText">Need Help ?</h5>
              <p className="footerItemText footersmalltext text-secondary" >
                Call us on <span className="phoneText">(+92)42 3544 1671</span>
              </p>
              <p className="footerItemText text-secondary">
                or email us at{" "}
                <span className="emailText">info@chairmanfoam.com</span>
              </p>
                <a href="https://www.facebook.com/chairmanfoam/"><img style={{width:'30px',heigth:'30px'}} src="/images/fb.png"/></a>
               <a href="https://instagram.com/chairmanfoam?igshid=7pcd3d8n7uuw"><img style={{width:'30px',heigth:'30px',marginLeft:'5px'}} src="/images/insta.png"/></a>
            </div>
          </div>
        </div>
        <div class="footerDivider"></div>
        <div className="row">
          <div className="footerImageBox">
            <img className="footerImage" src="/images/site_logo.png"></img>
          </div>
        </div>
        <div className="text-center">
          {" "}
          <p className="mt-2 footerItemText text-secondary">
            <i class="copyright outline icon"></i> Copyright 2020 Chairman Foam
          </p>
          <p className="mb-3 footerItemText text-secondary paraText">
            All Rights Reserved.
          </p>
        </div>
      </div>
    );
  }
}
