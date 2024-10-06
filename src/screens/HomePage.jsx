import React, { useEffect, useState } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { ProductCard } from "../components";


const HomePage = () => {
    const [ request, setRequest ] = useState({
        products: null 
    });
    
    const getProducts = async () => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const myReturn = await axios.get('http://localhost:5500/product', config)
            console.log(myReturn);
            return myReturn;     
        } catch (error) {
            console.log('Data did not arrive', error);
        }
    };

    useEffect(() => {
       (async () => {
            const response = await getProducts();
            console.log(response);
            const data = response.data.data.products;
            setRequest(prev => ({...prev, products: [...data]}));
       })(); 
    }, []);
    
    useEffect(() => {
        console.log(request);
    }, [request]);

    return(
        <Container fluid>
            <Row>
                <Col>
                    {
                        request?.products?.map((item) => {
                            return <ProductCard key={item.name} {...item} />;
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}




















/*
const HomePage = () => {
    const [ request, setRequest ] = useState({
        products: null,
    })
    const getAllProducts = async () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
            }
        };
        const response = await axios.get('http://localhost:5500/product', config);
        return response;
    }

    useEffect(() => {
        (async () => {
            const response = await getAllProducts();
            console.log(response.data.data);
            const responseProduct = response.data.data;

            setRequest(prev => ({
                ...prev,
                products: [...responseProduct.products]
            }));
        })();
    }, []);

    useEffect(() => {
        console.log('this is new state: ', request);
    }, [request]);
    
    return(
        <Container fluid>
            <Row>
                <Col>
                    {
                        request?.products?.map(item => {
                            return(
                                <ProductCard {...item} key={item.name} />
                            );
                        })
                    }
                </Col>
            </Row>
        </Container>
    );
}; */

export default HomePage;