import React, { Component } from 'react';
import {connect} from 'react-redux'
import Axios from 'axios'
import {baseurl} from '../../../Configs/apibase'
import Swal from 'sweetalert2'
class Myaccount extends Component {
    constructor(props) {
        super(props);
        this.state={
            loading:true,
            name:'',
            imageArray:[],
            fname:'',
            lname:'',
            company:'',
            phone:'',
            address:'',
            country:'',
            city:'',

        }
    }
    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading:false,
                name:this.props.user.name,
                phone:this.props.user.phone,
                company:this.props.user.company,
                address:this.props.user.address,
                fname:this.props.user.fname,
                lname:this.props.user.lname,
                country:this.props.user.country,
                city:this.props.user.city
            })
        },2000)
    }
    fname(e){
        this.setState({
            fname:e.target.value
        })
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
    company(e){
        this.setState({
            company:e.target.value
        })
    }
    address(e){
        this.setState({
            address:e.target.value
        })
    }
    city(e){
        this.setState({
            city:e.target.value
        })
    }
    country(e){
        this.setState({
            country:e.target.value
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
        if(this.state.fname != '' && this.state.lname != '' && this.state.phone != '' && 
        this.state.country != '' && this.state.city != '' && this.state.address != '' ){
            let senderdata = {
                files:this.state.imageArray,
                fname:this.state.fname,
                id:this.props.user.dis,
                lname:this.state.lname,
                country:this.state.country,
                city:this.state.city,
                phone:this.state.phone,
                address:this.state.address,
                company:this.state.company
            }
            console.log(senderdata);
            Axios.post(baseurl+'/api/update_distributor_profile', senderdata)
                .then(response => {
                    console.log(response);
                 Swal.fire({
                    icon: 'success',
                    title: 'User Updated Successfully.',
                    showConfirmButton: false,
                    timer: 1500
                    })
                    window.location.reload();
            });
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Error - Please fill all the active fields.',
                showConfirmButton: false,
                timer: 1500
                })
        }
        
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
                      <label className="loginLabel">Distributor ID </label>

                      <input
                        type="text"
                        value={this.props.user.dis || ""}
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
                        placeholder="Enter your Last name"
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
                      <label className="loginLabel">Phone </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        value={this.state.phone || ""}
                        className="loginInputField form-control"
                        onChange={this.phone.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Address </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        value={this.state.address || ""}
                        className="loginInputField form-control"
                        onChange={this.address.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">Company </label>

                      <input
                        type="text"
                        placeholder="Enter your Company"
                        value={this.state.company || ""}
                        className="loginInputField form-control"
                        onChange={this.company.bind(this)}
                      ></input>
                    </div>
                    <div className="loginInputDiv">
                      <label className="loginLabel">country </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        value={this.state.country || ""}
                        className="loginInputField form-control"
                        onChange={this.country.bind(this)}
                      ></input>
                    </div> <div className="loginInputDiv">
                      <label className="loginLabel">city </label>

                      <input
                        type="text"
                        placeholder="Enter your Email"
                        value={this.state.city || ""}
                        className="loginInputField form-control"
                        onChange={this.city.bind(this)}
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
        user:state.distributor
    }
  }
export default connect(mapStateToProps)(Myaccount);