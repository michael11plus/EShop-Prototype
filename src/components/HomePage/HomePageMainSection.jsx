import { React, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { KratomTypeCard } from '..';
import { goldVeinImg, greenPowderImg, greenVeinImg, redVeinImg, whiteVeinImg, yellowVeinImg } from '../../assets';

const HomePageTypes = ({ products }) => {
    const KRATOM_TYPES = [
        {
            type: 'Green',
            description: 'soustřeď se a energizuj',
            image: greenVeinImg,
        },
        {
            type: 'Red',
            description: 'uvolni se a ztlum bolest',
            image: redVeinImg,
        },
        {
            type: 'White',
            description: 'rozjasni a povzbuď svou mysl',
            image: whiteVeinImg,
        },
    ];

    return (
        <Container fluid className='p-3'>
            <p>objev naše</p>
            <h3>druhy kratomu</h3>

            <Row>
                {KRATOM_TYPES.map(item => (
                    <Col md={6}>
                        <KratomTypeCard
                            {...item}
                        />
                    </Col>
                ))}
            </Row>

        </Container>
    );
};

export default HomePageTypes;