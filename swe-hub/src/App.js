import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import Bootstrap Framework
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages Imports
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/SignIn';
import Forgot from './pages/ForgotPassword';
import Store from  './Store';
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";

//Other Imports
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/NavBar';
import Nav from 'react-bootstrap/Nav';

import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  Store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    Store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./account";
  }
}

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      title: 'SWE Hub',
      headerLinks:
      [
        { title: 'Home', path: "/"},
        { title: 'Account', path: '/account'},
        { title: 'Support', path: '/support'}
      ],
      home:{
        title: "SWE-Hub",
        subTitle: "The easiest way to find your dream software engineering internship.",
        text: "Start applying and jumpstart your career!"
      },
      account:{
        title: 'Welcome to SWE-Hub',
      },
      support:{
        title: 'Support me!'
      }
    }
  }

  render(){
    return(
      <Provider store={Store}>
        <Router>
            <Container fluid={true}>
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Toggle aria-controls="navbar-toggle"/>
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                            <h5> <Link className="nav-link display-5 font-weight-semibold subheading" to="/">Home</Link></h5>
                            <h5> <Link className="nav-link display-5 font-weight-semibold subheading" to="/account">Account</Link></h5>
                            <h5> <a className="nav-link display-5 font-weight-semibold heading" href='https://www.buymeacoffee.com/swehub' target='_blank'><span style={{color:'#749AC5'}}>Donation</span></a></h5>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/" exact render={() => <Home subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                <Route path="/account" exact render={() => <Signin />} />
                <Route path="/register" exact render={() => <Register />} />
                <Route path="/forgot" exact render={() => <Forgot />} />
                <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            </Container>
        </Router>
      </Provider>
    );
  }
}
export default App;
