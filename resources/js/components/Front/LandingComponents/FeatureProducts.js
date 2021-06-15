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
      <div className="py-5 bg-light" id="feature_products">
        <h1 className=" title-div title-text text-center">
          Check Out Our{" "}
          <span style={{ color: "#da232F" }}>Popular Products</span>
        </h1>
        <div className="mt-5 container">
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
          itemClass="carousel-item-padding-40-px mt-5"
          >
          {
            this.state.products.map((data,index)=>{
              return(
               <div className=" col-lg-4 col-md-6 mt-5 col-sm-12 px-3">
                   <div className="card p-3 text-center feature_product_card">

                        <img className="feature_product_img" src={img_baseurl+data.feature_image}></img>
                        <h2 className="feature_procduct_title">{data.name}</h2>
                        <h2 className="feature_product_price mt-3"><NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} /></h2>
                        <h4 className="feature_product_des mt-3">{data.p_short_description}</h4>

                        <button onClick={()=>{window.open(`/Product/${data.id}`)}} className="feature_product_btn">SHOP NOW</button>
                   </div>
               </div>
              )
            })
          }
        </Carousel>
        </div>
        <div className="row popProductRow">

        </div>
      </div>
    );
  }
}
