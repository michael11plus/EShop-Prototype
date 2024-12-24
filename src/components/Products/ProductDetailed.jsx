import React, { useState, useEffect } from "react";
import { Link, useParams } from 'react-router-dom';
import { Row, Col } from "react-bootstrap";
import { arrowDownOne, arrowLeft, greenPowderImg, shoppingCart } from '../../assets';
import axios from "axios";
import { SelectButton } from '../index.js'
import '../../styles/products.css'



const ProductDetailed = () => {
    const [ request, setRequest ] = useState({});
    const [ state, setState ] = useState({ price: 5, grams: '50g'});

    const { id } = useParams();

    const options = ['50g', '100g', '150g', '200g', '250g', '300g', '400g', '500g', '1kg', '1,5kg', '2kg', '5kg'];

    const setPrice = (grams) => {
        let price = 0;

        switch (grams) {
            case options[0]:
                price = 5.00; // Price for 10 grams
                
                break;
            case options[1]:
                price = 9.50; // Price for 20 grams
                break;
            case options[2]:
                price = 13.50; // Price for 30 grams
                break;
            case options[3]:
                price = 17.00; // Price for 40 grams
                break;
            case options[4]:
                price = 20.00; // Price for 50 grams
                break;
            case options[5]:
                price = 23.00; // Price for 60 grams
                break;
            case options[6]:
                price = 26.00; // Price for 70 grams
                break;
            case options[7]:
                price = 28.50; // Price for 80 grams
                break;
            case options[8]:
                price = 30.00; // Price for 90 grams
                break;
            case options[9]:
                price = 32.00; // Price for 100 grams
                break;
            case options[10]:
                price = 60.00; // Price for 200 grams
                break;
            case options[11]:
                price = 120.00; // Price for 500 grams
                break;
            default:
                price = "Invalid weight. Please select a valid gram amount.";
        }

        setState({
            price,
            grams
        });
    }

    useEffect(() => {
        (async () => {
            try {
                if (id) {
                    const response = await axios.get(`http://localhost:5500/products/${id}`);
                    const product = {...response?.data?.data?.product};
                    if (response.status === 200)
                    console.log(product);
                        setRequest({...product});
                }
            } catch (error) {
                console.log(error);   
            }
            
        })();
    }, [id]);

    return(
        <main className="section d-flex flex-column align-items-center justify-content-center">
            <Row className="base-width px-3 px-xl-0 py-4">
                <Col className="h-100" md={4}>
                    <img
                        src={greenPowderImg}
                        alt='product image'
                        style={{width: '100%'}} /> 
                </Col>
                <Col className="ps-md-5" md={8}>
                    <Row className="d-flex flex-column justify-content-between h-100">
                        <Col style={{contain: 'content'}} md={1}>
                            <Link to={`/products/${request?.type}`}>
                                <img style={{height: '32px'}} src={arrowLeft} />
                            </Link>
                        </Col>
                        <Col className="d-flex flex-column justify-content-end z-index">
                            <h4 className='pb-3'>
                                {request?.name}
                            </h4>
                            <h5 className='pb-1'>
                                {state?.price} Kč
                            </h5>
                            <div style={{height: '40px', width: '320px'}}>
                                <SelectButton
                                    setState={setPrice}
                                    state={state?.grams}
                                    options={options}
                                />
                            </div>
                        </Col>
                        <Col className="pt-4 d-flex justify-content-between flex-column">
                            <p className="product-detail--description pb-4">
                                {request?.longDescription}
                            </p>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="w-100 py-3 px-3 px-xl-0 m-0 d-flex justify-content-center align-items-center" style={{height: '50px !important', border: 'black solid'}}>
                <Row className="base-width">
                    <Col>
                        <Link to={`/products/${request?.type}`} style={{textDecoration: 'none'}}>
                            <button className="button--white" style={{width: '320px'}}>
                                <img src={arrowDownOne} className="icon--32px" alt="do košíku" style={{rotate: '90deg'}}/>
                                Zpět
                            </button>
                        </Link>
                    </Col>
                    <Col>
                        <Link to={'/shopping-cart'} style={{textDecoration: 'none'}}>
                            <button className="button--black ms-auto d-flex align-items-center justify-content-center" style={{width: '320px'}}>
                                <p className="pe-2 my-auto">Do košíku</p>
                                <img src={shoppingCart} className="icon--32px filter--white" alt="do košíku" />
                            </button>
                        </Link>
                    </Col>
                </Row>
            </Row>
        </main>
    )
}

export default ProductDetailed;