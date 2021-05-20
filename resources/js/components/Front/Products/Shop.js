import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../Configs/apibase';
import Navbar from '../NavBar'
import NumberFormat from 'react-number-format';
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
                <Navbar></Navbar>
                <div className="products_page container">
                    <h2 className="page_title">Our Products</h2>
                    <div className="row"> 
                        {
            this.state.products.map((data,index)=>{
              return(
                       <a className="ml-auto mr-auto " href={"/Product/"+data.id}> <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div className="popProductCard text-center">
                            {/* <div className=" redCircle  ">
                                <h3 className="pt-4 text-white">28%</h3>
                                <p className="text-white paraText">OFF</p>
                            </div> */}

                            <img className="popImage" src={img_baseurl+data.images[0].image}></img>
                            <h1 className=" text-bold featureItemText pt-2">{data.name}</h1>
                            <div className="row priceRow">
                                <div className="col-6">
                                {/* <div className="priceCancelText text-secondary">Rs 4000</div> */}
                                </div>
                                <div className="col-6">
                                <div className="priceText"><NumberFormat value={data.cheep_varient.price} displayType={'text'} thousandSeparator={true} prefix={'Rs '} renderText={value => <div>{value}</div>} /></div>
                                </div>
                            </div>
                            </div>
                        </div></a>
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