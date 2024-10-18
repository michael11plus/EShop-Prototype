import React from 'react';
import { Card } from 'react-bootstrap';
import '../styles/styles.css';

const TypeCard = ({ type, description, image }) => {
    return (
            <div className='typecard'>
                <img src={image} alt='kratom-image' className='typecard-image'/>
                <h3>{type}</h3>
                <h6>{description}</h6>
            </div>
    );
};

export default TypeCard;