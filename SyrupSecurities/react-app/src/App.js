import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Home from './Components/Homepage/Home';
import Navbar from './Components/Navbar/Navbar';
import Error404 from './Components/Error404/Error404';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';

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
        {/* <Route path="/antivirus" exact render={() => (
          <>
            <Error404 />
          </>
        )}/>
        <Route path="/vpn" exact render={() => (
          <>
            <Error404 />
          </>
        )}/>
        <Route path="/products" exact render={() => (
          <>
            <Error404 />
          </>
        )}/> */}
        <Route path="/signin" exact render={() => (
          <>
            <Signin />
          </>
        )} />
        <Route path="/signup" exact render={() => (
          <>
            <Register />
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
