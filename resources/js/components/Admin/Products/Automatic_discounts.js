import Axios from 'axios';
import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2'
import AutomaticProductDiscounts from './AutomaticProductDiscounts'
class AutomaticDiscounts extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            discount:0,
            modal:false,
            startdate: new Date(),
            enddate: new Date(),
            discounts:[],
            edit_modal:false,
            editdata:[],
            status:'',
            p_d_modal:false,
            id:0
        }
    }
    componentDidMount(){
        let senderdata = {

        }
        Axios.post('/api/get_automatic_discount_codes').then(res=>{
            this.setState({
                discounts:res.data
            })
        })
    }
    name(e){
        this.setState({
            name:e.target.value
        })
    }
    discount(e){
        this.setState({
            discount:e.target.value
        })
    }
    show_modal(){
        this.setState ({
            modal:true
        })
    }
    hide_modal(){
        this.setState ({
            modal:false
        })
    }
    show_edit_modal(data){
        
        this.setState ({
            editdata:data,
            name:data.name,
            startdate: new Date(data.startdate),
            enddate: new Date(data.enddate),
            status:data.status
        },function(){
            console.log(data);
            this.setState({
                edit_modal:true,
            })
        })
    }
    hide_edit_modal(){
        this.setState ({
            edit_modal:false
        })
    }
    show_p_d_modal(id){
        
        this.setState ({
            id:id,
            p_d_modal:true,
        })
    }
    hide_p_d_modal(){
        this.setState ({
            p_d_modal:false
        })
    }
    startdate(e){
        this.setState({
            startdate:e
        })
    }
    enddate(e){
        this.setState({
            enddate:e
        })
    }
    create_discount(e){
        let senderdata = {
            name:this.state.name,
            startdate:this.state.startdate.getFullYear()+'/'+(parseInt(this.state.startdate.getMonth())+1)+'/'+this.state.startdate.getDate(),
            enddate:this.state.enddate.getFullYear()+'/'+(parseInt(this.state.enddate.getMonth())+1)+'/'+this.state.enddate.getDate(),

        }
        console.log(senderdata);
        Axios.post('/api/create_automatic_discount_codes',senderdata).then(res=>{
            this.componentDidMount();
            this.setState({
                modal:false
            })
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        })
    }
    status(e){
        this.setState({
            status:e.target.value
        })
    }
    update_discount(e){
        let senderdata = {
            name:this.state.name,
            startdate:this.state.startdate.getFullYear()+'/'+(parseInt(this.state.startdate.getMonth())+1)+'/'+this.state.startdate.getDate(),
            enddate:this.state.enddate.getFullYear()+'/'+(parseInt(this.state.enddate.getMonth())+1)+'/'+this.state.enddate.getDate(),
            id:this.state.editdata.id,
            status:this.state.status
        }
        console.log(senderdata);
        Axios.post('/api/update_automatic_discount_codes',senderdata).then(res=>{
            this.componentDidMount();
            this.setState({
                edit_modal:false
            })
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                    })
            }
        })
    }
    render() {
        return (
            <div className="container">
                <div className="p-3">
                    <button style={{float:'right'}} onClick={this.show_modal.bind(this)} className="btn btn-success">Create Automatic Discount Code</button>
                </div>
                <div className="p-4">
                <table className="  table table-hover table-bordered table-striped mt-4">
                    <thead>
                        <tr>
                            <th>Sr</th>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th colSpan="2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.discounts.map((data,index)=>{
                                return(
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.startdate}</td>
                                        <td>{data.enddate}</td>
                                        <td>{data.status == 1 ? 'Enabled' : 'Disabled'}</td>                                      
                                        <td><button onClick={this.show_edit_modal.bind(this,data)} className="btn btn-outline-warning"> <i  className="far fa-edit"> </i></button></td>
                                        <td><button onClick={this.show_p_d_modal.bind(this,data.id)} className="btn btn-outline-info"> <i  className="fas fa-sliders-h"> </i></button></td>

                                    </tr>
                                )
                            })
                        }
                        {
                                    this.state.discounts.length == 0 ? 
                                    <tr><td colSpan="7">No records founded</td></tr>:null
                                }
                    </tbody>
                </table>
                </div>
                <Modal
                    show={this.state.modal}
                    onHide={this.hide_modal.bind(this)}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Create Automatic Discount Code
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Name</label>
                                <input onChange={this.name.bind(this)} type="name" class="form-control "  aria-describedby="emailHelp"  />
                            </div>
                            {/* <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Discount</label>
                                <input onChange={this.discount.bind(this)} type="text" class="form-control "  aria-describedby="emailHelp"  />
                            </div> */}
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" >Start Date</label><br></br>
                                <DatePicker  selected={this.state.startdate} className="form-control" aria-describedby="emailHelp"  onChange={this.startdate.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" >End Date</label><br></br>
                                <DatePicker   selected={this.state.enddate} className="form-control" aria-describedby="emailHelp"  onChange={this.enddate.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <button onClick={this.create_discount.bind(this)} className="btn btn-success">Create</button>
                            </div>
                    </Modal.Body>
                </Modal>

                <Modal
                    show={this.state.edit_modal}
                    onHide={this.hide_edit_modal.bind(this)}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Edit Automatic Discount Code
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Name</label>
                                <input value={this.state.name} onChange={this.name.bind(this)} type="name" class="form-control "  aria-describedby="emailHelp"  />
                            </div>
                            {/* <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Discount</label>
                                <input value={this.state.discount} onChange={this.discount.bind(this)} type="text" class="form-control "  aria-describedby="emailHelp"  />
                            </div> */}
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" >Start Date</label><br></br>
                                <DatePicker dateFormat="dd/MM/yyyy" selected={this.state.startdate} className="form-control" aria-describedby="emailHelp"  onChange={this.startdate.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" >End Date</label><br></br>
                                <DatePicker dateFormat="dd/MM/yyyy"  selected={this.state.enddate} className="form-control" aria-describedby="emailHelp"  onChange={this.enddate.bind(this)} />
                            </div>
                            <div class="form-group input_div col-md-6   ">
                                <label className="input_label" for="exampleInputEmail1">Status</label>
                                <select value={this.state.status || ""} onChange={this.status.bind(this)} type="email" class="form-control " 
                                 aria-describedby="emailHelp" placeholder="Product code" >
                                     <option value={1}>Active</option>
                                     <option value={0}>Disable</option>
                                 </select>
                            </div>
                            <div class="form-group input_div col-md-6">
                                <button onClick={this.update_discount.bind(this)} className="btn btn-success">Update</button>
                            </div>
                    </Modal.Body>
                </Modal>
                <Modal
                    show={this.state.p_d_modal}
                    onHide={this.hide_p_d_modal.bind(this)}
                    size="lg"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Add Discount on Products
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <AutomaticProductDiscounts {...this.props} id={this.state.id}></AutomaticProductDiscounts>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default AutomaticDiscounts;