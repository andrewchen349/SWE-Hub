import React from 'react';
import {
  withStyles,
  makeStyles,
} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../actions/authActions";
import classnames from "classnames";

const CssTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: '#749AC5',
      },
    },
  },
})(TextField);

const st = {
  marginTop: 10,
  width: 270
  
}

class InputFormRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  // componentDidMount() {
  //   // If logged in and user navigates to Register page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
  
  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = e => {
      e.preventDefault();
  };
  
  
  
  render(){
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
      };
    this.props.registerUser(newUser, this.props.history); 
  
    const { errors } = this.state;
    
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 ctReg">
          <Container fluid={true}>
              <Row className="justify-content-center">
                  <Col className="text-left-center ml-3" md={9} sm={12}>
                      <h3 className="justify-content-center subheading signWel ml-3">Welcome!</h3>
                      <form onSubmit={this.onSubmit} noValidate>
                          <div>
                              <CssTextField
                                  className={classnames("", {
                                    invalid: errors.email
                                  })}
                                  style={st}
                                  onChange={this.onChange}
                                  label="Email"
                                  value={this.state.email}
                                  variant="outlined"
                                  // id="custom-css-outlined-input"
                                  id="email"
                              />
                          </div>
                          <div>
                              <CssTextField
                                  className={classnames("", {
                                    invalid: errors.name
                                  })}
                                  style={st}
                                  onChange={this.onChange}
                                  value={this.state.name}
                                  label="Username"
                                  variant="outlined"
                                  // id="custom-css-outlined-input"
                                  id="name"
                              />
                          </div>
                          <div>
                              <CssTextField
                                  className={classnames("", {
                                    invalid: errors.password
                                  })}
                                  style={st}
                                  label="Password"
                                  value={this.state.password}
                                  onChange={this.onChange}
                                  variant="outlined"
                                  // id="custom-css-outlined-input"
                                  id="password"
                              />
                          </div>
                          <button type="submit" className="login"> Sign Up</button>
                      </form> 
                      {/* <button className="login"> Sign Up</button> */}
                  </Col>
              </Row>
          </Container>
      </Jumbotron>
    );
  }
}
InputFormRegister.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(InputFormRegister));