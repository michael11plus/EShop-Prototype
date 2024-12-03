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
            <Col xs={12} className={`image-container ${!isLoaded ? 'lazy-loading' : ''}`}>
                <img
                    alt='product card'
                    src={greenPowderImg}
                    width={'100%'}
                    style={{
                        display: isLoaded ? 'block' : 'none',
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'top -20px'
                    }} 
                    onLoad={imageLoaded}/>
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
