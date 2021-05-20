import Axios from 'axios';
import React, { Component } from 'react';
import {baseurl , img_baseurl} from '../../Configs/apibase'
import Swal from 'sweetalert2'

class ProductValues extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            add_cat_display:false,
            values:[],
            description:'',
            imageArray:[],

        }
    }
    componentDidMount(){
        let senderdata = {
            id:this.props.match.params.id
        }
        Axios.post(baseurl+'/api/get_product_values',senderdata).then(res=>{
            this.setState({
                values:res.data
            })
        }).catch(e=>{
            console.log(e);
        }) 
    }
   name(e){
       this.setState({
           name:e.target.value
       })
   }
      description(e){
       this.setState({
           description:e.target.value
       })
   }
   
   manage_add_cat_display(){
    this.setState({
        add_cat_display: !this.state.add_cat_display
    })
   }
   onchange_name(val,id){
    let temp_arr = this.state.values;
    temp_arr.map((data,index)=>{
        if(data.id == id){
            data.name = val;
        }
    })
    this.setState({
        values:temp_arr
    })
   }
    onchange_description(val,id){
    let temp_arr = this.state.values;
    temp_arr.map((data,index)=>{
        if(data.id == id){
            data.description = val;
        }
    })
    this.setState({
        values:temp_arr
    })
   }
   DeleteCategory(id,index){
    let senderdata={
      id:id
    }
    Axios.post(baseurl+'/api/delete_product_values',senderdata).then(res=>{
        
        var values = this.state.values;
        values.splice(index,1);

        this.setState({
            values:values
        })

    });
   }
   upcategory(id,name,description){
       let senderdata = {
           id:id,
           name:name,
           description:description
       }

       Axios.post(baseurl+'/api/update_product_values',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Product Value Updated Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
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
        let senderdata = {
            name: this.state.name,
            files:this.state.imageArray,
            id:this.props.match.params.id,
            description:this.state.description
        }
        console.log(senderdata);
        Axios.post(baseurl+'/api/add_product_values', senderdata)
            .then(response => {
                this.componentDidMount();
                console.log(response);
             Swal.fire({
                icon: 'success',
                title: 'Product Value added Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
        });
        this.setState({
            body: ''
        });
    }
    render() {
        return (
            <div id="addproducts"  >
                <div className="top_section_title_div">
                    <h2 className="section_title">Product Keys</h2>
                </div>

                <div className="container">
                    <button onClick={this.manage_add_cat_display.bind(this)} className="btn btn-success mt-3">{this.state.add_cat_display? 'Close Add Value' : 'Add Value'} </button>
                    {
                        this.state.add_cat_display ? 
                        <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Value Name</label>
                                <input type="email" onChange={this.name.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Value Name" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Value Description</label>
                                <input type="email" onChange={this.description.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Value Description" />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Value Image</label>
                                <input type="file" onChange={this.handleFileChange.bind(this)} class="form-control " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Value Image" />
                            </div>
                        </div>
                        <div className="submit_btn">
                            <button onClick={this.handleSubmit.bind(this)} className="btn btn-success ml-3 mb-5">Add Value</button>
                        </div>
                        </div>
                        :null
                    }
                   <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>sr</th>
                                    <th>Image</th>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th colSpan="2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.values.map((data,index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td><img style={{width:'60px',height:'60px'}}
                                                src={img_baseurl+data.image}></img></td>
                                                <td>{data.id}</td>
                                                <td><input onChange={(e)=>{this.onchange_name(e.target.value,data.id)}} className="form-control" value={data.name}></input></td>
                                                <td><input onChange={(e)=>{this.onchange_description(e.target.value,data.id)}} className="form-control" value={data.description}></input></td>
                                                <td><button onClick={this.upcategory.bind(this,data.id,data.name,data.description)} className="btn btn-warning">Update</button></td>
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

export default ProductValues;