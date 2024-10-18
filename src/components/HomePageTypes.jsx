import { React, useState } from 'react';
import '../styles/styles.css';
import { Container, Row, Col } from 'react-bootstrap';
import { TypeCard } from '../components';
import { goldVeinImg, greenPowderImg, greenVeinImg, redVeinImg, whiteVeinImg, yellowVeinImg } from '../assets';

const HomePageTypes = ({ products }) => {
    // get types of products
    const KRATOM_TYPES = [
        {
            type: 'green vein',
            description: 'soustřeď se a energizuj',
            image: greenVeinImg,
        },
        {
            type: 'red vein',
            description: 'uvolni se a ztlum bolest',
            image: redVeinImg,
        },
        {
            type: 'white vein',
            description: 'rozjasni a povzbuď svou mysl',
            image: whiteVeinImg,
        },
        {
            type: 'yellow vein',
            description: 'uvolni se a objev harmonii',
            image: yellowVeinImg,
        },
        {
            type: 'gold vein',
            description: 'objev rovnováhu a volnost',
            image: goldVeinImg,
        }
    ];

    //get actual index
    const [currentIndex, setCurrentIndex] = useState(0);

    //get type based on index
    const currentType = KRATOM_TYPES[currentIndex];


    return (
        <Container className='homepage-types'>
            <p>objev naše</p>
            <h3>druhy kratomu</h3>

            <Row className='homepage-types'>
                <Col md={12}>
                    <TypeCard
                        type={currentType.type}
                        description={currentType.description}
                        image={currentType.image}
                    />
                </Col>
            </Row>

            <div className='type-slider'>
                {KRATOM_TYPES.map((_, index) => (
                    <button 
                        key={index} 
                        className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    ></button>
                ))}
            </div>

        </Container>
    );
};

export default HomePageTypes;