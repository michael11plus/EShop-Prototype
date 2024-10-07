import React from 'react';
import { Navbar, Nav, NavDropdown, Button, Container, Row, Col } from 'react-bootstrap';

const NavigBar = () => {
    return(
        <Navbar bg="light" variant="light" expand="lg">
            <Container>
                <Navbar.Brand href="#HomePage">K-Time</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="">O nás</Nav.Link>
                        <Nav.Link href="">Produkty</Nav.Link>
                        <Nav.Link href="">Kontakt</Nav.Link>
                    </Nav>
                    <Button variant="warning" className="ml-3">Nakupuj!</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigBar;