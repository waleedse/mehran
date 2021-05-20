import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl,img_baseurl} from '../../Configs/apibase'
import {Link} from 'react-router-dom'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            search_string:''
        }
    }
    
    componentDidMount(){
        let senderdata={

        }
        Axios.post(baseurl+'/api/get_all_products',senderdata).then(res=>{
            this.setState({
                products:res.data
            })
        })
    }
    DeleteProduct(id,i){
        let senderdata={
            id:id
        }
        Axios.post(baseurl+'/api/deleteproduct',senderdata).then(res=>{
           
            var products = this.state.products;
            products.splice(i,1);
            this.setState({
                products:products
            })
        });
    }
    search(e){
        this.setState({
            search_string:e.target.value
        })
    }
    search_products(){
        let senderdata = {
            string:this.state.search_string
        }
        Axios.post('/api/search_product',senderdata).then(res=>{
            console.log(res.data);
            this.setState({
                products:res.data
            })
        })
    }
    render() {
        return (
            <div >
               <div className="top_section_title_div">
                    <h2 className="section_title">Products List</h2>
                </div> 

                <div className="container-fluid">
                <div className="card content_card_div mt-4 mb-5">
                        
                            <div class="form-group input_div col-md-12">
                                <div className="row mb-2">
                                    <div className="col-md-10">
                                        <input type="email" onChange={this.search.bind(this)} class="form-control ml-1 mt-2" 
                                        aria-describedby="emailHelp" placeholder="Search by Id, code, Name" />
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={this.search_products.bind(this)} className="btn btn-success ml-1 mt-2">Search</button>
                                    </div>
                                </div>
                            </div>
                       
                        </div>
                    <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-hover table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Image</th>
                                    <th>ID</th>
                                    <th>Product Code</th>
                                    <th>Name</th>
                                    <th>Variant Type</th>
                                    <th>Enabled</th>
                                    <th colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.products.map((data,index)=>{
                                        return(
                                            <tr key={index}>
                                                <td>{index+1}</td>
                                                <td><img style={{width:'60px',height:'60px'}}
                                                src={data.images.length > 0 ? img_baseurl+data.images[0].image :''}></img></td>
                                                <td>{data.id}</td>
                                                <td>{data.code}</td>
                                                <td>{data.name}</td>
                                                <td>{data.varient_type}</td>
                                                <td>{data.enabled == 1 ? 'Enabled' : 'Disabled'}</td>
                                                <td>
                                                    <MDBDropdown basic style={{left:'70px'}}>
                                                    <MDBDropdownToggle style={{padding:'2px'}}   color="light">
                                                       <li style={{fontSize:'20px',color:'#588da8',}} className="fas fa-bars"></li>
                                                    </MDBDropdownToggle>
                                                    <MDBDropdownMenu id="menu" >
                                                        <MDBDropdownItem><Link to={`/adminpanel/EditProduct/${data.id}`}>Update</Link></MDBDropdownItem>
                                                        <MDBDropdownItem><Link to={`/adminpanel/ProductValues/${data.id}`}>Product Keys</Link></MDBDropdownItem>
                                                        <MDBDropdownItem><Link to={`/adminpanel/ProductImages/${data.id}`}>Product Images</Link></MDBDropdownItem>

                                                        {/* <MDBDropdownItem onClick={this.DeleteProduct.bind(this,data.id,index)} className="text-danger">Delete</MDBDropdownItem> */}
                                                    </MDBDropdownMenu>
                                                    </MDBDropdown>
                                                </td>
                                                {/* <td><Link to={`/adminpanel/EditProduct/${data.id}`}><button className="btn btn-warning"> <i style={{color:'#ffffff'}} className="far fa-edit"> </i></button></Link></td>
                                                <td><button className="btn btn-light"> <i  style={{color:'red'}} onClick={this.DeleteProduct.bind(this,data.id,index)} className="fas fa-trash-alt"></i>
                                                        </button></td> */}
                                            </tr>
                                        )
                                    })
                                }
                                {
                                    this.state.products.length == 0 ? 
                                    <tr><td colSpan="8">No records founded</td></tr>:null
                                }
                            </tbody>
                        </table>
                    </div>
                </div>    
            </div>
        );
    }
}

export default ProductsList;