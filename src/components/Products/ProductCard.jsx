import React, { useContext, useEffect } from 'react';
import '../../styles/card.css';
import { greenPowderImg, shoppingCart } from '../../assets';
import { Col, Row} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';

const ProductCard = (item) => {
    const [ isLoaded, setIsLoaded ] = React.useState(false);
    const { addToCart, cart } = useContext(GlobalContext);
    const { _id, name } = item;

    const imageLoaded = () => {
        setIsLoaded(true);
    };

    useEffect(() => {
        console.log(cart);
    }, [cart]);

    return(
        <div style={{textDecoration: "none", border: "solid red 2px !important"}} >
            <Row className='card--product h-100 mb-3'>
                <Col xs={12} className={`image-container ${!isLoaded ? 'lazy-loading' : ''}`}>
                    <Link to={`/products/${_id}`}>
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
                    </Link>
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
                    {/* <Link to='/shopping-cart' className="button--white d-flex align-items-center justify-content-center" style={{textDecoration: 'none', contain: 'content'}}> */}
                    <button onClick={() => addToCart(item)} className="button--white" style={{maxWidth: '320px'}}>
                        Do košíku
                        <img src={shoppingCart} className={`ps-2 icon--32px`} alt="do košíku" />
                    </button>
                    {/* </Link> */}
                </Col>
            </Row>
        </div>
    );
};

export default ProductCard;
