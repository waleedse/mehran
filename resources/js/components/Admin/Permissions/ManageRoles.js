import React, { Component } from 'react';
import Axios from 'axios';
import Swal from 'sweetalert2'
import { baseurl } from '../../Configs/apibase';
class ManageRoles extends Component {
    constructor(props) {
        super(props);
        this.state={
            roles:[],
            account:'',
            permission_list:[
                {name:'Dashboard',check:0},
                {name:'Retail Customers',check:0},
                {name:'Products',check:0},
                {name:'Distributors',check:0},
                {name:'Users & Permissions',check:0},
                {name:'Manage Reports',check:0},

            ],
            permission_id:0,
            role:'',
            add_role_display:false
        }
    }
    componentDidMount(){
        let senderdata = {
         
        }

        Axios.post('/api/get_roles',senderdata).then(res=>{
            console.log(res);
            this.setState({
                roles:res.data
            })
        })
    }
    setrole(e){
        this.setState({
            role:e.target.value
        })
    }
    load_permissions(){
        let senderdata ={
            role_id:this.state.role
        }

        Axios.post('/api/get_permissions_by_role_id',senderdata).then(res=>{
            let per = res.data[0];
            let perms = this.state.permission_list;
            perms[0].check = per.dashboard;
            perms[1].check = per.customers;
            perms[2].check = per.products;
            perms[3].check = per.distributors;
            perms[4].check = per.permissions;
            perms[5].check = per.reports;
            this.setState({
                permission_list:perms,
                permission_id:res.data[0].id
            })
        })
    }
    onselect_checkbox(ind){
        let temp_permissions = this.state.permission_list;

        temp_permissions.map((data,index)=>{
            if(ind == index){
                temp_permissions[index].check = !temp_permissions[index].check
            }
        })

        this.setState({
            permission_list:temp_permissions
        })
    }
    save_permissions(){
        if(this.state.permission_id != ''){
            let senderdata = {
                permission_id:this.state.permission_id,
                lists:this.state.permission_list
            }
            Axios.post('/api/update_permissions',senderdata).then(res=>{
                console.log(res);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Permissions Updated SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                    })
            })
        }else{
            Swal.fire({
                position: 'top-end',
                icon: 'error',
                title: 'Please Select Account first and show permissions',
                showConfirmButton: false,
                timer: 1500
                })
        }
        
    }
    manage_add_role_display(){
        this.setState({
            add_role_display: !this.state.add_role_display
        })
       }
    new_role(e){
        this.setState({
            new_role:e.target.value
        })
    }
    add_role(){
        let senderdata = {
            name:this.state.new_role
        }
        Axios.post(baseurl+'/api/add_role',senderdata).then(res=>{
            Swal.fire({
                icon: 'success',
                title: 'Role Added SuccessFully',
                showConfirmButton: false,
                timer: 1500
                })
            this.componentDidMount();
            this.manage_add_role_display();
        })
    }
    render() {
        return (
            <div>
                <div className="top_section_title_div">
                    <h2 className="section_title">Manage Roles</h2>
                </div>
                <div className="container " >
                <button onClick={this.manage_add_role_display.bind(this)} className="btn btn-success mt-3">{this.state.add_role_display? 'Close' : 'Add New Role'} </button>
                    {
                        this.state.add_role_display ? 
                        <div className="card content_card_div mt-4 mb-5">
                        <div className="row col-md-12">
                            <div class="form-group input_div col-md-6">
                                <label className="input_label" for="exampleInputEmail1">Role Name</label>
                                <input type="email" onChange={this.new_role.bind(this)} class="form-control " 
                                id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Role Name" />
                            </div>
                        </div>
                        <div className="submit_btn">
                            <button onClick={this.add_role.bind(this)} className="btn btn-success ml-3 mb-5">Add Role</button>
                        </div>
                        </div>
                        :null
                    }
                
                    <div className="card py-2 mt-2">
                    <div className=" row col mt-3">
                        <label className="col-sm-2 mt-3" style={{textAlign:'right',fontWeight:'bold'}}> Select Role</label> 
                            <select type="name" className="form-control col-sm-6 mt-2 " onChange={this.setrole.bind(this)}  >
                                <option value=''>--Select User Account--</option>
                                {
                                    this.state.roles.map((data,index)=>{
                                        return(
                                            <option value={data.id} key={index}>{data.name}</option>
                                        )
                                    })
                                }
                            </select>
                            <div className="row ml-3">
                            <button onClick={this.load_permissions.bind(this)} className="btn btn-info ml-3  mt-2">Show</button>    
                            <button onClick={this.save_permissions.bind(this)} className="btn btn-success ml-3 mt-2">Save</button>    

                            </div>
                    </div>
                    </div>
                    <table 
                              className="table table-light table-hover table-striped mt-5">
                                <thead>
                                    <tr  style={{fontWeight:'bold'}}>
                                        <td>Sr</td>
                                        <td>Permission Name</td>
                                        <td>Status</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.permission_list.map((data,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{data.name}</td>
                                                    <td><input onChange={this.onselect_checkbox.bind(this,index)} type="checkbox" checked = {data.check == 1}
                                                    ></input> </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                </div>
            </div>
        );
    }
}

export default ManageRoles;