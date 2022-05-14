import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
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
            <Error404 />
          </>
        )} />
        <Route path="/vpn" exact render={() => (
          <>
            <Error404 />
          </>
        )} />
        <Route path="/products" exact render={() => (
          <>
            <Error404 />
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
        <Route path="/product-modify/:id" render={() => (
          <>
            <ProductModify />
          </>
        )} />
        <Route path="/*" render={() => (
          <>
            <Error404 />
          </>
        )} />
      </Switch>
    </Router>
  );
}


export default App;
