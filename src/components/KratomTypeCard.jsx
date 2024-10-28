import React from 'react';
import '../styles/reusable.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KratomTypeCard = ({ type, description, image }) => {
    return (
        <Link fluid className='card' style={{textDecoration: 'none'}}>
            <Row>
                <Col xs={12} className='card--image-container'>
                    <img src={image} alt='kratom-image' className='typecard-image'/>
                </Col>
                <Col xs={12}>
                    <h3>{type}</h3>
                </Col>
                <Col xs={12}>
                    <h6>{description}</h6>
                </Col>
            </Row>
        </Link>
    );
};

export default KratomTypeCard;