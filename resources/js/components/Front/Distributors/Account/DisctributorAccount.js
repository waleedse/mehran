import React, { Component } from 'react';
import Navbar from '../Dis_Navbar'
import {Tab,Tabs} from 'react-bootstrap'
import {connect} from 'react-redux'
import {img_baseurl} from '../../../Configs/apibase'
import Swal from 'sweetalert2'
import Orders from './Orders'
import Profile from './Profile'
class CustomerAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            active:1,
            loading:true
        }
    }
    componentDidMount(){
        this.setState({
            loading:true
        })
        setTimeout(()=>{
            if(this.props.distributor.d_islogin){
                this.setState({
                    name:this.props.distributor.name,
                    loading:false
                })
            }else{
                Swal.fire({
                    icon: 'error',
                    title: 'Sorry You Are not logged in Please Login.',
                    showConfirmButton: false,
                    timer: 1500
                    })
                this.props.history.push('/distributor/login');
            }
            
        },2000)
    }
    active(id){
        this.setState({
            active:id
        })
    }
    logout(){
        window.localStorage.setItem('distoken','null');
        window.location.reload();
      }
    render() {
        return (

            <div >
                <Navbar></Navbar>
                {
                    
                   this.state.loading ? 
                   <div id="displayspinner" style={{ display: 'block', marginLeft: '45%', marginTop: '10%' }}>
                            <div className="spinner-border text-info ml-2 spinner_format"  role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    :<> 
                    <div className="products_page container">
                    <h2 className="page_title">Account</h2>
                </div>
                <div className="container padding-bottom-3x mb-2 mt-3">
                    <div className="row">
                        <div className="col-lg-4">
                            <aside className="user-info-wrapper">
                                <div className="user-cover" style={{backgroundImage:"url('https://bootdey.com/img/Content/bg1.jpg')"}}>
                                    <div className="info-label" data-toggle="tooltip" title="" data-original-title="You currently have 290 Reward Points to spend"><i className="icon-medal"></i>{this.props.distributor.loyaltypoints} Loyalty points</div>
                                </div>
                                <div className="user-info">
                                    <div className="user-avatar">
                                        <a className="edit-avatar" href="#"></a><img src={img_baseurl+this.props.distributor.image} alt="User"/></div>
                                    <div className="user-data">
                                        <h4>{this.state.name}</h4><span></span>
                                    </div>
                                </div>
                            </aside>
                            <nav className="list-group">
                                <a onClick={this.active.bind(this,1)} className={this.state.active == 1 ? "list-group-item with-badge active" : "list-group-item with-badge"} href="#"><i className=" fa fa-th"></i>Orders<span className="badge badge-primary badge-pill"></span></a>
                                <a onClick={this.active.bind(this,2)} className={this.state.active == 2 ? "list-group-item with-badge active" : "list-group-item with-badge"} href="#"><i className="fa fa-user"></i>Profile</a>
                                <a onClick={this.logout.bind(this)} className={this.state.active == 3 ? "list-group-item with-badge active" : "list-group-item with-badge"}  href="#"><i className="fas fa-sign-out-alt"></i>Log Out</a>
                                {/* <a className="list-group-item with-badge active" href="#"><i className="fa fa-heart"></i>Wishlist<span className="badge badge-primary badge-pill">3</span></a> */}
                                {/* <a className="list-group-item with-badge" href="#"><i className="fa fa-tag"></i>My Tickets<span className="badge badge-primary badge-pill">4</span></a> */}
                            </nav>
                        </div>
                        <div className="col-lg-8">
                            <div className="padding-top-2x mt-2 hidden-lg-up"></div>
                                {
                                    this.state.active == 1 ? 
                                    <Orders {...this.props}></Orders>
                                    :null
                                }
                                 {
                                    this.state.active == 2 ? 
                                    <Profile></Profile>
                                    :null
                                }
                                {
                                    this.state.active == 3 ? 
                                    <h1>Orders</h1>
                                    :null
                                }
                            <hr className="mb-4"/>
                        </div>
                    </div>
                </div>
                </>
                }
               
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    return {
        distributor:state.distributor
    }
  }

export default connect(mapStateToProps)(CustomerAccount);