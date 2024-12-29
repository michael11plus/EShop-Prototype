import React from 'react';
import { Col, Container, Row } from "react-bootstrap";

const CartProgressBar = () => {
    return(
        <div className='d-flex align-items-center border' style={{height: '80px'}}>
            <div className='d-flex align-items-center me-5' style={{height: '40px'}} xs={1}>
                <div className='d-flex align-items-center justify-content-center me-2 bg-black' style={{width: '40px', height: '40px', borderRadius: '50%', border: 'solid 1px', color: 'white'}}>1</div>
                Košík
            </div>
            <div className='d-flex align-items-center me-5' style={{height: '40px'}} xs={2}>
                <div className='d-flex align-items-center justify-content-center me-2' style={{width: '40px', height: '40px', borderRadius: '50%', border: 'solid 1px'}}>2</div>
                Doprava a platba
            </div>
            <div className='d-flex align-items-center' style={{height: '40px'}} xs={2}>
                <div className='d-flex align-items-center justify-content-center me-2' style={{width: '40px', height: '40px', borderRadius: '50%', border: 'solid 1px'}}>3</div>
                Dodací údaje
            </div>
        </div>
    );
};

export default CartProgressBar;