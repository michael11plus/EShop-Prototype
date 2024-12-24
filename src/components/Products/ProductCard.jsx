import React from 'react';
import '../../styles/card.css';
import { greenPowderImg, shoppingCart } from '../../assets';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductCard = ({
    _id,
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
        <Link style={{textDecoration: "none", border: "solid red 2px !important"}} to={`/products/${_id}`} >
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
                    <h6>{name}</h6>
                    {/* <h6>weight: {grams}</h6> */}
                </Col>
                <Col xs={12}>
                    <h6>
                        2000 Kč
                    </h6>
                </Col>
                <Col xs={12} className="m-0 p-3">
                    <button className="button--white d-flex align-items-center justify-content-center">
                        Do košíku
                        <img src={shoppingCart} className={`ps-2 icon--32px`} alt="do košíku" />
                    </button>
                </Col>
            </Row>
        </Link>
    );
};

export default ProductCard;
