import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'
class Shipping extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cities:[]
        }
    }
    componentDidMount(){
        Axios.post('/api/get_cities').then(res=>{
            this.setState({
                cities:res.data
            })
        })
    }
    onchange_category(val,id){
     let temp_arr = this.state.cities;
     temp_arr.map((data,index)=>{
         if(data.id == id){
             data.price = val;
         }
     })
     this.setState({
         cities:temp_arr
     })
    }
   
    upcategory(id,price){
        let senderdata = {
            id:id,
            price:price
        }
 
        Axios.post('/api/update_city_price',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'City shipping price updated successfully',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    render() {
        return (
            <div id="addproducts"  >
                <div className="top_section_title_div">
                    <h2 className="section_title">Manage Shipping</h2>
                </div>

                <div className="container">
                   <div className="card content_card_div mt-4 mb-5">
                        <table className="table table-bordered table-hover">
                            <thead>
                                <tr>
                                    <th>Sr</th>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th colSpan="2">Actions</th>
                        
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.cities.map((data,index)=>{
                                        return(
                                            <tr>
                                                <td>{index+1}</td>
                                                <td>{data.id}</td>
                                                <td>{data.name}</td>
                                                <td><input onChange={(e)=>{this.onchange_category(e.target.value,data.id)}} className="form-control" value={data.price}></input></td>
                                                <td><button onClick={this.upcategory.bind(this,data.id,data.price)} className="btn btn-warning">Update</button></td>
                                                       
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

export default Shipping;