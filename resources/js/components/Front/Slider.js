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
            {
                this.state.sliderImages.map((data,index)=>{
                    return(
                        <div key={index}>
                            <img src={img_baseurl+data.image}/>
                        </div>
                    )
                })
            }
            
        </Carousel>
        );
    }
}

export default Slider;