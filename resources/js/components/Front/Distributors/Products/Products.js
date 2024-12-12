import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../../Configs/apibase';
import { round } from 'lodash';
import {connect} from 'react-redux'
import NumberFormat from 'react-number-format';
class Products extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            CategoryName:'',
            sub_cat_image:'',
            loading:false
        }
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        setTimeout(()=>{

            let senderdata = {
                id:this.props.match.params.id,
                distributor_id:this.props.user.dis,
                dis_token:window.localStorage.getItem('distoken')
            }
            console.log(this.props);
            Axios.post(baseurl+'/api/get_dis_products_by_sub_cat',senderdata).then(res=>{
                console.log(res);
                this.setState({
                    products:res.data
                })
            })
            console.log(senderdata);
             Axios.post(baseurl+'/api/get_category_by_sub_cat_id',senderdata).then(res=>{

                this.setState({
                    CategoryName:res.data[0].name,
                    sub_cat_image:res.data[0].image
                })
            })
            this.setState({
                loading:false
            })
        },10)

    }
    render() {

        return (
            <div>
                <img className="sub_cat_img" src={img_baseurl+this.state.sub_cat_image}></img>
                <div className="products_page mb-5">
                <h1  className="title-text products_head text-center mb-4 mt-3 py-4">Sink into the sheer premium comfort of our exceptional range of mattresses</h1>

                    {/* <h1 className="title-text text-center mb-4">{this.state.CategoryName}</h1> */}
                    {/* <h2 className="page_title text-center">Products</h2> */}
                    {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                        <>
                        {
                         this.state.products.length == 0 ?
                                <div className="container mt-5 no_data">
                                    <img src={img_baseurl+"sorry.png"}></img>
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
                        </>
                    }


                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.distributor
    }
}
export default connect(mapStateToProps)(Products);
