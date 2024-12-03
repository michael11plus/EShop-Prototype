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
        <Container fluid className='section ps-3 d-flex flex-column justify-content-between relative'>
            <Row className="" style={{position: 'fixed', top: '100px'}}>
                <Col className="col-auto">
                    name
                </Col>
                <Col className="col-auto">
                    indicator
                </Col>
            </Row>
            <Row className="card-kratom-type--container">
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

        </Container>
    );
};

export default HomePageMainSection;