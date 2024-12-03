import React from 'react';
import '../../styles/reusable.css'
import '../../styles/card.css'
import { Container, Row, Col } from 'react-bootstrap';
import { KratomTypeCard } from '..';
import { greenVeinImg, redVeinImg, whiteVeinImg } from '../../assets';

const HomePageMainSection = () => {
    const KRATOM_TYPES = [
        {
            type: 'green',
            description: 'soustřeď se a energizuj',
            image: greenVeinImg,
        },
        {
            type: 'red',
            description: 'uvolni se a ztlum bolest',
            image: redVeinImg,
        },
        {
            type: 'white',
            description: 'rozjasni a povzbuď svou mysl',
            image: whiteVeinImg,
        },
    ];

    return (
        <section className='section ps-4 d-flex flex-column justify-content-end relative'>
            <Row className="card-kratom-type--container h-100" style={{border: 'solid red'}}>
                {KRATOM_TYPES.map((item, index) => (
                    <Col md={6} lg={4} className='border'>
                        <KratomTypeCard
                            key={index}
                            {...item}
                            index={index}
                        />
                    </Col>
                ))}
            </Row>

        </section>
    );
};

export default HomePageMainSection;