import Axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ManageAdminAccounts extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'',
            username:'',
            password:'',
            role:'',
            admins:[]
        }
    }
    componentDidMount(){
        let senderdata = {
         
        }
        Axios.post('/api/get_admin_accounts',senderdata).then(res=>{
            console.log(res);
            this.setState({
                admins:res.data
            })
        })  
    }
    render() {
        return (
            <div>
                <div className="top_section_title_div">
                    <h2 className="section_title">Manage Admin Accounts</h2>
                </div> 
                <div className="container">
                        <div className="mt-3 ml-3 mb-3">
                          <Link to ={"/adminpanel/AddAdminAccount"}>  <button className="btn btn-success">Add Admin Account</button></Link>
                        </div>
                   
                    <table 
                              className="table table-light table-hover table-striped mt-5">
                                <thead>
                                    <tr  style={{fontWeight:'bold'}}>
                                        <td>Sr</td>
                                        <td>Name</td>
                                        <td>Email</td>
                                        <td>Role</td>
                                        <td>Status</td>
                                        <td>Actions</td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.state.admins.map((data,index)=>{
                                            return(
                                                <tr key={index}>
                                                    <td>{index+1}</td>
                                                    <td>{data.fname} {data.surname}</td>
                                                    <td>{data.email}</td>
                                                    <td>{data.role_id}</td>
                                                    <td>{data.status}</td>
                                                    <td><Link to={`/adminpanel/EditAdminAccount/${data.id}`}><button className="btn btn-warning"> <i style={{color:'#ffffff'}} className="far fa-edit"> </i></button></Link></td>
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

export default ManageAdminAccounts;