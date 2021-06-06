import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Axios from 'axios';
import { img_baseurl } from '../Configs/apibase';
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderImages:[]
        }
    }

    componentDidMount(){
        Axios.post('/api/get_slider_images').then(res=>{
            this.setState({
                sliderImages:res.data
            })
        })
    }
    render() {
        return (
            <Carousel
            autoPlay = {true}
            showArrows={true}
            infiniteLoop={true}
            interval={100000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            // showIndicators={true}
            >

                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/1606059807.png`}}>
                            {/* <div className="container">
                            <div className="row trueRow">
                                <div className="col-12 pt-5 ">
                                <h1 className="trueTitle">
                                    TRUE ECN <br /> FOREX BROKER
                                </h1>
                                <p className="trueDescription">
                                    True ECN Spreads From 0.0 Pips
                                </p>
                                <div className="trueButtonBox">
                                    <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/login/','_self')}} className="btnLogin">LOG IN</button>
                                    <button onClick={()=>{ window.open('https://secure.cabanacapitals.com/register/','_self')}} className="btnSignUp">SIGN UP</button>
                                </div>
                                </div>
                            </div>
                            </div> */}
                        </div>
                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/slidera.jpg`}}>

                        </div>

                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/sliderb.jpg`}}>
                        <div className="container">

                            <div className=" trueRow text-left">
                            <h2 style={{fontSize:'48px',fontWeight:'700'}}>Mehran's Royal Comfort</h2>
                               <h6 style={{fontSize:'22px'}}> The perfect mattress didn’t exist,so we <br/>  invented it.
                                Experience extreme  comfort <br/> with
                              our Royal Comfort Spring Mattress</h6>
                            </div>
                            </div>
                        </div>


            {/* {
                this.state.sliderImages.map((data,index)=>{
                    return(
                        <div key={index}>
                            <img src={img_baseurl+data.image}/>
                        </div>
                    )
                })
            } */}

        </Carousel>
        );
    }
}

export default Slider;
