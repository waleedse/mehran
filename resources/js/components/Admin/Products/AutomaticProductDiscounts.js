import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'
class AutomaticProductDiscounts extends Component {
    constructor(props) {
        super(props);
        this.state={
            products:[],
            varients:[],
            product_id:''
        }
    }
    componentDidMount(){
        
        Axios.post('/api/get_all_products').then(res=>{
            this.setState({
                products:res.data
            })
        })
    }
    set_product_id(e){
        this.setState({
            product_id:e.target.value
        },function(){
            this.get_varients_by_product_id();
        })
    }
    get_varients_by_product_id(){
        let senderdata = {
            discount_id:this.props.id,
            product_id:this.state.product_id
        }
        console.log(senderdata);

        Axios.post('/api/get_discount_product_variations',senderdata).then(res=>{
            this.setState({
                varients:res.data
            })
        })
    }
    update_varient(id,discount){
        let senderdata ={
            id:id,
            discount:discount
        }
        Axios.post('/api/update_discount_varients',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title:'Discount Varient Updated',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    onchangediscount(val,ind){
        let temp_arr = this.state.varients;
        temp_arr.map((data,index)=>{
            if(index == ind){
                data.discount = val
            }
        })

        this.setState({
            varients:temp_arr
        })
    }
    render() {
        return (
            <div>
                 {/* <div className="top_section_title_div">
                    <h2 className="section_title">Add Discount on Products</h2>
                </div> */}
                <div style={{marginLeft:'auto'}} className="container-fluid" >
                    <div className="card mt-3">
                        <div className="row py-3">
                            <h1 className="col-md-3"></h1>
                        <select className="form-control col-md-6" onChange={this.set_product_id.bind(this)} >
                        <option value="">--Select a product--</option>
                        {
                        this.state.products.map((data,index)=>{
                            return(
                            <option key={index} value={data.id}>{data.id} - {data.name}</option>
                            )
                        })
                    }
                    </select>
                        </div>
                        <div className="card col-md-11 ml-auto mr-auto mb-3  mt-3">
                            <div className="col-md-12 row">
                                <h4 className="col-md-8">Variants</h4>
                            </div>
                            <div className="mt-3 col-md-11">
                                <table className="table table-stripped table-hover">
                                    <thead>
                                        <tr>
                                            <th>variant</th>
                                            <th>Price</th>
                                            <th>Discount</th>
                                            <th>Discounted Price</th>
                                            <th colSpan="2" >Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>


                                        {
                                            this.state.varients.map((data, index) => {
                                                return (
                                                    <tr>
                                                        <td><input  disabled className="form-control" value={data.name}></input></td>
                                                        <td><input disabled type="number" className="form-control" value={data.price}></input></td>
                                                        <td><input onChange={(e)=>{this.onchangediscount(e.target.value,index)}} type="number" className="form-control" value={data.discount}></input></td>
                                                        <td><input  type="number" className="form-control" value={data.price-data.discount }></input></td>
                                                        <td><button onClick={this.update_varient.bind(this,data.id,data.discount)} className="btn btn-light" > <i  style={{color:'green'}}  className="fas fa-save"></i>
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
                </div>
            </div>
        );
    }
}

export default AutomaticProductDiscounts;