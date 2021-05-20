import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl} from '../../Configs/apibase'
class AddCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            add_cat_display:false,
            categories:[]
        }
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
    }
   add_category(){
       let senderdata = {
           name:this.state.name
       }
       console.log(baseurl);
       Axios.post(baseurl+'/api/addcategory',senderdata).then(res=>{
           this.componentDidMount();
       }).catch(e=>{
           console.log(e);
       })
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
   onchange_category(val,id){
    let temp_arr = this.state.categories;
    temp_arr.map((data,index)=>{
        if(data.id == id){
            data.name = val;
        }
    })
    this.setState({
        categories:temp_arr
    })
   }
   DeleteCategory(id,index){
    let senderdata={
      id:id
    }
    Axios.post(baseurl+'/api/delete_category',senderdata).then(res=>{
        
        var categories = this.state.categories;
        categories.splice(index,1);

        this.setState({
            categories:categories
        })

    });
   }
   upcategory(id,name){
       let senderdata = {
           id:id,
           name:name
       }

       Axios.post(baseurl+'/api/update_category',senderdata).then(res=>{

       })
   }
    render() {
        return (
            <div id="addproducts"  >
                <div className="top_section_title_div">
                    <h2 className="section_title">Manage Category</h2>
                </div>

                <div className="container">
                    <button onClick={this.manage_add_cat_display.bind(this)} className="btn btn-success mt-3">{this.state.add_cat_display? 'Close Add Category' : 'Add Category'} </button>
                    {
                        this.state.add_cat_display ? 
                        <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Category Name</label>
                                <input type="email" onChange={this.name.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Category Name" />
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
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th colSpan="2">Actions</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.categories.map((data,index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{data.id}</td>
                                                <td><input onChange={(e)=>{this.onchange_category(e.target.value,data.id)}} className="form-control" value={data.name}></input></td>
                                                <td><button onClick={this.upcategory.bind(this,data.id,data.name)} className="btn btn-warning">Update</button></td>
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

export default AddCategory;