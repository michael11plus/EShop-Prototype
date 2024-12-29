import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';
import '../../styles/card.css'
import '../../styles/reusable.css'
import '../../styles/products.css'
import { Link, useLocation } from 'react-router-dom';
import { arrowLeft } from '../../assets';
import Filter from './Filter';

const ProductsFiltered = ({productType}) => {
    const [request, setRequest] = useState([]);
    const [columns, setColumns] = useState(3);
    const [isFirstRender, setIsFirstRender] = useState(true);
    const { pathname } = useLocation();

    const gap = '1rem';

    useEffect(() => {
        (async () => {
            try {
                const str = pathname.split('products/')[1];
                const type = str || productType;

                const response = await axios.get(`http://localhost:5500/products/${type}`);
                const { products } = response?.data?.data;
                setRequest(([...products]));
            } catch (error) {
                console.log(error);
            }
        })();

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 576)
                setColumns(1);
            else if (width <= 991)
                setColumns(2);
            else
                setColumns(3);
            
        };

        if (isFirstRender)
        {
            handleResize();
            setIsFirstRender(false);
        }

        window.addEventListener('resize', handleResize);

        // Clean-up function to remove the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isFirstRender, productType, pathname]);

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'instant',
        });
    }, []);

    return(
        <main className="products d-flex flex-column relative align-items-center px-3 px-xl-0 border">
            <Row className='base-width'>
                <Col xs={2} className='w-70'>
                    <Filter defaultColor={productType} />
                </Col>
                <Col xs={10} className='ps-5 ps-xl-0'>
                    <Row
                        className="d-flex align-items-center products--card-container ps-3 w-100"
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            margin: '0',
                            padding: '0',
                            gap,
                        }}
                    >
                        {request?.map((item, index) => (
                            <Col
                                style={{
                                    flex: `0 0 calc((100% - ${(columns - 1)} * ${parseFloat(gap)}rem) / ${columns})`,
                                    margin: '0',
                                }}
                                key={index + item.name}
                            >
                                <ProductCard {...item} />
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </main>
    );
};

export default ProductsFiltered;