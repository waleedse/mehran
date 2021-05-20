import Axios from 'axios';
import React, { Component } from 'react';
import Swal from 'sweetalert2'
class LoyalityPoints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            e_loyalty_points:0,
            e_rupees:0,
            s_loyalty_points:0,
            s_rupees:0,
            points:[],

        }
    }

    componentDidMount(){
        Axios.post('/api/get_loyalty_points').then(res=>{
            this.setState({
                e_loyalty_points:res.data[0].point,
                e_rupees:res.data[0].rs,
                s_loyalty_points:res.data[1].point,
                s_rupees:res.data[1].rs
            })
        })
    }
    e_loyalty_points(e){
        this.setState({
            e_loyalty_points:e.target.value
        })
    }
    e_rupees(e){
        this.setState({
            e_rupees:e.target.value
        })
    }
    
    s_loyalty_points(e){
        this.setState({
            s_loyalty_points:e.target.value
        })
    }
    s_rupees(e){
        this.setState({
            s_rupees:e.target.value
        })
    }
    e_save_points(){
        let senderdata = {
            id:1,
            point:this.state.e_loyalty_points,
            rs:this.state.e_rupees
        }
        Axios.post('/api/save_loyaltiy_point',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Loyalty Points Saves Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    s_save_points(){
        let senderdata = {
            id:2,
            point:this.state.s_loyalty_points,
            rs:this.state.s_rupees
        }
        Axios.post('/api/save_loyaltiy_point',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Loyalty Points Saves Successfully.',
                showConfirmButton: false,
                timer: 1500
                })
        })
    }
    render() {
        return (
            <div>
                 <div className="top_section_title_div">
                    <h2 className="section_title">Distributor Loyalty Points</h2>
                </div>
                <div className="mt-3">
                    <div className="card p-3">
                        <h2 className="heading_text_normal">Loyalty Points Earning</h2>
                        <div className="row">
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Enter loyalty points</label>
                                <input type="number" value={this.state.e_loyalty_points || 0} onChange={this.e_loyalty_points.bind(this)} class="form-control "  aria-describedby="emailHelp"  />
                            </div>
                            <div className="col-md-2 input_div">
                                <label className="input_label" for="exampleInputEmail1"></label>
                                <p className="mt-2 input_label text-center">Equals to</p>
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Enter Rupees</label>
                                <input type="number" value={this.state.e_rupees || 0} onChange={this.e_rupees.bind(this)} class="form-control "aria-describedby="emailHelp" />
                                
                            </div>
                            <div className=" form-group col-md-2 input_div ">
                                <br></br>
                                <button onClick={this.e_save_points.bind(this)} className="btn btn-success ml-2 mt-2">Save</button>
                            </div>
                        </div>
                    </div>
                    <div className="card p-3 mt-3">
                        <h2 className="heading_text_normal text-danger">Loyalty Points Spending</h2>
                        <div className="row">
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Enter loyalty points</label>
                                <input type="number" value={this.state.s_loyalty_points || 0} onChange={this.s_loyalty_points.bind(this)} class="form-control "  aria-describedby="emailHelp"  />
                            </div>
                            <div className="col-md-2 input_div">
                            <label className="input_label" for="exampleInputEmail1"></label>
                                <p className="mt-2 input_label text-center">Equals to</p>
                            </div>
                            <div class="form-group input_div col-md-4">
                                <label className="input_label" for="exampleInputEmail1">Enter Rupees</label>
                                <input type="number" value={this.state.s_rupees || 0} onChange={this.s_rupees.bind(this)} class="form-control "aria-describedby="emailHelp" />
                            </div>
                            <div className=" form-group col-md-2 input_div ">
                                <br></br>
                                <button onClick={this.s_save_points.bind(this)} className="btn btn-success ml-2 mt-2">Save</button>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}

export default LoyalityPoints;