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
import { loginUser } from "../actions/authActions";
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

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
    width: 270
  },
}));

const st = {
    marginTop: 10,
    width: 270
}

class InputForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      errors: {}
    };
  }

  // componentDidMount() {
  //   // If logged in and user navigates to Login page, should redirect them to dashboard
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push("/dashboard");
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location.href = '/dashboard';
    }
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
      password: this.state.password,
    };
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
    this.props.loginUser(userData);
    const { errors } = this.state;
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 ct">
          <Container fluid={true}>
              <Row className="justify-content-center">
                  <Col className="text-left-center ml-3" md={9} sm={12}>
                      <h3 className="justify-content-center subheading sign">SignIn</h3>
                      <form onSubmit={this.onSubmit} noValidate>
                          <div className="csstext">
                              <CssTextField
                                  className={classnames("", {
                                    invalid: errors.email || errors.emailnotfound
                                  })}
                                  style={st}
                                  onChange={this.onChange}
                                  value={this.state.email}
                                  label="Email"
                                  variant="outlined"
                                  id="email"
                                  // id="custom-css-outlined-input"
                              />
                          </div>
                          <div>
                              <CssTextField
                                   className={classnames("", {
                                    invalid: errors.password || errors.passwordincorrect
                                  })}
                                  style={st}
                                  label="Password"
                                  onChange={this.onChange}
                                  value={this.state.password}
                                  variant="outlined"
                                  id="password"
                                  // id="custom-css-outlined-input"
                              />
                          </div>
                          <button type="submit" className="login"> Login</button>
                      </form> 
                      {/* <button type="submit" className="login"> Login</button> */}
                  </Col>
              </Row>
          </Container>
      </Jumbotron>
    );
  }
}
InputForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(InputForm);

