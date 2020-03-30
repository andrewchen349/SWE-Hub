import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Footer from '../Footer';
class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

    return (
      
      <div >
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center mt-4 ml-2">
                    <Col className="text-left">
                        <h4 className="display-5 font-weight-lighter"><b>Welcome back ,</b> {user.name.split(" ")[0]}<b>👋</b></h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
        <div className="debug ml-4 row">
          <div className="column"> 
            <p>Column1</p>
          </div>
          <div className="column"> <p>Column2</p></div>
        </div>
        <div className="bottom text-center">
            <button
              onClick={this.onLogoutClick}
              className="success"
            >
              Logout
            </button>
            <Footer/>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);