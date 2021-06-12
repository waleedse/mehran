import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import NumberFormat from 'react-number-format';
import { round } from 'lodash';
class Shop extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[]
        }
    }
    componentDidMount(){
        let senderdata = {

        }
        Axios.post(baseurl+'/api/get_all_enabled_products').then(res=>{
            this.setState({
                products:res.data
            })
        })
    }
    render() {
        return (
            <div>
                <div className="products_page ">
                    <h2 className="page_title mt-5">Our Products</h2>
                    <div className="row product_margin">
                        {
            this.state.products.map((data,index)=>{
              return(
                <>
                <div className="card product_tile_card product_tile_bg col-md-3 mt-2" style={{backgroundImage:`url(${  data.images.length > 0 ? img_baseurl+data.images[0].image : '/images/noimage.png'})`}}>
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
                       <p className="text-light short_des">{data.p_short_description}</p>
                       <div className="pricing_div">
                       <h2 className="product_tile_price"> <span>
                           <NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'FROM Rs. '} renderText={value => <div>{value}</div>} />
                           </span>
                           </h2>

                        <a  href={"/distributor/product/"+data.id}>
                              <button className="btn btn_shopnow">Shop Now</button>
                       </a>
                       </div>
                   </div>

               </div>

             </>
                        )
                        })
                    }

                    </div>

                </div>
            </div>
        );
    }
}

export default Shop;
