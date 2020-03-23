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

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0 ctFor">
        <Container fluid={true}>
            <Row className="justify-content-center">
                <Col className="text-left0center ml-3" md={12} sm={15}>
                    <h3 className="justify-content-center subheading signFor">Password?</h3>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col className="text-left-center ml-3" md={9} sm={12}>
                    {/* <h3 className="justify-content-center subheading sign">Password?</h3> */}
                    <form className={classes.root} noValidate>
                        <div>
                            <CssTextField
                                className={classes.margin}
                                label="Email"
                                variant="outlined"
                                id="custom-css-outlined-input"
                            />
                        </div>
                    </form> 
                    <button className="loginFor">Recover</button>
                </Col>
            </Row>
        </Container>
    </Jumbotron>
  );
}
