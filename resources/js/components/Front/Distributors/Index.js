import React, { Component } from 'react';
import Footer from '../LandingComponents/Footer';
import NavBar from './NavBar';
import Distributors from './landing';
import Dis_Products from './Products/Products';
import Dis_product from './Products/Product';
import Dis_Cart from './Products/Cart';
import Dis_login from './Auth/Login';
import Dis_signup from './Auth/SignUp';
import Dis_Account from './Account/DisctributorAccount';
import Dis_checkout from './Products/Checkout';
import Dis_Orderdeatils from './Account/OrderDeatils';
import Dis_ForgotPassword from './Auth/ForgotPassword';
import Dis_ResetPassword from './Auth/ResetPassword';
import { Route } from 'react-router';

class Index extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Route  exact path="/distributor"  component={Distributors}/>
                <Route  path="/distributor/Products/:id"  component={Dis_Products}/>
                <Route  path="/distributor/product/:id"  component={Dis_product}/>
                <Route  exact path="/distributor/cart"  component={Dis_Cart}/>
                <Route  exact path="/distributor/login"  component={Dis_login}/>
                <Route  exact path="/distributor/signup"  component={Dis_signup}/>
                <Route  exact path="/distributor/account"  component={Dis_Account}/>
                <Route  exact path="/distributor/checkout"  component={Dis_checkout}/>
                <Route  exact path="/distributor/order-details"  component={Dis_Orderdeatils}/>

                <Route  exact path="/distributor/forgot-password"  component={Dis_ForgotPassword}/>
                <Route  exact path="/distributor/reset-password/:id"  component={Dis_ResetPassword}/>
                <Footer></Footer>

            </div>
        );
    }
}

export default Index;
