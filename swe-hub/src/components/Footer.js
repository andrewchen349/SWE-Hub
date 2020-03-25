import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(){
    return(
        <footer className="mt-5">
            <Container className="justify-content-center" fluid={true}>
                <Row className="border-top justify-content-between p-3 text-center">
                    <Col className="p-0" md={3} sm={12}>
                        <p> Developed by
                            <a href="https://andrewchen349.github.io/"> Andrew Chen </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;