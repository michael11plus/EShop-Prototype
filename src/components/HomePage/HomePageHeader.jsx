import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import yellowMoveVideo from '../../assets/videos/yellow-move.mp4';


const HomePageHeader = () => {
    return(
        <Container fluid className='homepage--header-section'>
            <div className='homepage--video-container'>
                <video autoPlay muted loop playsInline>
                    <source src={yellowMoveVideo} alt='video' />
                </video>
            </div>
            
            <Row className='border d-flex flex-column text-center'>
                <Col className='border'>dopřej si</Col>
                <Col>odpočinek . sílu . harmonii</Col>
                <Col>
                    <button className='homepage-button'>zjisti více</button>
                    <button className='homepage-button'>nakupuj!</button>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePageHeader;