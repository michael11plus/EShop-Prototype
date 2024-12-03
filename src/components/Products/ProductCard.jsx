import React from 'react';
import '../../styles/card.css';
import { greenPowderImg } from '../../assets';
import { Col, Row } from 'react-bootstrap';

const ProductCard = ({
    name,
    type,
    grams,
    image,
    index
}) => {
    const [ isLoaded, setIsLoaded ] = React.useState(false);

    const imageLoaded = () => {
        setIsLoaded(true);
    };

    return(
        <Row className='card--product h-100 mb-3'>
            <Col xs={12} className='image-container'>
                <img width={'100%'} src={greenPowderImg} style={{display: isLoaded ? 'block' : 'none'}} onLoad={imageLoaded}/>
                { !isLoaded && <div className='lazy-loading'></div> } 
            </Col>
            <Col xs={12}>
                <p>{name}</p>
                <p>{type}</p>
                <p>{grams}</p>
            </Col>
            <Col className='d-flex justify-content-between'>
                <p>
                    2000 Kč
                </p>
                <button>
                    Do košíku
                </button>
            </Col>
        </Row>
    );
};

export default ProductCard;
