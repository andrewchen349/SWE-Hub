import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import Bootstrap Framework
import 'bootstrap/dist/css/bootstrap.min.css';

//Pages Imports
import Home from './pages/Home';
import Donation from './pages/Donation';
import Register from './pages/Register';
import Signin from './pages/SignIn';
import Forgot from './pages/ForgotPassword';

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
        <Router>
            <Container fluid={true}>
                <Navbar bg="transparent" expand="lg">
                    <Navbar.Toggle aria-controls="navbar-toggle"/>
                    <Navbar.Collapse id="navbar-toggle">
                        <Nav className="ml-auto">
                            <h5> <Link className="nav-link display-5 font-weight-semibold subheading" to="/">Home</Link></h5>
                            <h5> <Link className="nav-link display-5 font-weight-semibold subheading" to="/account">Account</Link></h5>
                            <h5> <Link className="nav-link display-5 font-weight-semibold heading" to="/support"><span style={{color:'#749AC5'}}>Donation</span></Link></h5>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Route path="/" exact render={() => <Home subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
                <Route path="/account" exact render={() => <Signin />} />
                <Route path="/support" exact render={() => <Donation />} />
                <Route path="/register" exact render={() => <Register />} />
                <Route path="/forgot" exact render={() => <Forgot />} />
            </Container>
        </Router>
    );
  }
}

export default App;
