import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomeHero(props){
    return(
        <Jumbotron className="bg-transparent jumbotron-fluid p-0 ">
            <Container fluid={true}>
                <Row className="justify-content-center py-5 pl-5">
                    <Col className="text-left pl-5" md={9} sm={12} >
                        <h2 className="display-4 font-weight-bolder justift-content-center"><span style={{color:'#749AC5'}}>SWE Hub</span></h2>
                    </Col>
                    < Col className="text-left pl-5 py-2" md={9} sm={12}>
                        { props.subTitle && <h4 className="display-6 font-weight-light">{props.subTitle}</h4> }
                        { props.text && <h4 className="display-6 font-weight-light">{props.text}</h4> }
                    </Col>
                    <Col className="text-left pl-5 py-2" md={9} sm={12}>
                        <button className='success'>Get Started</button>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}

export default HomeHero;
