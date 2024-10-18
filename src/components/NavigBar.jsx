import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/styles.css';

const NavigBar = () => {
    return(
        <Navbar bg="transparent" className='navigbar' expand="lg">
            <Container>
                <Navbar.Brand href="#HomePage">k - time</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>o nás</p></Link>
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>produkty</p></Link>
                        <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>kontakt</p></Link>
                        <Button variant='secondary'>nakupuj!</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigBar;