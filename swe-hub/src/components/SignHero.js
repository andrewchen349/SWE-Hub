import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jobs from '../assets/morejob.json';

function SignHero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col className="text-left her" md={11} sm={12}>
                        <h4 className="display-5 font-weight-bolder">{Jobs.length} Companies Hiring</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default SignHero;