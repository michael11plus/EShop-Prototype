import React, { useEffect, useState } from 'react';
import '../styles/homePage.css';
import '../styles/reusable.css';
import { Container } from 'react-bootstrap';
import { getProducts } from '../api-calls';
import { HomePageHeader, Sidebar, HomePageMainSection } from '../components';

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
        <Container fluid className='homepage base-width px-3 px-xlg-0'>
            <Sidebar />
            <HomePageHeader />
            <HomePageMainSection />
            <HomePageMainSection />
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