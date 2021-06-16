import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./components/ourLocation.css"

const OurLocationPage = () => {
    return (
        <div className="ourLocation">
              <div className="page_bg text-center page_header_padding">
                    <h1 className="title-text page_title_ text-center ">Contact Us</h1>
                </div>
          {/* <h1 className="title-text text-center mb-3 mt-5"></h1> */}

           <div style={{position:"relative"}}>
          <div className='d-none d-md-inline'>  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27219.292333778787!2d74.32326153955077!3d31.485370000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919043caf4d984b%3A0xbeb497e05e4d16d0!2sChairman%20Foam!5e0!3m2!1sen!2s!4v1623150057861!5m2!1sen!2s" width="100%" height="450" frameBorder="0" style={{border:'0'}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></div>

           <div className="mapCard">
            <div className="title">Lahore Office</div>
            <div className="text">64 Block M, Gulberg III, Lahore,<br></br>
            Lahore, Punjab<br></br><br></br>

            <div className="title">Customer Support</div>
            <div className="text">For any enquiries call us .</div>
            <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#fff"  /> (042) 35441671</div>
            <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#fff"  /> info@chairmanfoam.com</div>
           </div>
           </div>

          <div className='basicRow'>
          {/* <div className="cardFlex">
               <div className="locationCard">
                   <div className='title'>Lahore</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>71-75, Shelton Street,<br/>
                    Covent Garden,<br/>
                    London, WC2H 9JQ
                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +44 2081244440</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> support@cabanacapitals.com</div>
               </div>
               <div className="locationCard">
                   <div className='title'>Dubai</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>Office No. 2005, 20th Floor, Prism Tower,Business Bay, Dubai, UAE


                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  />  +971 4564 5891</div>

               </div>
               <div className="locationCard">
                   <div className='title'>Nigeria</div>
                   <div className="text"><FontAwesomeIcon icon={faMapMarkerAlt} color="#ee3f97"  /> <span>1st floor, 3-9 Olu Koleosho Street, Off Simbiat Abiola way (Medica road) Ikeja,Lagos.

                </span></div>
                <div className="text mb-1"><FontAwesomeIcon icon={faPhone} color="#ee3f97"  /> +2348056531053.</div>
                <div className="text"><FontAwesomeIcon icon={faEnvelope} color="#ee3f97"  /> hu@cabanacapitals.com</div>
               </div> */}
           </div>
          </div>
        </div>
    );
};

export default OurLocationPage;
