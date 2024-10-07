import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return(
        <footer className='footer'>
            <Container fluid>
                <Row>
                    <Col sm={6} className='text-center'>
                        <p>info@developersfm.com</p>
                    </Col>

                    <Col sm={6} className='text-center'>
                        <p>© 2024 Developers F&M</p>
                    </Col>
                    
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;