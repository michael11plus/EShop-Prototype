import React from 'react';
import '../styles/reusable.css';
import '../styles/card.css';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const KratomTypeCard = ({ type, description, image, index, cardRefs, chooseType, canAnimate, cardVisible }) => {
    // const positionLeft = ['250px', '125px', '0'];
    // const positionTop = ['200px', '235px', '270px'];

    // const style = {
    //     textDecoration: 'none',
    //     position: 'absolute',
    //     height: '400px',
    //     width: '300px',
    //     border: 'solid',
    //     right: positionLeft[index],
    //     top: positionTop[index]
    // };


    return (
        <Link to={`/products/${type}`} className='card--kratom-type'>
            <Row>
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