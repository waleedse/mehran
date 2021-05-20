import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import Footer from '../LandingComponents/Footer'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import NumberFormat from 'react-number-format';
import { v1 as uuidv1 } from 'uuid';
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
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            product:[],
            allproducts:[],
            active_image:'',
            qty:1,
            price:0,
            cus_id:this.props.user.cid,
            varient_id:0,
            product_id:0,
            CategoryName:'',
            product_values:[],
            p_discount:0,
            discount_id:0,
            original_price:0
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/get_product_enabled_by_id',senderdata).then(res=>{
            if(res.data.length > 0){
                this.setState({
                product:res.data[0],
                allproducts:res.data,
                price:res.data[0].cheep_varient.price,
                product_id:res.data[0].id,
                varient_id:res.data[0].cheep_varient.id,
                p_discount:res.data[0].cheep_varient.discount,
                discount_id:res.data[0].cheep_varient.discount_id,
                original_price:res.data[0].cheep_varient.original_price
            },function(){
            })
            }
            
        })
            Axios.post(baseurl+'/api/get_product_values',senderdata).then(res=>{
            this.setState({
                product_values:res.data
            })
        })
       
    }
    onchange_varient(e){
        let varients = this.state.product.varients;
        varients.map(data=>{
            if(e.target.value == data.id){
                this.setState({
                    varient_id:e.target.value,
                    price:data.price,
                    p_discount:data.discount,
                    discount_id:data.discount_id,
                    original_price:data.original_price
                })
            }
        })
    }
    change_image(name){
        this.setState({
            active_image:name
        })
    }
    onchange_qty(e){
        if(e.target.value > 0){
            this.setState({
                qty:e.target.value,
                price:e.target.value * this.state.product.cheep_varient.price
            })
        }
       
    }
    increase_qty(){
            let qty = parseInt(this.state.qty) + 1;
            this.setState({
                qty:qty,
                price:qty * this.state.product.cheep_varient.price
            })
    }
    decrease_qty(){
        let qty = parseInt(this.state.qty) - 1;
        if(qty > 0){
            this.setState({
                qty:qty,
                price:qty * this.state.product.cheep_varient.price
            })
        }
        
    }
    add_product_in_cart(){
        let cart_cookie_id = window.localStorage.getItem('cart_cookie_id');
        if(cart_cookie_id == null){
            window.localStorage.setItem('cart_cookie_id',uuidv1())
        }
        cart_cookie_id = window.localStorage.getItem('cart_cookie_id');
        let senderdata={
            product_id:this.state.product_id,
            cus_id:this.props.user.cid,
            qty:this.state.qty,
            price:this.state.price,
            varient_id:this.state.varient_id,
            cart_cookie_id:cart_cookie_id,
            p_discount:this.state.p_discount,
            discount_id:this.state.discount_id,
            original_price:this.state.original_price
        }

        Axios.post(baseurl+'/api/add_product_in_cart',senderdata).then(res=>{
            console.log(res);
            
                Swal.fire({
                    icon: 'success',
                    title: 'Product Added to cart Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.props.history.push('/Cart');
            
        })
    }
    render() {
        return (
            <div id="#product_page">
                <Navbar></Navbar>
                <div className="products_page container mb-5">
                <h1 className="product-name-title-text text-center mb-5">{this.state.product.name}</h1>
                    <h2 className="page_title">Product Details</h2>
                    {
                        this.state.allproducts.length > 0 ?
                        <div className="card" style={{border:0}}>
                    <div className="container-fluid p-3">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                
                                <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={this.state.active_image == '' ? img_baseurl+this.state.product.images[0].image : img_baseurl+this.state.active_image} /></div>
                            
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    {
                                        this.state.product.images.map((data,index)=>{
                                            return(
                                                <li key={index} className="img_li"><a data-target="#pic-1"  data-toggle="tab"><img onClick={this.change_image.bind(this,data.image)} src={img_baseurl+data.image} /></a></li>

                                            )
                                        })
                                    }
                                </ul>
                                
                            </div>
                            <div className="details card  col-md-6" style={{paddingLeft:'30px'}}>
                            {/* <h3 className="product-title">{this.state.product.name}</h3> */}
                                {/* <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 reviews</span> 
                                </div> */}
                                <p className="product-description mt-5">{this.state.product.description}</p>
                                <h4 className="price mt-4"> <span>
                                <NumberFormat value={this.state.price} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                                    </span><span style={{fontSize:'12px'}} className="text-small priceCancelText text-secondary">       
                                    {this.state.p_discount > 0 ? ' ( '+ this.state.original_price +' )' : null}
                                    </span></h4>
                                {/* <p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p> */}
                                <div className="row mt-3">
                                <h5 className="sizes pt-2 ml-3">{this.state.product.varient_type}
                                </h5>
                                <select style={{height:'33px',width:'180px'}} onChange={this.onchange_varient.bind(this)} value={this.state.varient_id} className="form-control  ml-3">
                                        <option value="">Choose..</option>
                                        {
                                            this.state.product.varients.map((data,index)=>{
                                                return(
                                                    <option key={index} value={data.id}>{data.name}</option>
                                                )
                                            })
                                        }
                                   </select>
                                </div>
                                <div className="row mt-2">
                                    <h5 className="sizes pt-2 ml-3">Quantity
                                    </h5>
                                    <div className="row ml-3">
                                        <button style={{height:'33px',width:'30px'}} onClick={this.decrease_qty.bind(this)} className="btn btn-outline-light quantity_btn">-</button>
                                        <input style={{height:'33px',width:'150px'}} onChange={this.onchange_qty.bind(this)} type="number" value={this.state.qty} className="form-control   quantity_btn col-md-4"/>
                                        <button  style={{height:'33px',width:'30px'}} onClick={this.increase_qty.bind(this)} className="btn btn-outline-light quantity_btn">+</button>
                                    </div>
                                </div>
                                {/* <h5 className="colors">colors:
                                    <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                                    <span className="color green"></span>
                                    <span className="color blue"></span>
                                </h5> */}
                                <div className="action mb-2">
                                    <button onClick={this.add_product_in_cart.bind(this)} className="add-to-cart btn btn-default mt-5" type="button">add to cart</button>
                                    {/* <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :null
                    }
                {
                    this.state.product_values.length > 0 ?
                    <div>
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
            this.state.product_values.map((data,index)=>{
              return(
                        <div className="row feature-row mt-4">
                            <h1 className="col-lg-1 ml-5"></h1>
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <div className="featureValueBox text-center">
                                    <img className="ValueIcon " src={img_baseurl+data.image}></img>
                                    <h3 className="featureItemText mt-2">
                                   {data.name}
                                    </h3>
                                    <p className="subtext mb-1 ">{data.description}</p>
                                </div>
                            </div>
                        </div>
              )
            })
          }
        </Carousel>
                
                </div>
                :null
                }
                
                </div>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
  }
export default connect(mapStateToProps)(Products);