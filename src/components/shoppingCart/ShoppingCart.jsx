import React, { useContext, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import '../../styles/reusable.css'
import '../../styles/shopping-cart.css'
import { Cart, CartProgressBar } from '../index.js';
import GlobalContext from "../../context/GlobalContext.jsx";

const ShoppingCart = () => {
    const { cart } = useContext(GlobalContext);
    const [sum, setSum] = useState(0);
    useEffect(() => {
        let sumOfProducts = 0;

        cart.forEach(element => {
           sumOfProducts = sumOfProducts + (element.count * element.price);
        });
        setSum(sumOfProducts);
    }, [cart]);
    
    
    return(
        <Container fluid className='shopping-cart d-flex justify-content-center section' style={{border: 'solid red'}}>
            <Row className='base-width border'>
                <CartProgressBar />
                <Cart sum={sum}/>
            </Row>
        </Container>
    );
};

export default ShoppingCart;