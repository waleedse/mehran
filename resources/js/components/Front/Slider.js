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
            interval={3000}
            // stopOnHover={true}
            // showThumbs={true}
            // showStatus={true}
            // showIndicators={true}
            >

                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/1606059807.png`}}>
                        <div className="container">

                        <div className=" trueRow text-center">
                        <h2 className="slide1_text" >Good Sleep Starts with <br></br>Chairman Foam</h2>
                        {/* <h6 style={{fontSize:'22px text-center'}}>Good Sleep Starts with Chairman Foam</h6> */}
                        </div>
                        </div>
                        </div>


                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/sliderb.jpg`}}>
                        <div className="container">

                            <div className=" trueRow web_slide_padding mob_slide2_padding  text-left" >
                            <h2  style={{fontSize:'48px',fontWeight:'700'}}>Mehran's Royal Comfort</h2>
                               <h6 className="slide2_des col-md-4 px-0" style={{fontSize:'22px',textAlign:'left'}}> The perfect mattress didn’t exist,so we   invented it.
                                Experience extreme  comfort  with
                              our Royal Comfort Spring Mattress</h6>
                            </div>
                            </div>
                        </div>
                        <div className="landingSliderBg" style={{backgroundImage:`url(/images/slider4.jpg`}}>
                        <div className="container">

                            <div className=" trueRow text-left">
                            <h2 style={{fontSize:'48px',fontWeight:'700'}}>Chairman Orthopaedic</h2>
                               <h6 className="col-md-5 px-0" style={{fontSize:'22px'}}>
                               An exquisite orthopaedic mattress range designed for an optimum alignment of your body
                              </h6>
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
