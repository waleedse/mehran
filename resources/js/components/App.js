import React from 'react';
import AdminSidebar from './Admin/Admin_Sidebar'
import { Switch,BrowserRouter,Route} from 'react-router-dom';
import Index from './Front/Index'
import Products from './Front/Products/Products'
import AboutUs from './Front/Aboutus'
import Shop from './Front/Products/Shop'
import Product from './Front/Products/Product'
import CustomerAccount from './Front/User/CustomerAccount';
import Cart from './Front/Products/Cart';
import Checkout from './Front/Products/Checkout';
import Faq from './Front/Pages/Faq'
import PrivacyPolicy from './Front/Pages/PrivacyPolicy'
import Termsandcon from './Front/Pages/TermsandConditions'
import AdminLogin from './Admin/Login'
import Orderdetails from './Front/User/Orderdetails'
import Adminoderdetails from './Admin/Orders/Orderdetails'
import Distributors from './Front/Distributors/landing';
import Dis_Products from './Front/Distributors/Products/Products'
import Dis_product from './Front/Distributors/Products/Product'
import Dis_Cart from './Front/Distributors/Products/Cart'
import Dis_login from './Front/Distributors/Auth/Login';
import Dis_signup from './Front/Distributors/Auth/SignUp';
import Dis_Account from './Front/Distributors/Account/DisctributorAccount'
import Dis_checkout from './Front/Distributors/Products/Checkout'
import Dis_Orderdeatils from './Front/Distributors/Account/OrderDeatils'
import ForgotPassword from './Front/User/ForgotPassword'
import ResetPassword from './Front/User/ResetPassword'
import Dis_ForgotPassword from './Front/Distributors/Auth/ForgotPassword'
import Dis_ResetPassword from './Front//Distributors/Auth/ResetPassword'
function App(props) {
  return (
    <BrowserRouter  >
      <div className="main_div">
        <Switch>
          <Route  path="/adminpanel"  component={AdminSidebar}/>
          <Route  exact path="/"  component={Index}/>
          <Route   path="/Products/:id"  component={Products}/>
          <Route   path="/Product/:id"  component={Product}/>
          <Route  exact path="/Aboutus"  component={AboutUs}/>
          <Route  exact path="/Shop"  component={Shop}/>
          <Route  exact path="/faqs"  component={Faq}/>
          <Route  exact path="/PrivacyPolicy"  component={PrivacyPolicy}/>
          <Route  exact path="/TermsAndconditions"  component={Termsandcon}/>
          <Route  exact path="/CustomerAccount"  component={CustomerAccount}/>
          <Route  exact path="/Cart"  component={Cart}/>
          <Route  exact path="/Checkout"  component={Checkout}/>
          <Route  exact path="/AdminLogin"  component={AdminLogin}/>
          <Route  exact path="/order-details"  component={Orderdetails}/>
          <Route  exact path="/distributor"  component={Distributors}/>
          <Route   path="/distributor/Products/:id"  component={Dis_Products}/>
          <Route   path="/distributor/product/:id"  component={Dis_product}/>
          <Route  exact path="/distributor/cart"  component={Dis_Cart}/>
          <Route  exact path="/distributor/login"  component={Dis_login}/>
          <Route  exact path="/distributor/signup"  component={Dis_signup}/>
          <Route  exact path="/distributor/account"  component={Dis_Account}/>
          <Route  exact path="/distributor/checkout"  component={Dis_checkout}/>
          <Route  exact path="/distributor/order-details"  component={Dis_Orderdeatils}/>
          <Route  exact path="/forgot-password"  component={ForgotPassword}/>
          <Route  exact path="/reset-password/:id"  component={ResetPassword}/>
          <Route  exact path="/distributor/forgot-password"  component={Dis_ForgotPassword}/>
          <Route  exact path="/distributor/reset-password/:id"  component={Dis_ResetPassword}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
