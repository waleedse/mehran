import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl, img_baseurl} from '../../Configs/apibase'
import Swal from 'sweetalert2'

class EditProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            varients: [],
            categories:[],
            sub_categories:[],
            all_subcategories:[],
            cat_id:'',
            sub_cat_id:'',
            imageArray:[],
            p_code:'',
            p_name:'',
            p_description:'',
            p_varient_type:'',
            p_quantity_type:'',
            p_enabled:true,
            p_featued:false,
            p_retail:true,
            p_distribution:true
        }
    }
    p_code(e){
        this.setState({
            p_code:e.target.value
        })
    }
    p_name(e){
        this.setState({
            p_name:e.target.value
        })
    }
    p_description(e){
        this.setState({
            p_description:e.target.value
        })
    }
    p_varient_type(e){
        this.setState({
            p_varient_type:e.target.value
        })
    }
    p_quantity_type(e){
        this.setState({
            p_quantity_type:e.target.value
        })
    }
    p_enabled(e){
        this.setState({
            p_enabled:!this.state.p_enabled
        })
    }
    p_featued(e){
        this.setState({
            p_featued:!this.state.p_featued
        })
    }
    p_retail(e){
        this.setState({
            p_retail:!this.state.p_retail
        })
    }
    p_distribution(e){
        this.setState({
            p_distribution:!this.state.p_distribution
        })
    }
    componentDidMount(){
        let senderdata = {

        }
        Axios.post(baseurl+'/api/get_allcategories',senderdata).then(res=>{
            this.setState({
                categories:res.data
            })
        })
        Axios.post(baseurl+'/api/get_Subcategory',senderdata).then(res=>{
            this.setState({
                all_subcategories:res.data
            })
        })
        let data = {
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/get_product_by_id',data).then(res=>{
            console.log(res);
            let dat = res.data;
            this.setState({
                p_code:dat.code,
                p_name:dat.name,
                p_description:dat.description,
                p_varient_type:dat.varient_type,
                p_quantity_type:dat.qty_type,
                p_enabled:dat.enabled,
                p_featued:dat.featuerd,
                p_retail:dat.retail,
                p_distribution:dat.distribution,
                cat_id:dat.cat_id,
                sub_cat_id:dat.sub_cat_id,
                imageArray:dat.images,
                varients:dat.varients,
            },function(){
                let arr = [];
            this.state.all_subcategories.map((data,index)=>{
                if(this.state.cat_id == data.cat_id){
                    arr.push(data);
                }
            })

            this.setState({
                sub_categories:arr
            })
            })
        })
    }
    //creating new varient
    add_varient() {
        let temp_arr = this.state.varients;
        temp_arr.push({id:0 , type: '', name: '', price: 0 })
        this.setState({
            varients: temp_arr
        })
    }
    update_varient(id,name,price){
        let senderdata={
            id:id,
            name:name,
            price:price,
            pid:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/update_varients',senderdata).then(res=>{
            console.log(res);
            Swal.fire({
                icon: 'success',
                title: 'Varient Updated Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
     DeleteVarient(id,i){
        let senderdata={
            id:id
        }
        Axios.post(baseurl+'/api/deletep_variations',senderdata).then(res=>{
           
            var varients = this.state.varients;
            varients.splice(i,1);
            this.setState({
                varients:varients
            })
        });
    }
    cat_id(e){
        this.setState({
            cat_id:e.target.value
        },function(){
            let arr = [];
            this.state.all_subcategories.map((data,index)=>{
                if(this.state.cat_id == data.cat_id){
                    arr.push(data);
                }
            })

            this.setState({
                sub_categories:arr
            })
        })
    }
    sub_cat_id(e){
        this.setState({
            sub_cat_id:e.target.value
        })
    }
    handleFileChange(e){
        if (e.target.files) {
            const files = Array.from(e.target.files);

            const promises = files.map(file => {
                return (new Promise((resolve, reject) => {
                    const reader = new FileReader();
                    reader.addEventListener('load', (ev) => {
                        resolve(ev.target.result);
                    });
                    reader.addEventListener('error', reject);
                    reader.readAsDataURL(file);
                }))
            });
            let img_arr = this.state.imageArray;
            Promise.all(promises).then(images => {
                img_arr.push(images);
                this.setState({
                    imageArray: img_arr
                },function(){
                    console.log(this.state.imageArray);
                })
            }, error => { console.error(error); });
           
        }
        
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.postData();
        const formData = new FormData();
        // this.state.imageArray.forEach((image_file) => {
        //     let file = [] image_file;
        // });
        // this.state.varients.forEach((varient) => {
        //     console.log(varient);
        //     formData.append('p_varients[]', varient);
        // });
        if(this.state.p_code != '' && this.state.p_name != '' && this.state.p_description
        != '' && this.state.p_varient_type != '' && this.state.p_quantity_type != '' && this.state.cat_id 
        != '' && this.state.sub_cat_id != '' && this.state.varients.length > 0){
let senderdata = {
            
            p_code:this.state.p_code,
            p_name: this.state.p_name,
            p_description: this.state.p_description,
           p_varient_type: this.state.p_varient_type,
            p_qnty_type: this.state.p_quantity_type,
            p_cat_id:this.state.cat_id,
           p_subcat_id: this.state.sub_cat_id,
           p_enabled:this.state.p_enabled,
            p_featuerd: this.state.p_featued,
            p_retail: this.state.p_retail,
            p_distribution:this.state.p_distribution,
            files:this.state.imageArray,
            varients:this.state.varients
        }
       
        Axios.post(baseurl+'/api/add_product', senderdata)
            .then(response => {
                console.log(response);
           
        });
        this.setState({
            body: ''
        });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Please enter all product details and atleast one product varients',
                showConfirmButton: false,
                timer: 1500
                })
        }
        
    }
    onchangevarient(val,ind){
        let temp_arr = this.state.varients;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.name = val
            }
        })

        this.setState({
            varients:temp_arr
        })
    }
    onchangeprice(val,ind){
        let temp_arr = this.state.varients;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.price = val
            }
        })

        this.setState({
            varients:temp_arr
        })
    }

    update_product(){
        let senderdata = {
            
            p_code:this.state.p_code,
            p_name: this.state.p_name,
            p_description: this.state.p_description,
           p_varient_type: this.state.p_varient_type,
            p_qnty_type: this.state.p_quantity_type,
            p_cat_id:this.state.cat_id,
           p_subcat_id: this.state.sub_cat_id,
           p_enabled:this.state.p_enabled,
            p_featuerd: this.state.p_featued,
            p_retail: this.state.p_retail,
            p_distribution:this.state.p_distribution,
            files:this.state.imageArray,
            varients:this.state.varients,
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/update_product',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Product Updated Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    render() {
        return (
            <div  id="addproducts"  >
                <div className="top_section_title_div">
                    <h2 className="section_title">Edit Product</h2>
                </div>
                <div className="container">
                    <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Product code</label>
                                <input value={this.state.p_code || ""} onChange={this.p_code.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product code" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Product Name</label>
                                <input value={this.state.p_name || ""} onChange={this.p_name.bind(this)}  type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" />
                            </div>


                        </div>

                        <div className="row col-md-12">
                            <div class="form-group input_div   col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Product Description</label>
                                <textarea value={this.state.p_description || ""} onChange={this.p_description.bind(this)}  type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Description" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Variant Type</label>
                                <select value={this.state.p_varient_type || ""} onChange={this.p_varient_type.bind(this)}  class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp"  >
                                    <option value="">Choose..</option>
                                    <option value="size">size</option>
                                    <option value="color">color</option>

                                </select>
                            </div>

                        </div>
                        <div className="row col-md-12">
                            <div class="form-group input_div   col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Quantity type</label>
                                <select value={this.state.p_quantity_type || ""} onChange={this.p_quantity_type.bind(this)}  type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Name" >
                                    <option value="">Choose..</option>
                                    <option value="Piece">Piece</option>
                                    <option value="KG">KG</option>
                                    <option value="Pack">Pack</option>

                                </select>
                            </div>

                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Category</label>
                                <select value={this.state.cat_id || ""} onChange={this.cat_id.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" >
                                    <option value="">Choose..</option>
                                    {
                                        this.state.categories.map((data,index)=>{
                                            return(
                                            <option key={index} value={data.id}>{data.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Sub Category</label>
                                    <select value={this.state.sub_cat_id || ""} onChange={this.sub_cat_id.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" >
                                    <option value="">Choose..</option>
                                    {
                                        this.state.sub_categories.map((data,index)=>{
                                            return(
                                            <option key={index} value={data.id}>{data.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>

                        <div className="form-group input_div col-md-4">
                            <label for="img" className="input_label" for="exampleInputEmail1">Product Images</label>
                            {/* <input  id="img" aria-describedby="emailHelp" onChange={this.handleFileChange.bind(this)} type="file"></input> */}
                        </div>
                        <div className="card container-fluid col-md-12">
                            <div className="row">
                            {
                                this.state.imageArray.map((data,index)=>{
                                    return(
                                        <div className="card img_card">
                                            <img src={img_baseurl+data.image}></img>
                                        </div>
                                    )
                                })
                            }
                            </div>
                          
                           </div>
                        <div className="card varient_card mt-3">
                            <div className="col-md-12 row">
                                <h4 className="col-md-8">Variants</h4>
                                <button onClick={this.add_varient.bind(this)} className="btn btn-info col-md-4" >Add Variant</button>
                            </div>
                            <div className="mt-3">
                                <table className="table table-stripped table-hover">
                                    <thead>
                                        <tr>
                                            {/* <th>Type</th> */}
                                            <th>variant</th>
                                            <th>Price</th>
                                            <th colspan="2">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            this.state.varients.map((data, index) => {
                                                return (
                                                    <tr>
                                                        {/* <td><select className="form-control" value={data.type}>
                                                            <option value="">Choose..</option>
                                                            <option value="size">size</option>
                                                            <option value="color">color</option>

                                                            </select></td> */}
                                                        <td><input onChange={(e)=>{this.onchangevarient(e.target.value,index)}}  className="form-control" value={data.name}></input></td>
                                                        <td><input type="number" onChange={(e)=>{this.onchangeprice(e.target.value,index)}} className="form-control" value={data.price}></input></td>
                                                        <td><button className="btn btn-light" onClick={this.update_varient.bind(this,data.id,data.name,data.price)}> <i  style={{color:'green'}}  className="fas fa-save"></i>
                                                        </button></td>
                                                        <td><button className="btn btn-light" onClick={this.DeleteVarient.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i>
                                                        </button></td>
                                                    </tr>
                                                )
                                            })
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className=" input_div col-md-5">
                            <div className="row">
                                <input onChange={this.p_enabled.bind(this)} checked={this.state.p_enabled == '1'}  type="checkbox" className="ml-3 mt-1"></input>
                                <h5 className="ml-2 input_label">Product Enabled</h5>
                            </div>
                            <p className="ml-3 ">Show Product on Website and Allow purchasing of product.</p>
                        </div>
                        <div className=" input_div col-md-5">
                            <div className="row">
                                <input onChange={this.p_featued.bind(this)} checked={this.state.p_featued == '1'}  type="checkbox" className="ml-3 mt-1"></input>
                                <h5 className="ml-2 input_label">Product Featured</h5>
                            </div>
                            <p className="ml-3 ">Show Product on Website Home Page.</p>
                        </div>
                        <div className=" input_div col-md-5">
                            <div className="row">
                                <input onChange={this.p_retail.bind(this)} checked={this.state.p_retail == '1'}  type="checkbox" className="ml-3 mt-1"></input>
                                <h5 className="ml-2 input_label">Retail</h5>
                            </div>
                            <p className="ml-3 ">Show Product for Retail Customers.</p>
                        </div>
                        <div className=" input_div col-md-5">
                            <div className="row">
                                <input onChange={this.p_distribution.bind(this)} checked={this.state.p_distribution == '1'}  type="checkbox" className="ml-3 mt-1"></input>
                                <h5 className="ml-2 input_label">Distribution</h5>
                            </div>
                            <p className="ml-3 ">Show Product for Distribution Customers.</p>
                        </div>
                        <div className="submit_btn">
                            <button onClick={this.update_product.bind(this)} className="btn btn-success ml-3 mb-5">Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditProduct;