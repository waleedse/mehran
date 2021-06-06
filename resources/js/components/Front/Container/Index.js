import React, { Component } from 'react';
import Footer from '../LandingComponents/Footer';
import NavBar from '../NavBar';
import HeaderMobile from '../HeaderMobile';
import Products from '../Products/Products';
import AboutUs from '../Aboutus';
import Shop from '../Products/Shop';
import Product from '../Products/Product';
import CustomerAccount from '../User/CustomerAccount';
import Cart from '../Products/Cart';
import Checkout from '../Products/Checkout';
import Faq from '../Pages/Faq';
import PrivacyPolicy from '../Pages/PrivacyPolicy';
import Termsandcon from '../Pages/TermsandConditions';
import { Route } from 'react-router';
import HomeIndex from '../Index';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = { sideBar: false };
        console.log(this.props)
      }
      handleSideBar  ()  {
        this.setState(
          {
            sideBar: !this.state.sideBar,
          },

        );
      };
    render() {
        return (
            <div>
                <NavBar  handleSideBar={this.handleSideBar.bind(this)} ></NavBar>
                <HeaderMobile
                active={this.state.sideBar}
                closeHeader={this.handleSideBar.bind(this)}
                />
                <Route exact path="/" component={HomeIndex}></Route>
                <Route   exact path="/Product/:id"  component={Product}/>
                <Route   exact path="/Products/:id"  component={Products}/>
                <Route  exact path="/Aboutus"  component={AboutUs}/>
                <Route  exact path="/Shop"  component={Shop}/>
                <Route  exact path="/faqs"  component={Faq}/>
                <Route  exact path="/PrivacyPolicy"  component={PrivacyPolicy}/>
                <Route  exact path="/TermsAndconditions"  component={Termsandcon}/>
                <Route  exact path="/CustomerAccount"  component={CustomerAccount}/>
                <Route  exact path="/Cart"  component={Cart}/>
                <Route  exact path="/Checkout"  component={Checkout}/>
                <Footer></Footer>
            </div>
        );
    }
}

export default Index;
