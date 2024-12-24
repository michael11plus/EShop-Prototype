import React, { useEffect, useState } from 'react';
import '../../styles/products.css';
import '../../styles/filter.css';
import { Col, Row } from 'react-bootstrap';

const Filter = ({defaultColor = ''}) => {
    const [ checkboxState, setCheckboxState ] = useState({
        green: false,
        red: false,
        white: false,
    });

    const [ filterPosition, setFilterPosition ] = useState({
        position: 'fixed',
        top: '154px',
        bottom: ''
    });
    const [ price, setPrice ] = useState('1');
    const [ weight, setWeight ] = useState('1');

    useEffect(() => {
        setCheckboxState(prev => ({...prev, [defaultColor]: defaultColor}));

        const footerHeight = document.querySelector('.footer').clientHeight;


        const handleScroll = () => {
            let bodyHeight = document.documentElement.scrollHeight;
            let scrollBottom = window.scrollY + window.innerHeight;

            console.log('window height', window.innerHeight);

            console.log(bodyHeight - footerHeight);

            if((scrollBottom >= (bodyHeight - footerHeight)) && !(window.innerHeight > bodyHeight - footerHeight))
                setFilterPosition(prev => ({
                    position: prev.position === 'fixed' ? 'absolute' : prev.position,
                    top: prev.top === '154px' ? '' : prev.top,
                    bottom: prev.bottom === '' ? '0' : prev.bottom
                }));
            else
                setFilterPosition(prev => ({
                    position: prev.position === 'absolute' ? 'fixed' : prev.position,
                    top: prev.top === '' ? '154px' : prev.top,
                    bottom: prev.bottom === '0' ? '' : prev.bottom
                }));

        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        console.log(filterPosition);
    }, [filterPosition]);


    return (
        <Row className='filter py-3' style={filterPosition}>
            <Row className='d-flex flex-column filter--border-right pe-3 align-items-start'>
                <Col className='d-flex flex-column filter--field'>
                    Typ
                    <label className='mt-2'>
                        <input
                            checked={checkboxState?.green}
                            onChange={(e) => setCheckboxState(prev => ({...prev, green: e.target.checked}))}
                            className='me-2'
                            type='checkbox'
                        />
                        Green
                    </label>
                    <label>
                        <input
                            checked={checkboxState?.red}
                            onChange={(e) => setCheckboxState(prev => ({...prev, red: e.target.checked}))}
                            className='me-2'
                            type='checkbox'
                        />
                        Red
                    </label>
                    <label>
                        <input
                            checked={checkboxState?.white}
                            onChange={(e) => setCheckboxState(prev => ({...prev, white: e.target.checked}))}
                            className='me-2'
                            type='checkbox'
                        />
                        White
                    </label>
                    <label className='mt-3 filter--field'>
                        <div className='d-flex justify-content-between w-100'>
                            <div>Váha</div>
                            <div>{weight} Kč</div>
                        </div>
                        <input
                            className='slider'
                            onChange={(e) => setWeight(e.target.value)}
                            type="range"
                            min="1"
                            max="12"
                            value={weight}
                            style={{color: 'black'}}
                        />
                    </label>
                    <label className='mt-4 filter--field'>
                        <div className='d-flex justify-content-between w-100'>
                            <div>Cena</div>
                            <div>{price} Kč</div>
                        </div>
                        <input
                            className='slider'
                            onChange={(e) => setPrice(e.target.value)}
                            type="range"
                            min="1"
                            max="12"
                            value={price}
                            style={{color: 'black'}}
                        />
                    </label>
                </Col>
            </Row>
        </Row>
    );
};

export default Filter;