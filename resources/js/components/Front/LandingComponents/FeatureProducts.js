import Axios from "axios";
import React, { Component } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { baseurl, img_baseurl } from "../../Configs/apibase";
import NumberFormat from 'react-number-format';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products:[]
    }
  }
  componentDidMount(){
    Axios.post(baseurl+'/api/get_featuerd_products').then(res=>{
      this.setState({
        products:res.data
      })
    })
  }
  render() {
    return (
      <div className="py-5 container">
        <h1 className=" title-div title-text text-center">
          Check Out Our{" "}
          <span style={{ color: "#da232F" }}>Popular Products</span>
        </h1>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          // infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          // customTransition="all .5"
          // transitionDuration={500}
          containerClass="carousel-container"
          // removeArrowOnDeviceType={["tablet", "mobile"]}
          deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          >
          {
            this.state.products.map((data,index)=>{
              return(
                <a href={"/Product/"+data.id}>  <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div className="popProductCard text-center">
                                {
                                    data.cheep_varient.discount > 0 ?
                                    <div className=" redCircle  ">
                                    <h3 className="pt-2 text-white">{Math.round(data.cheep_varient.discount / data.cheep_varient.original_price * 100)}%</h3>
                                    <p className="text-white paraText">OFF</p>
                                    </div>:
                                null
                             }


                            {
                                data.images.length > 0 ?
                                <img className="popImage" src={img_baseurl+data.images[0].image}></img>
                                :<img className="popImage" src={"/images/noimage.png"}></img>
                            }
                            <h1 className=" text-bold featureItemText pt-2 text-dark">{data.name}</h1>
                            <div className="row priceRow">
                                <div className="col-6">
                                <div className="priceCancelText text-secondary">{data.cheep_varient.discount > 0 ? data.cheep_varient.original_price : null}</div>
                                </div>
                                <div className="col-6">
                                <div className="priceText">
                                <NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                                </div>
                                </div>
                            </div>
                            </div>
                        </div></a>
              )
            })
          }
        </Carousel>
        <div className="row popProductRow">

        </div>
      </div>
    );
  }
}
