import React, { useState, useEffect, useMemo } from "react";
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { arrowDownOne, arrowLeft, greenPowderImg, shoppingCart } from '../../assets';
import axios from "axios";
import { SelectButton } from '../index.js'
import '../../styles/products.css'
import GlobalContext from "../../context/GlobalContext";



const ProductDetailed = () => {
    const { addToCart } = React.useContext(GlobalContext);
    const [ request, setRequest ] = useState({});
    const [ state, setState ] = useState({ price: 5, grams: 50});

    const { id } = useParams();

    const variants = request?.variants;

    const options = useMemo(() => {
        return Array.isArray(variants) ? variants.map(item => ({grams: item.grams, _id: item._id})) : [];
    }, [variants]);

    const setPrice = (grams) => {
        let price = 0;
        let _id = 0;

        switch (grams) {
            case options[0].grams:
                price = 5.00; // Price for 10 grams
                _id = options[0]._id
                break;
            case options[1].grams:
                price = 9.50; // Price for 20 grams
                _id = options[1]._id
                break;
            case options[2].grams:
                price = 13.50; // Price for 30 grams
                _id = options[2]._id
                break;
            case options[3].grams:
                price = 17.00; // Price for 40 grams
                _id = options[3]._id
                break;
            case options[4].grams:
                price = 20.00; // Price for 50 grams
                _id = options[4]._id
                break;
            case options[5].grams:
                price = 23.00; // Price for 60 grams
                _id = options[5]._id
                break;
            case options[6].grams:
                price = 26.00; // Price for 70 grams
                _id = options[6]._id
                break;
            case options[7].grams:
                price = 28.50; // Price for 80 grams
                _id = options[7]._id
                break;
            case options[8].grams:
                price = 30.00; // Price for 90 grams
                _id = options[8]._id
                break;
            case options[9].grams:
                price = 32.00; // Price for 100 grams
                _id = options[9]._id
                break;
            case options[10].grams:
                price = 60.00; // Price for 200 grams
                _id = options[10]._id
                break;
            case options[11].grams:
                price = 120.00; // Price for 500 grams
                _id = options[11]._id
                break;
            default:
                price = "Invalid weight. Please select a valid gram amount.";
        }

        setState({
            price,
            grams,
            _id
        });
    }

    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:5500/products/${id}`);
                    const product = {...response?.data?.data?.product};
                    if (response.status === 200)
                        setRequest({...product});
                }
            } catch (error) {
                console.log(error);   
            }
            
        })();
    }, [id]);

    return(
        <main className="section d-flex flex-column align-items-center justify-content-center">
            <Row className="base-width px-md-3 px-xl-0 py-md-3">
                <Col md={4}>
                    <img
                        src={greenPowderImg}
                        alt='product image'
                        style={{width: '100%'}} /> 
                </Col>
                <Col className="pt-2 pt-md-0 px-2 ps-md-5">
                    <Row className="d-flex flex-column justify-content-between h-100">
                        <Col className="d-none d-md-block" style={{contain: 'content'}} md={1}>
                            <Link to={`/products/${request?.type}`}>
                                <img style={{height: '32px'}} src={arrowLeft} />
                            </Link>
                        </Col>
                        <Col className="d-flex flex-column justify-content-end z-index">
                            <h4 className='mb-3'>
                                {request?.name}
                            </h4>
                            <h5 className='mb-4'>
                                {state?.price} Kč
                            </h5>
                            <div className="col-md-4">
                                <SelectButton
                                    setState={setPrice}
                                    state={state?.grams}
                                    options={variants}
                                />
                            </div>
                        </Col>
                        <Col className="mt-3 d-flex justify-content-between flex-column">
                            <p className="product-detail--description pb-4">
                                {request?.longDescription}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="w-100 py-3 px-2 px-md-3 px-xl-0 m-0 d-flex justify-content-center align-items-center" style={{height: '50px !important', borderTop: 'black solid'}}>
                <Row className="base-width d-flex align-items-center justify-content-between">
                    <Col xs={12} md={4} className='order-md-2 mb-2 mb-md-0'>
                        <Link to={'/shopping-cart'} style={{textDecoration: 'none'}} onClick={() => addToCart({...request, count: 1, ...state})}>
                            <button className="button--black d-flex align-items-center justify-content-center">
                                <p className="pe-2 my-auto">Do košíku</p>
                                <img src={shoppingCart} className="icon--32px filter--white" alt="do košíku" />
                            </button>
                        </Link>
                    </Col>
                    <Col  className='order-md-1 col-md-4'>
                        <Link to={`/products/${request?.type}`} style={{textDecoration: 'none'}}>
                            <button className="button--white">
                                <img src={arrowDownOne} className="icon--32px" alt="do košíku" style={{rotate: '90deg'}}/>
                                Zpět
                            </button>
                        </Link>
                    </Col>
                </Row>
            </Row>
        </main>
    )
}

export default ProductDetailed;