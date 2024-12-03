import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import { Col, Row } from 'react-bootstrap';
import '../../styles/card.css'
import '../../styles/reusable.css'
import '../../styles/products.css'

const ProductsFiltered = ({productType}) => {
    const [request, setRequest] = useState([]);
    const [columns, setColumns] = useState(3);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const gap = '1rem';

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get(`http://localhost:5500/products/${productType}`);
                const { products } = response.data.data;
                setRequest(prev => ([...prev, ...products]));
            } catch (error) {
                console.log(error);
            }
        })();

        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 576)
                setColumns(1)
            else if (width <= 768)
                setColumns(2);
            else
                setColumns(3)
            
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
    }, [productType, isFirstRender])

    useEffect(() => {
        console.log(request);
    }, [request]);

    return(
        <main className="products d-flex align-items-center justify-content-center px-3 px-xl-0">
            <Row
                className="base-width d-flex align-items-center products--card-container"
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
        </main>
    );
};

export default ProductsFiltered;