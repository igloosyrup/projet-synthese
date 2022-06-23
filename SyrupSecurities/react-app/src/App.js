import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Homepage/Home';
import Error404 from './Components/Error404/Error404';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import AdminSignIn from './Components/Admin/AdminSignIn/AdminSignIn';
import Admin from './Components/Admin/Admin';
import CustomerList from './Components/Admin/CustomerList/CustomerList';
import Product from './Components/Product/Product';
import ProductList from './Components/Product/ProductList/ProductList';
import ProductAdd from './Components/Product/ProductAdd/ProductAdd';
import ProductModify from './Components/Admin/ProductModify/ProductModify';
import AdminProductList from './Components/Admin/AdminProductList/AdminProductList';
import CustomerProfile from './Components/Customer/CustomerProfile/CustomerProfile';
import ModifyProfile from './Components/Customer/ModifyProfile/ModifyProfile';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AboutUs from './Components/AboutUs/AboutUs';
import Antivirus from './Components/Antivirus/Antivirus';
import Vpn from './Components/Vpn/Vpn';


function App() {

  // TODO Cache the user credentials
  return (
    <Router>
      <Switch>
        <Route path="/" exact render={() => (
          <>
            <Home />
          </>
        )} />
        <Route path="/home" exact render={() => (
          <>
            <Home />
          </>
        )} />
        <Route path="/antivirus" exact render={() => (
          <>
            <Antivirus />
          </>
        )} />
        <Route path="/vpn" exact render={() => (
          <>
            <Vpn />
          </>
        )} />
        <Route path="/signin" exact render={() => (
          <>
            <Signin />
          </>
        )} />
        <Route path="/admin-signin" exact render={() => (
          <>
            <AdminSignIn />
          </>
        )} />
        <Route path="/admin" exact render={() => (
          <>
            <Admin />
          </>
        )} />
        <Route path="/admin-product-list" exact render={() => (
          <>
            <AdminProductList />
          </>
        )} />
        <Route path="/signup" exact render={() => (
          <>
            <Register />
          </>
        )} />
        <Route path="/customer-list" exact render={() => (
          <>
            <CustomerList />
          </>
        )} />
        <Route path="/customer/:id" exact render={() => (
          <>
            <CustomerProfile />
          </>
        )} />
        <Route path="/customer/modify/:id" exact render={() => (
          <>
            <ModifyProfile />
          </>
        )} />
        <Route path="/cart/:id" exact render={() => (
          <>
            <Cart />
          </>
        )} />
        <Route path="/add-product" exact render={() => (
          <>
            <ProductAdd />
          </>
        )} />
        <Route path="/product-list" exact render={() => (
          <>
            <ProductList />
          </>
        )} />
        <Route path="/product/:id" exact render={() => (
          <>
            <Product />
          </>
        )} />
        <Route path="/product-modify/:id" render={() => (
          <>
            <ProductModify />
          </>
        )} />
        <Route path="/contact-us" render={() => (
          <>
            <ContactUs />
          </>
        )} />
        <Route path="/about-us" render={() => (
          <>
            <AboutUs />
          </>
        )} />
        <Route path="/*" render={() => (
          <>
            <Error404 />
          </>
        )} />
      </Switch>
      <Footer />
    </Router>
  );
}


export default App;
