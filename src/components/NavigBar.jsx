import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const NavigBar = () => {
    return(
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#HomePage">K-Time</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>O nás</p></Link>
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>Produkty</p></Link>
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>Kontakt</p></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigBar;