import React, { useState } from 'react';
import '../../styles/reusable.css'
import '../../styles/card.css'
import { Container, Row, Col } from 'react-bootstrap';
import { KratomTypeCard } from '..';
import { greenVeinImg, redVeinImg, whiteVeinImg } from '../../assets';

const HomePageMainSection = ({ products }) => {
    const cardRefs = React.useRef([]);
    const [ canAnimate, setCanAnimate ] = useState(false);
    const [ cardVisible, setCardVisible ] = useState(0);
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

    const indexes = ['z-index-1', 'z-index-2', 'z-index-3'];
    const animateThere = ['animateFirstThere', 'animateSecondThere'];
    const animateBack = ['animateFirstBack', 'animateSecondBack'];

    const chooseType = (index) => {
        setCardVisible(index);

        const card = cardRefs.current[index];
        const card2 = cardRefs.current[cardVisible];
        
        if (card2 && card2.classList.contains('z-index-4') && cardVisible !== 2 && index !== cardVisible)
        {

            card2.classList.add(animateBack[cardVisible]);
            card2.classList.remove('z-index-4');

            card2.addEventListener(
                'animationend',
                () => {
                    card2.classList.remove(animateBack[cardVisible]);
                    if(index !== 2)
                    {
                        card.classList.add(animateThere[index]);
                    }
                },
                { once: true } // Ensures the event listener runs only once
            );

            card.addEventListener(
                'animationend',
                () => {
                    if(index !== 2)
                    {
                        card.classList.add('z-index-4');


                        card.classList.remove(animateThere[index]);
                    }
                },
                { once: true } // Ensures the event listener runs only once
            );
            return;
        }


        setTimeout(() => {
            console.log(index !== cardVisible);
            if (card && (index !== 2 ) && index !== cardVisible) {
                card.classList.add(animateThere[index]);
            
                card.addEventListener(
                    'animationend',
                    () => {
                        card.classList.remove(animateThere[index]);
                        card.classList.add('z-index-4'); // Add the final class
                    },
                    { once: true } // Ensures the event listener runs only once
                );
                }
        }, 500);

    }

    return (
        <Container fluid className='section'>
            <Row className="reusable-kratom-type-card--container">
                <div>hi</div>
                {KRATOM_TYPES.map((item, index) => (
                    <KratomTypeCard
                        cardRefs={cardRefs}
                        chooseType={chooseType}
                        canAnimate={canAnimate}
                        cardVisible={cardVisible}
                        key={index}
                        {...item}
                        index={index}
                    />
                ))}
            </Row>

        </Container>
    );
};

export default HomePageMainSection;