import React, { Component } from 'react';
import Navbar from '../NavBar'
import Footer from '../LandingComponents/Footer'
class PrivacyPolicy extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="container">
                    <h1 className="title-text text-center mb-3">Privacy Policy</h1>
                
                    <div>
                        <h6 className="pages-text">
                        These terms and conditions apply to orders placed online, over the phone or through brochures. 
                        It is your responsibility to check the dimensions of all goods to ensure that they will fit into 
                        your product before accepting the order. Mehran’s Chairman Foam mattress carries a warranty of 15 
                        years under normal use from the date of purchase to the original user. The Warranty covers replacement 
                        /discount towards unused period at the company discretion provided the mattress is returned to the 
                        dealer from whom the purchase was made or to Metro Flex Industries (Pvt.) 
                        Ltd or to its regional office as the case may be. The warranty does not extend to any other part 
                        of the mattress or the entire mattress which has been subjected to misuse, accident, natural calamity,
                         mishandling or violation of instruction for use as shown on our TAKE CARE INSTRUCTIONS. 
                         The company will make efforts to attend to customer complaints within 10 working days after 
                         the complaint registration.
                        </h6>
                    </div>
                    
                      </div>
                      <div className="mt-5">
                        <Footer/>
                    </div>
            </div>
        );
    }
}

export default PrivacyPolicy;