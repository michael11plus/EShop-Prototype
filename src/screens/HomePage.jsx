import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import { Container, Row, Col } from 'react-bootstrap';
import { getProducts } from '../api-calls';
import { ProductCard, HomePageHeader, HomePageMainSection } from '../components';

const HomePage = () => {
    const [ request, setRequest ] = useState({
        products: null 
    });
    
    useEffect(() => {
       (async () => {
            try {
                const response = await getProducts();
                console.log(response);
                const data = response.data.data.products;
                setRequest(prev => ({...prev, products: [...data]}));
            } catch (error) {
                console.log(error);
            }
       })(); 
    }, []);
    
    useEffect(() => {
        console.log(request);
    }, [request]);

    return(
        <Container fluid>
            <HomePageHeader />
            <div className='gradient-transition'></div>
            <HomePageMainSection />
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
        </Container>
    );
}




















/*
const HomePage = () => {
    const [ request, setRequest ] = useState({
        products: null,
    })

    useEffect(() => {
        (async () => {
            const response = await getAllProducts();
            const data = response.data.data.products;

            if((200 <= response?.status) && (response?.status < 300))
                setRequest(prev => ({
                    ...prev,
                    products: [...data]
                }));
        })();
    }, []);
    
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