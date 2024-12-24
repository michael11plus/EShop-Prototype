import React from 'react';
import { Container } from 'react-bootstrap';
import { arrowDown } from '../../assets';
import '../../styles/reusable.css'


const HomePageHeader = () => {
    const scrollDown = () => {
        window.scrollTo({
            top: 300,
            behavior: 'smooth',
          });
    };

    return(
        <Container fluid className='section homepage--header-section mt-auto'>
            <img className='arrowDown' onClick={scrollDown} alt='arrow down' src={arrowDown} />
        </Container>
    )
}

export default HomePageHeader;