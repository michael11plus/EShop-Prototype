import React from 'react';
import { Container, Button } from 'react-bootstrap';
import yellowMoveVideo from '../assets/videos/yellow-move.mp4';
import '../styles/styles.css';


const HomePageHeader = () => {
    return(
        <div className='homepage-header'>
            <div className='homepage-video-container'>
                <video autoPlay muted loop playsInline>
                    <source src={yellowMoveVideo} alt='viddeo' />
                </video>
            </div>
            
            <div className='homepage-content'>
                <p>dopřej si</p>
                <p>odpočinek . sílu . harmonii</p>
                <div>
                    <button className='homepage-button'>zjisti více</button>
                    <button className='homepage-button'>nakupuj!</button>
                </div>
            </div>
        </div>
    )
}

export default HomePageHeader;