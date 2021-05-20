import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl, img_baseurl } from '../../../Configs/apibase';
import Navbar from '../Dis_Navbar';
import Footer from '../../LandingComponents/Footer';
import { round } from 'lodash';
import {connect} from 'react-redux'
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
                <Navbar></Navbar>
                <img className="sub_cat_img" src={img_baseurl+this.state.sub_cat_image}></img>
                <div className="products_page container mb-5">
                   
                    <h1 className="title-text text-center mb-4">{this.state.CategoryName}</h1>
                    <h2 className="page_title text-center">Products</h2>
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
                <a className="ml-auto mr-auto" href={"/distributor/product/"+data.id}>  <div className="col-lg-3 col-md-6 col-sm-12 ">
                            <div className="popProductCard text-center">
                                {
                                    data.cheep_varient.discount > 0 ?
                                    <div className=" redCircle  ">
                                    <h3 className="pt-2 text-white">{round(data.cheep_varient.discount / data.cheep_varient.original_price * 100)}%</h3>
                                    <p className="text-white paraText">OFF</p>
                                    </div>:
                                null
                             }
                             
                            
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
                                <div className="priceText">Rs {data.cheep_varient.price}</div>
                                </div>
                            </div>
                            </div>
                        </div></a>
                        )
                        })
                    }

                    </div>
                        </>
                    }
                    
               
                </div>
                <Footer />
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