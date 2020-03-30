import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

//Bootstrap
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from '../DashTable';
import {Line} from 'react-chartjs-2';

import Footer from '../Footer';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: '# of applications',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [1, 3, 5, 2, 1, 0, 2]
    }
  ]
};

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
        <div className="ml-4 row">
          <div className="column1 tb shadow p-3 mb-5 bg-white rounded">
          <div className="mb-4 ml-3">
            <h5 className="display-6 dc"><b>Still Need To Apply To These Companies:</b></h5>
          </div> 
            <Table />
          </div>
          <div className="column shadow p-3 mb-5 bg-white rounded"> 
            <div className="mb-4 ml-3">
              <h5 className="display-6 dc"><b># of Applications Completed</b></h5>
            </div> 
            <Line data={data} />
            <div className=" mt-5"> 
              <h6 className="display-6 text-center"><b>Want to See More Internships?</b></h6>
              <div className="text-center mt-3">
                <button
                onClick={event => window.location.href='/'}
                className="success"
              >
                Return Home
              </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom text-center">
            <button
              onClick={this.onLogoutClick}
              className="success"
            >
              Logout
            </button>
        </div>
        <Footer/>
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