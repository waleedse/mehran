import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl , img_baseurl} from '../../Configs/apibase'
import Swal from 'sweetalert2'

class AddSubCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            add_cat_display:false,
            categories:[],
            subcategories:[],
            cat_id:'',
            imageArray:[]
        }
        this.upcategory = this.upcategory.bind(this);
    }
    componentDidMount(){
        let senderdata = {
            
        }
        Axios.post(baseurl+'/api/get_allcategories',senderdata).then(res=>{
            this.setState({
                categories:res.data
            })
        }).catch(e=>{
            console.log(e);
        }) 
        Axios.post(baseurl+'/api/get_Subcategory',senderdata).then(res=>{
            this.setState({
                subcategories:res.data
            })
        }).catch(e=>{
            console.log(e);
        }) 
    }
   add_category(){
       if(this.state.name != '' && this.state.cat_id != '' && this.state.imageArray.length > 0){
        let senderdata = {
            name:this.state.name,
            cat_id:this.state.cat_id,
            files:this.state.imageArray
        }
        console.log(baseurl);
        Axios.post(baseurl+'/api/addSubcategory',senderdata).then(res=>{
            this.componentDidMount();
            Swal.fire({
                icon: 'success',
                title: "Sub-Category Added SuccessFully",
                showConfirmButton: false,
                timer: 1500
                })
        }).catch(e=>{
            console.log(e);
        })
       }else{
        Swal.fire({
            icon: 'error',
            title: "Please Enter All the Fields",
            showConfirmButton: false,
            timer: 1500
            })
       }
       
   }
   name(e){
       this.setState({
           name:e.target.value
       })
   }
   manage_add_cat_display(){
    this.setState({
        add_cat_display: !this.state.add_cat_display
    })
   }
   onchange_subcategory(val,id){
    let temp_arr = this.state.subcategories;
    temp_arr.map((data,index)=>{
        if(data.id == id){
            data.name = val;
        }
    })
    this.setState({
        subcategories:temp_arr
    })
   }
   onchange_category(val,id){
    let temp_arr = this.state.subcategories;
    temp_arr.map((data,index)=>{
        if(data.id == id){
            data.cat_id = val;
        }
    })
    this.setState({
        subcategories:temp_arr
    })
   }
   DeleteCategory(id,index){
    let senderdata={
      id:id
    }
    Axios.post(baseurl+'/api/delete_Subcategory',senderdata).then(res=>{
        
        var categories = this.state.subcategories;
        categories.splice(index,1);

        this.setState({
            subcategories:categories
        })
    });
   }
   upcategory(id,name,cat_id){
       let senderdata = {
           id:id,
           name:name,
           cat_id:cat_id,
           files:this.state.imageArray
       }
       console.log(senderdata);
       Axios.post(baseurl+'/api/update_Subcategory',senderdata).then(res=>{
           this.componentDidMount();
        Swal.fire({
            icon: 'success',
            title: "Sub-Category Updated SuccessFully",
            showConfirmButton: false,
            timer: 1500
            })
       })   
   }
   cat_id(e){
       this.setState({
           cat_id:e.target.value
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
            let img_arr = [];
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
    render() {
        return (
            <div id="addproducts"  >
                <div className="top_section_title_div">
                    <h2 className="section_title">Manage Sub Category</h2>
                </div>

                <div className="container">
                    <button onClick={this.manage_add_cat_display.bind(this)} className="btn btn-success mt-3">{this.state.add_cat_display? 'Close Add Sub Category' : 'Add Sub Category'} </button>
                    {
                        this.state.add_cat_display ? 
                        <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Category</label>
                                <select onChange={this.cat_id.bind(this)} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" >
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
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Sub Category Name</label>
                                <input type="email" onChange={this.name.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Value Image</label>
                                <input type="file" onChange={this.handleFileChange.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Value Image" />
                            </div>
                        </div>
                        <div className="submit_btn">
                            <button onClick={this.add_category.bind(this)} className="btn btn-success ml-3 mb-5">Add Category</button>
                        </div>
                        </div>
                        :null
                    }
                   <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>Id</th>
                                    <th>Image</th>
                                    <th>Category</th>
                                    <th>Sub Category</th>
                                    <th>Choose Image</th>
                                    <th colSpan="2">Actions</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.subcategories.map((data,index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{data.id}</td>
                                                <td><img style={{width:'60px',height:'60px'}}
                                                src={img_baseurl+data.image}></img></td>
                                                <td><select value={data.cat_id} onChange={(e)=>{this.onchange_category(e.target.value,data.id)}} type="email" class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" >
                                                    <option value="">Choose..</option>
                                                    {
                                                        this.state.categories.map((data,index)=>{
                                                            return(
                                                            <option key={index} value={data.id}>{data.name}</option>
                                                            )
                                                        })
                                                    }
                                                </select></td>
                                                <td><input onChange={(e)=>{this.onchange_subcategory(e.target.value,data.id)}} className="form-control" value={data.name}></input></td>
                                                <td> 
                                                    <input type="file" onChange={this.handleFileChange.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Value Image" />
                                                </td>
                                                <td><button onClick={this.upcategory.bind(this,data.id,data.name,data.cat_id)} className="btn btn-warning">Update</button></td>
                                                <td><button className="btn btn-light" onClick={this.DeleteCategory.bind(this,data.id,index)}> <i  style={{color:'red'}}  className="fas fa-trash-alt"></i>
                                                        </button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                   </div>
                </div>
            </div>
        );
    }
}

export default AddSubCategory;