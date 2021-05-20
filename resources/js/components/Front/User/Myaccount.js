import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import {baseurl} from '../../Configs/apibase'
import Swal from 'sweetalert2'
class Myaccount extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true,
            fname:'',
            imageArray:[],
            lname:'',
            phone:'',
            address:'',
        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false,
                fname:this.props.user.fname,
                lname:this.props.user.lname,
                phone:this.props.user.phone,
                address:this.props.user.address
            })
        },2000)
    }
    lname(e){
        this.setState({
            lname:e.target.value
        })
    }
    phone(e){
        this.setState({
            phone:e.target.value
        })
    }
    address(e){
        this.setState({
            address:e.target.value
        })
    }
    fname(e){
        this.setState({
            fname:e.target.value
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
            files:this.state.imageArray,
            fname:this.state.fname,
            id:this.props.user.cid,
            lname:this.state.lname,
            phone:this.state.phone,
            address:this.state.address
        }
        console.log(senderdata);
        Axios.post(baseurl+'/api/update_cutomer_profile', senderdata)
            .then(response => {
                console.log(response);
                if(response.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: 'User Updated Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                        })
                        window.location.reload();
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                        })
                       
                }
             
        });
        this.setState({
            body: ''
        });
    }
    render() {
        return (
            <div>
               {
                   this.state.loading ? 
                   <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :
                    <div className="mt-5">
                        <h1 className="title_text">Profile</h1>
                    <hr></hr>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Customer ID </label>

                      <input
                        type="text"
                        value={this.props.user.cid || ""}
                        placeholder="Enter your Email"
                        className="loginInputField form-control"
                        disabled
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">First Name </label>

                      <input
                        type="text"
                        placeholder="Enter your First Name"
                        value={this.state.fname || ""}
                        className="loginInputField form-control"
                        onChange={this.fname.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Last Name </label>

                      <input
                        type="text"
                        placeholder="Enter your Last Name"
                        value={this.state.lname || ""}
                        className="loginInputField form-control"
                        onChange={this.lname.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Email </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        value={this.props.user.email || ""}
                        className="loginInputField form-control"
                        disabled
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Phone</label>

                      <input
                        type="text"
                        placeholder="Enter your Phone"
                        value={this.state.phone || ""}
                        className="loginInputField form-control"
                        onChange={this.phone.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Address</label>

                      <input
                        type="text"
                        placeholder="Enter your Address"
                        value={this.state.address || ""}
                        className="loginInputField form-control"
                        onChange={this.address.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Profile Image </label>

                      <input
                        type="file"
                        placeholder="Enter your Email"
                        
                        className="loginInputField form-control"
                        onChange={this.handleFileChange.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <button onClick={this.handleSubmit.bind(this)} className="btn btn-outline-success mt-2">Update</button>
                    </div>
                    </div>
               }
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        user:state.user
    }
  }
export default connect(mapStateToProps)(Myaccount);