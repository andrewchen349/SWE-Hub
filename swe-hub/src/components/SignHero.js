import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SignHero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0">
            <Container fluid={true}>
                <Row className="justify-content-center text-left ml-5 cp">
                    <Col className="text-left companies">
                        <h4 className="justify-content-center bolder ml-5">Companies Hiring</h4>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}
export default SignHero;