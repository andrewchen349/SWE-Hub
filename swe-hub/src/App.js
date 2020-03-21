import React from 'react';
import logo from './logo.svg';
import './App.css';

//Import Bootstrap Framework
import 'bootstrap/dist/css/bootstrap.min.css';

//Main Imports
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
        subTitle: "The easiest way to find your next dream software engineering internships.",
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
                            <h5> <Link className="nav-link display-5 font-weight-semibold" to="/">Home</Link></h5>
                            <h5> <Link className="nav-link display-5 font-weight-semibold" to="/account">Account</Link></h5>
                            <h5> <Link className="nav-link display-5 font-weight-semibold" to="/support"><span style={{color:'#749AC5'}}>Donation</span></Link></h5>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Router>
    );
  }
}

export default App;
