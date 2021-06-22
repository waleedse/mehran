import React from 'react';
import AdminSidebar from './Admin/Admin_Sidebar';
import { Switch,BrowserRouter,Route} from 'react-router-dom';
// import Index from './Front/Index';
// import Products from './Front/Products/Products';
// import AboutUs from './Front/Aboutus';
// import Shop from './Front/Products/Shop';
// import Product from './Front/Products/Product';
// import CustomerAccount from './Front/User/CustomerAccount';
// import Cart from './Front/Products/Cart';
// import Checkout from './Front/Products/Checkout';
// import Faq from './Front/Pages/Faq';
// import PrivacyPolicy from './Front/Pages/PrivacyPolicy';
// import Termsandcon from './Front/Pages/TermsandConditions';
import AdminLogin from './Admin/Login';
import Orderdetails from './Front/User/Orderdetails';
// import Adminoderdetails from './Admin/Orders/Orderdetails';

import ForgotPassword from './Front/User/ForgotPassword';
import ResetPassword from './Front/User/ResetPassword';

import FrontIndex from './Front/Container/Index';
import DistributorIndex from './Front/Distributors/Index';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes:['/Products/:id','/Product/:id','/Aboutus',
            '/Shop','/faqs','/PrivacyPolicy','/TermsAndconditions',
            '/CustomerAccount','/Cart','/Checkout','/order-details',
            '/contact-us','/login/:redirect?','/signup'
        ],
        disRoutes:['/distributor','/distributor/Products/:id','/distributor/product/:id'
        ,'/distributor/cart','/distributor/login','/distributor/signup','/distributor/account',
        '/distributor/checkout','/distributor/order-details','/distributor/forgot-password',
        '/distributor/reset-password/:id'
        ]
        }
    }

  render(){
  return (
    <BrowserRouter  >
      <div className="main_div">
        <Switch>
          <Route  path="/adminpanel"  component={AdminSidebar}/>

          <Route  exact path="/"  component={FrontIndex}/>
          {
              this.state.routes.map((data,index)=>{
                  return(
                    <Route key={index} path={data}  component={FrontIndex}/>
                  )
              })
          }
            {
              this.state.disRoutes.map((data,index)=>{
                  return(
                    <Route key={index} path={data}  component={DistributorIndex}/>
                  )
              })
          }
          <Route  exact path="/forgot-password"  component={ForgotPassword}/>
          <Route  exact path="/reset-password/:id"  component={ResetPassword}/>

          <Route  exact path="/AdminLogin"  component={AdminLogin}/>


        </Switch>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
