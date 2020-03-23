import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignHero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center mt-5 pl-5">
                    <Col className="text-left mt-5 pl-3 " md={9} sm={12} >
                        <h3 className="justify-content-center subheading mt-5">Sign In</h3>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default SignHero;