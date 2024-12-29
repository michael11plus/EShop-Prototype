import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../styles/reusable.css'
import '../../styles/shopping-cart.css'
import { Cart, CartProgressBar } from '../index.js';

const ShoppingCart = () => {
    return(
        <Container fluid className='shopping-cart d-flex justify-content-center section' style={{border: 'solid red'}}>
            <Row className='base-width border'>
                <CartProgressBar />
                <Cart />
            </Row>
        </Container>
    );
};

export default ShoppingCart;