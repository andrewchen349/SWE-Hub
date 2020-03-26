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

    const { errors } = this.state;
    return (
      <Jumbotron className="bg-transparent jumbotron-fluid p-0 ct">
          <Container fluid={true}>
              <Row className="justify-content-center">
                  <Col className="text-left-center ml-3" md={9} sm={12}>
                      <h3 className="justify-content-center subheading sign">SignIn</h3>
                      <form noValidate>
                          <div className="csstext">
                              <CssTextField
                                  className="mt-2"
                                  style={st}
                                  label="Username"
                                  variant="outlined"
                                  id="custom-css-outlined-input"
                              />
                          </div>
                          <div>
                              <CssTextField
                                  className="mt-2"
                                  style={st}
                                  label="Password"
                                  variant="outlined"
                                  id="custom-css-outlined-input"
                              />
                          </div>
                      </form> 
                      <button className="login"> Login</button>
                  </Col>
              </Row>
          </Container>
      </Jumbotron>
    );
  }
}
export default InputForm;
