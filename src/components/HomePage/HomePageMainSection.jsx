import React, { useEffect, useState } from 'react';
import '../../styles/reusable.css'
import '../../styles/card.css'
import { Row, Col } from 'react-bootstrap';
import { KratomTypeCard } from '..';
import { greenVeinImg, redVeinImg, whiteVeinImg } from '../../assets';

const HomePageMainSection = ({position = '', color}) => {
    const [columns, setColumns] = useState(3);
    const [isFirstRender, setIsFirstRender] = useState(true);

    const cardsGap = '0';
    const indicatorGap = '4px';

    useEffect(() => {
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
    }, [isFirstRender])

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
        <section
            className='homepage--main-section section base-width d-flex flex-column ps-4 pe-3 pe-xl-0'
            style={{position: position === 'fixed' ? 'fixed' : '', top: '0'}}
        >
            <Row
                className='d-flex justify-content-between'
                // style={{position: position === 'fixed' ? 'fixed' : 'absolute', top: position === 'fixed' ? '15vh' : '115vh'}}
                // style={{position: 'fixed', visibility: position === 'fixed' ? 'visible' : 'hidden', top: '15vh'}}
            >
                <Col xs={6}>
                    {color}
                </Col>
                <Col className='d-flex justify-content-end' xs={6}>
                    <Row
                        className='indicator'
                        style={{
                            display: 'flex',
                            alignItems: 'end',
                            flexWrap: 'wrap',
                            margin: '0',
                            gap: indicatorGap,
                        }}
                    >
                        <Col
                            className={color === 'green' ? 'ring neon-green' : 'disabled-green ring'}
                        >
                        </Col>
                        <Col
                            className={color === 'green' ? 'ring neon-red' : 'disabled-red ring'}
                        >
                        </Col>
                        <Col
                            className={color === 'green' ? 'ring neon-white' : 'disabled-white ring'}
                        ></Col>
                    </Row>
                </Col>
            </Row>
            <Row 
                className="card-kratom-type--container mt-auto"
                style={{
                    display: 'flex',
                    alignItems: 'end',
                    flexWrap: 'wrap',
                    margin: '0',
                    padding: '0',
                    cardsGap,
                }}
            >
                {KRATOM_TYPES.map((item, index) => (
                    <Col
                        className='border'
                        style={{
                            flex: color === item.type
                            ? `0 0 calc((100% - ${(columns - 1)} * ${parseFloat(cardsGap)}rem) / ${columns} + 5%)`
                            : `0 0 calc((92.5% - ${(columns - 1)} * ${parseFloat(cardsGap)}rem) / ${columns})`,
                            margin: '0',
                            height: color === item.type ? '400px' : '200px',
                            transition: '0.3s ease-in-out'
                        }}
                    >
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