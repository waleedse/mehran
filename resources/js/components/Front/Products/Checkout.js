import Axios from 'axios';
import * as React from 'react';
import { baseurl} from '../../Configs/apibase';
import { connect } from 'react-redux'
import Swal from 'sweetalert2'
import Footer from '../LandingComponents/Footer'
import NumberFormat from 'react-number-format';
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
            cart_cookie_id : window.localStorage.getItem('cart_cookie_id'),
            cities:[],
            Shipping:0,
            discount:0,
            cart_totals:0,
            totals:0,
            discount_code:'',
            discount_error:'',
            master_totals:0,
            discount_id:0,
            discounts:0,
            loading:true,
            sub_cart_totals:0
        };

    }
    componentDidMount(){
        Axios.post('/api/get_cities').then(res=>{
            this.setState({
                cities:res.data
            })
        })
        setTimeout(()=>{
            let senderdata = {
                cart_cookie_id : window.localStorage.getItem('cart_cookie_id')
            }
            Axios.post(baseurl + '/api/get_cookie_session_cart', senderdata).then(res => {
                this.setState({
                    loading:false,
                    firstName:this.props.user.fname,
                    lastName:this.props.user.lname,
                    email:this.props.user.email,
                    address1:this.props.user.address,
                    phone:this.props.user.phone
                })
                if(res.data.cart){
                    if(res.data.cart.length > 0){
                        this.setState({
                            cart_totals: res.data.cart[0].cart_totals,
                            totals: res.data.cart[0].cart_totals,
                            master_totals:res.data.cart[0].cart_totals,
                            discount: res.data.cart[0].discounts,
                            sub_cart_totals:res.data.cart[0].sub_cart_totals
                        },function(){
                            this.setState({
                                loading:false
                            })
                        })
                    }else{
                        this.setState({
                            loading:false
                        })
                    }
                }else{
                    this.setState({
                        loading:false,
                        cart:[]
                    })
                }


            })
        },2000)
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
            Axios.post(baseurl+'/api/create_customer_order',this.state).then(res=>{
                if(res.data.status == 200){
                    Swal.fire({
                        icon: 'success',
                        title: 'Order Placed Successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.props.history.push('/CustomerAccount');
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: res.data.msg,
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
    city = (e) => {
        this.setState({
            city: e.target.value,
        },function(){
            let temp = this.state.cities;
            temp.map((data,index)=>{
                if(data.id == this.state.city){
                    this.setState({
                        Shipping:data.price,
                        totals:parseInt(data.price) + parseInt( this.state.master_totals)
                    })
                }
            })
        });
    };
    getCountry = (e) => {
        this.setState({
            country: e.target.value,
        });
    };
    discount_code(e){
        this.setState({
            discount_code:e.target.value
        })
    }
    validate_discount_code(){
        if(this.state.discount > 0){
            this.setState({
                discount_error:'Discount is already applied.'
            })
        }else{
        let senderdata ={
            code:this.state.discount_code
        }
        Axios.post('/api/check_discount_code',senderdata).then(res=>{
            if(res.data.status == 200){
                Swal.fire({
                    icon: 'success',
                    title: res.data.msg,
                    showConfirmButton: false,
                    timer: 1500
                })
                this.setState({
                    discount:parseInt(res.data.code.discount),
                    discount_id:res.data.code.id,
                    totals:parseInt(this.state.totals) - parseInt(res.data.code.discount),
                    master_totals:parseInt(this.state.master_totals) - parseInt(res.data.code.discount),
                })
            }else{
                this.setState({
                    discount_error:res.data.msg
                })
            }
        })
    }
    }
    render() {
        return (
            <div  >
                {/* <Navbar ref={this.childRef} {...this.props}></Navbar> */}

                <div className="container">
                <div classNameName="products_page ">
                    <h2 className="page_title mt-5">Check Out</h2>
                </div>
                {
                    this.state.loading ?
                        <div id="displayspinner" style={{ display: 'block', marginLeft: '48%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format mb-5"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        :
                            <>
<div className="row mb-5">
                    <div className="col-md-8 card p-3 checkOutBox  mt-3">
                        <h3 className="mb-3 text-bold title-text">Shipping address</h3>
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
                                    value={this.state.firstName || " "}
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
                                    value={this.state.lastName || " "}
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
                                value={this.state.email || " "}
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
                                value={this.state.phone || " "}
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
                                value={this.state.address1 || " "}
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
                                <div className=" col-md-4 mb-3">
                                <label htmlFor="city">
                                    City <span className="text-muted"></span>
                                </label>
                                <select
                                    type="text"
                                    className={
                                        this.state.errors["country"]
                                            ? "is-invalid form-control"
                                            : "form-control"
                                    }
                                    id="city"
                                    placeholder="City"
                                    onChange={this.city}
                                >
                                    <option value="">Choose..</option>
                                    {
                                        this.state.cities.map((data,index)=>{
                                            return(
                                                <option key={index} value={data.id}>{data.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            </div>
                            {/* <button  class="btn btn-primary btn-lg btn-block" type="submit">
                                Continue to checkout
                            </button> */}
                        </form>
                        <div className="col-md-3 mb-5"></div>
                    </div>
                    <div className="col-md-4 mt-3 row">

                    <div className="col-md-12 mt-1">
                                        <div className="ibox">
                                            <div className="ibox-title">
                                                <h5>Order Summary</h5>
                                            </div>
                                            <div className="ibox-content">
                                                <div>
                                                   Sub Total
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs. {this.state.cart_totals} </strong>
                                                    </span>
                                                </div>
                                                <div>
                                                    Discount
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs. {this.state.discount} </strong>
                                                    </span>
                                                </div>
                                                <div>
                                                    Shipping
                                                    <span className="font-bold" style={{float:'right'}}>
                                                    <strong>  Rs. {this.state.Shipping} </strong>
                                                    </span>
                                                </div><hr/>
                                                <div>

                                                    <span  >
                                                    Total
                                                    <strong>   </strong>
                                                    </span>
                                                    <h2  style={{float:'right'}} className="font-bold">
                                                    <NumberFormat value={this.state.totals} displayType={'text'} thousandSeparator={true} prefix={'Rs. '} renderText={value => <div>{value}</div>} />
                                                    </h2>
                                                </div>


                                                <hr/>
                                                {/* <span className="text-muted small">
                                                    *For United States, France and Germany applicable sales tax will be applied
                                                </span> */}
                                                <div className="m-t-sm">
                                                    <div className="btn-group  col-md-12">
                                                    <button onClick={this.onSubmit.bind(this)} className="btn btn-success btn-sm"> Place Order</button>
                                                    {/* <a href="#" className="btn btn-white btn-sm"> Cancel</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 ">
                                        <div className="ibox">
                                            <div className="ibox-title">
                                                <h5>Discount Code</h5>
                                            </div>
                                            <div className="ibox-content">

                                            <div class="form-group input_div col-md-12">
                                                    <label className="input_label" for="exampleInputEmail1">Discount Code </label>
                                                    <input onChange={this.discount_code.bind(this)}  type="email" class="form-control " aria-describedby="emailHelp"  />
                                            </div>


                                                <hr/>
                                                {
                                                    this.state.discount_error != "" ?
                                                    <p className="text-danger">{this.state.discount_error}</p>
                                                    :null
                                                }
                                                <div className="m-t-sm">
                                                    <div className="btn-group  col-md-12">
                                                    <button onClick={this.validate_discount_code.bind(this)} className="btn btn-info btn-sm"> Apply Discount Code</button>
                                                    {/* <a href="#" className="btn btn-white btn-sm"> Cancel</a> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                    </div>
                </div>
                            </>
                }

                </div>
            <Footer/>
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
