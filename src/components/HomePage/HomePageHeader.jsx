import React from 'react';
import { Container } from 'react-bootstrap';


const HomePageHeader = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth',
          });
    };

    return(
        <Container fluid className='section homepage--header-section'>
            <button onClick={scrollDown}>scroll down</button>
        </Container>
    )
}

export default HomePageHeader;