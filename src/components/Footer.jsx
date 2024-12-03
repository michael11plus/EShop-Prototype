import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import '../styles/footer.css'

const Footer = () => {
    return(
        <footer className='footer px-3 px-xlg-0'>
            <Row className='base-width'>
                <Col sm={6}>
                    <p>info@developersfm.com</p>
                </Col>

                <Col sm={6} className='text-end'>
                    <p>© 2024 Developers F&M</p>
                </Col>
                
            </Row>
        </footer>
    );
};

export default Footer;