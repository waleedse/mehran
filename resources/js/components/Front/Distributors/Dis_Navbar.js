import Axios from 'axios';
import React, { Component } from 'react';
import { baseurl } from '../../Configs/apibase';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import {connect} from 'react-redux'
import { Nav, Navbar , NavDropdown} from 'react-bootstrap';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            categories:[],
            s_name:'',
            s_username:'',
            s_email:'',
            s_password:'',
            l_username:'',
            l_password:'',
            islogin:false
        }
    }
    componentDidMount(){
        Axios.post(baseurl+'/api/get_cats_with_subs').then(res=>{
            this.setState({
                categories:res.data
            })
        })
        let senderdata = {
          token:window.localStorage.getItem('distoken')
        }
        console.log(senderdata);
        Axios.post(baseurl+'/api/distributor_check_auth',senderdata).then(res=>{
          console.log(res);
          if(res.data.status == 200){
            let distributor = {
              dis:res.data.distributor[0].id,
              name:res.data.distributor[0].fname + ' ' + res.data.distributor[0].lname,
              email:res.data.distributor[0].email,
              image:res.data.distributor[0].image,
              fname:res.data.distributor[0].fname,
              lname:res.data.distributor[0].lname,
              company:res.data.distributor[0].company,
              phone:res.data.distributor[0].phone,  
              address:res.data.distributor[0].address,
              city:res.data.distributor[0].address,
              country:res.data.distributor[0].country,
              loyaltypoints:res.data.distributor[0].loyaltypoints,
              d_islogin:true
            }
            this.props.changeUser(distributor);
            this.setState({
              islogin:true
            })
          }
        })
    }
    onclick_sub_cat(id){
        this.props.history.push('/distributor/Products/'+id);
    }
    loginModal = () => {
        this.props.history.push('/distributor/');
      };
      signUpModal = () => {
        this.setState({
          showSignUpModal: !this.state.showSignUpModal,
          showLoginModal: false,
        });
      };

    login_email(e){
      this.setState({
        l_username:e.target.value
      })
    }
    l_password(e){
      this.setState({
        l_password:e.target.value
      })
    }
    s_email(e){
      this.setState({
        s_email:e.target.value
      })
    }
    s_name(e){
      this.setState({
        s_name:e.target.value
      })
    }
    s_password(e){
      this.setState({
        s_password:e.target.value
      })
    }
    s_username(e){
      this.setState({
        s_username:e.target.value
      })
    }
    
    logout(){
      window.localStorage.setItem('distoken','null');
      window.location.reload();
    }
    render() {
        return (
            <div>
              <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand href="/"><img className="brand_img" style={{width:'100px' , height:'100px'}} src="/images/site_logo.png"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto ml-auto">
                  <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
    </li>
          {
              this.state.categories.map((data,index)=>{  
                  return(
                    <li key={index} class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {data.name}
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        {
                            data.subcategories.map((data,index)=>{
                                return(
                                <a key={index} href={`/distributor/Products/${data.id}`}  class="dropdown-item" >{data.name}</a>
                                )
                            })
                        }                        
                    </div>
                </li>
                  )
              })
          }
          <li class="nav-item ">
              <a class="nav-link" href="/Aboutus">About Us </a>
          </li>
          <li class="nav-item  login_box_cart">
              <a class="nav-link" href="/distributor/cart"><i className="fas fa-shopping-cart"></i> </a>
          </li>
                          {
          this.state.islogin ? 
          
            <li class="nav-item  login_box_user dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-user danger_text"></i>
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a   class="dropdown-item" >{this.props.distributor.name}</a>
            <a href="/distributor/account"  class="dropdown-item" >My Account</a>
            <hr></hr>
            <a  onClick={this.logout.bind(this)} class="dropdown-item" >Logout</a>
            </div>
              </li>
         
          :
          <li class="nav-item  login_box_user">
          <a href="/distributor/login"><button className="btn btn-outline-secondary loginbtn">Login</button></a>
          </li>
        }
                     </Nav>
                  {/* <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                      Dank memes
                    </Nav.Link>
                  </Nav> */}
                </Navbar.Collapse>
              </Navbar>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=>{
  return {
    changeUser:(distributor)=>{dispatch({type:'CHANGE_DISTRIBUTOR',payload:distributor})}
  }
}
const mapStateToProps = (state)=>{
  return {
    distributor:state.distributor
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(NavBar);