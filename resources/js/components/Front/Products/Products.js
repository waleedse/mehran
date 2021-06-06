import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import { round } from 'lodash';
import NumberFormat from 'react-number-format';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            CategoryName:'',
            sub_cat_image:''
        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/get_products_by_sub_cat',senderdata).then(res=>{
            this.setState({
                products:res.data
            })
        })
         Axios.post(baseurl+'/api/get_category_by_sub_cat_id',senderdata).then(res=>{
            this.setState({
                CategoryName:res.data[0].name,
                sub_cat_image:res.data[0].image
            })
        })

    }
    render() {

        return (
            <div>
                <img className="sub_cat_img" src={img_baseurl+this.state.sub_cat_image}></img>
                <div className="products_page  mb-5">

                    <h1  className="title-text products_head text-center mb-4 mt-3 py-4">Most Comfortable Choice for your Bedroom</h1>
                    {/* <h2 className="page_title text-center">Products</h2> */}

                    {
                         this.state.products.length == 0 ?
                                <div className="container mt-5 no_data">
                                    <img src={img_baseurl+"emptybox.png"}></img>
                                    <h5 classNam="text-center" >No Products Found</h5>
                                </div>
                        :null
                    }

                    <div className="row">
                        {

            this.state.products.map((data,index)=>{
              return(
                  <>
                     <div className="card product_tile_card product_tile_bg col-md-3" style={{backgroundImage:`url(${  data.images.length > 0 ? img_baseurl+data.images[0].image : '/images/noimage.png'})`}}>
                        <div className="text-center">
                            {
                                    data.cheep_varient.discount > 0 ?
                                    <div className=" redCircle  ">
                                    <h3 className="pt-2 text-white">{round(data.cheep_varient.discount / data.cheep_varient.original_price * 100)}%</h3>
                                    <p className="text-white paraText">OFF</p>
                                    </div>:
                                null
                            }
                            <h2 className="product_tile_title">{data.name}</h2>
                            <p className="text-light short_des">Comfortable and supportive. Our signature foam mattress.</p>
                            <div className="pricing_div">
                            <h2 className="product_tile_price"> <span>
                                <NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'FROM Rs. '} renderText={value => <div>{value}</div>} />
                                </span>
                                </h2>

                             <a  href={"/Product/"+data.id}>
                                   <button className="btn btn_shopnow">Shop Now</button>
                            </a>
                            </div>
                        </div>

                    </div>

                  </>

                        )
                        })
                    }
{/*
<a className="ml-auto mr-auto " href={"/Product/"+data.id}>  <div className="col-lg-3 col-md-6 col-sm-12 ">

<div className="popProductCard text-center">



{
    data.images.length > 0 ?
    <img className="popImage" src={img_baseurl+data.images[0].image}></img>
    :<img className="popImage" src={"/images/noimage.png"}></img>
}
<h1 className=" text-bold featureItemText pt-2">{data.name}</h1>
<div className="row priceRow">
    <div className="col-6">
    <div className="priceCancelText text-secondary">{data.cheep_varient.discount > 0 ? data.cheep_varient.original_price : null}</div>
    </div>
    <div className="col-6">
    <div className="priceText"> <NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} /></div>
    </div>
</div>
</div>
</div></a>a */}
                    </div>

                </div>
                <div className="row">

                    </div>
            </div>
        );
    }
}

export default Products;
