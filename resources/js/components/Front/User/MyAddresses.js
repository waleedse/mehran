import Axios from 'axios';
import * as React from 'react';
import { baseurl} from '../../Configs/apibase';
import Navbar from '../NavBar'
import { connect } from 'react-redux'
import Swal from 'sweetalert2'

class Checkout extends React.Component  {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            address1: "",
            address2: "",
            country: "",
            phone:"",
            errors: {},
            cus_id:0,
            city:'',
            cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
        };
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        if(this.props.user.c_islogin){
            this.setState({
                cus_id:this.props.user.cid
            },function(){
                
            let validity = this.checkValidity();
            if (validity != true) {
                return;
            }
            console.log(this.state);
            Axios.post(baseurl+'/api/create_customer_order',this.state).then(res=>{
                console.log(res);
                if(res.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Placed Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
            })
        }else{
            Swal.fire({
                icon: 'error',
                title: 'You are not Loged in.   Please Login.',
                showConfirmButton: false,
                timer: 1500
            })
        }
        
        
    };
    // validity
    checkValidity = () => {
        let errors = {};
        let formIsValid = true;
        const {
            firstName,
            lastName,
            email,
            userName,
            address1,
            country,
            phone,
            city,
        } = this.state;

        if (!firstName) {
            formIsValid = false;
            errors["firstName"] = "Valid first name is required.";
        }

        if (firstName !== "") {
            if (!firstName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["firstName"] = "Only letters";
            }
        }

        if (!lastName) {
            formIsValid = false;
            errors["lastName"] = "Valid last name is required.";
        }

        if (lastName !== "") {
            if (!lastName.match(/^[a-zA-Z]+$/)) {
                formIsValid = false;
                errors["lastName"] = "Only letters";
            }
        }
        if (!email) {
            formIsValid = false;
            errors["email"] = "Valid email is required.";
        }
        if (!phone) {
            formIsValid = false;
            errors["phone"] = "Valid phone is required.";
        }
        if (!city) {
            formIsValid = false;
            errors["city"] = "Valid city is required.";
        }
        if (!address1) {
            formIsValid = false;
            errors["address1"] = "Valid address is required.";
        }
        if (!country) {
            formIsValid = false;
            errors["country"] = "Valid country is required.";
        }
        this.setState({ errors: errors }, function () {
            console.log(this.state.errors);
        });
        return formIsValid;
    };

    // onChange fun for inputs
    getFirstName = (e) => {
        this.setState({
            firstName: e.target.value,
        });
    };
    getLastName = (e) => {
        this.setState({
            lastName: e.target.value,
        });
    };
    getUserName = (e) => {
        this.setState({
            userName: e.target.value,
        });
    };
    getEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };
    getphone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    };
    getAddress1 = (e) => {
        this.setState({
            address1: e.target.value,
        });
    };
    getAddress2 = (e) => {
        this.setState({
            address2: e.target.value,
        });
    };
    getCountry = (e) => {
        this.setState({
            country: e.target.value,
        });
    };
    render() {
        return (
            <div className="container" >
                
                <div >
               
                <div className="row ">
                    <h1 className="col-md-2"></h1>
                    <div className="col-md-8 card p-3 checkOutBox order-md-1">
                        <h3 className="mb-3 text-bold title-text">Billing address</h3>
                        <form
                            className="needs-validation"
                            onSubmit={this.onSubmit}
                            noValidate
                        >
                            <div className="row">
                                <div className="col-md-6 col-xm-6 mb-3">
                                    <label
                                        htmlFor="firstName"
                                        className={
                                            this.state.errors["firstName"] ? "text-danger" : ""
                                        }
                                    >
                                        First name
                  </label>
                                    <input
                                        type="text"
                                        className={
                                            this.state.errors["firstName"]
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                        id="firstName"
                                        placeholder="Enter first name"
                                        required
                                        onChange={this.getFirstName}
                                    />
                                    <div className="text-danger">
                                        <small>{this.state.errors["firstName"]}</small>
                                    </div>
                                </div>
                                <div className="col-md-6 col-xm-6 mb-3">
                                    <label
                                        htmlFor="lastName"
                                        className={
                                            this.state.errors["lastName"] ? "text-danger" : ""
                                        }
                                    >
                                        Last name
                  </label>
                                    <input
                                        type="text"
                                        className={
                                            this.state.errors["lastName"]
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                        id="lastName"
                                        placeholder="Enter last name"
                                        required
                                        onChange={this.getLastName}
                                    />
                                    <div className="text-danger">
                                        <small>{this.state.errors["lastName"]}</small>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="mb-3">
                                <label
                                    htmlFor="username"
                                    className={this.state.errors["userName"] ? "text-danger" : ""}
                                >
                                    Username
                </label>
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">@</span>
                                    </div>
                                    <input
                                        type="text"
                                        className={
                                            this.state.errors["lastName"]
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                        id="username"
                                        placeholder="Username"
                                        required
                                        onChange={this.getUserName}
                                    />
                                    <div className="text-danger ml-1">
                                        <small>{this.state.errors["userName"]}</small>
                                    </div>
                                </div>
                            </div> */}
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className={this.state.errors["email"] ? "text-danger" : ""}
                                >
                                    Email
                </label>
                                <input
                                    type="email"
                                    className={
                                        this.state.errors["email"]
                                            ? "is-invalid form-control"
                                            : "form-control"
                                    }
                                    id="email"
                                    placeholder="you@example.com"
                                    onChange={this.getEmail}
                                />
                                <div className="text-danger">
                                    <small>{this.state.errors["email"]}</small>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="email"
                                    className={this.state.errors["email"] ? "text-danger" : ""}
                                >
                                    Phone
                                        </label>
                                <input
                                    type="phone"
                                    className={
                                        this.state.errors["phone"]
                                            ? "is-invalid form-control"
                                            : "form-control"
                                    }
                                    id="phone"
                                    placeholder="phone"
                                    onChange={this.getphone}
                                />
                                <div className="text-danger">
                                    <small>{this.state.errors["email"]}</small>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label
                                    htmlFor="address"
                                    className={this.state.errors["address1"] ? "text-danger" : ""}
                                >
                                    Address
                </label>
                                <input
                                    type="text"
                                    className={
                                        this.state.errors["address1"]
                                            ? "is-invalid form-control"
                                            : "form-control"
                                    }
                                    id="address"
                                    placeholder="1234 Main St"
                                    required
                                    onChange={this.getAddress1}
                                />
                                <div className="text-danger">
                                    <small>{this.state.errors["address1"]}</small>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="address2">
                                    Address 2 <span className="text-muted">(Optional)</span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="address2"
                                    placeholder="Apartment or suite"
                                    onChange={this.getAddress2}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-8 mb-3">
                                    <label
                                        htmlFor="country"
                                        className={
                                            this.state.errors["country"] ? "text-danger" : ""
                                        }
                                    >
                                        Country
                  </label>
                                    <input
                                        type="text"
                                        className={
                                            this.state.errors["country"]
                                                ? "is-invalid form-control"
                                                : "form-control"
                                        }
                                        id="country"
                                        placeholder="eg. Pakistan" 
                                        onChange={this.getCountry}
                                    />
                                    <div className="text-danger ">
                                        <small>{this.state.errors["country"]}</small>
                                    </div>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="address2">
                                    City <span className="text-muted"></span>
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="city"
                                    placeholder="City"
                                    onChange={this.getAddress2}
                                />
                            </div>
                            </div>
                            <button  class="btn btn-primary btn-lg btn-block" type="submit">
                                Continue to checkout
                            </button>
                        </form>
                        <div className="col-md-3 mb-5"></div>
                    </div>
                </div>
                </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps)(Checkout);