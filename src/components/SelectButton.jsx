import React, { useEffect, useState } from "react";
import '../styles/reusable.css';
import { arrowDownOne } from "../assets";
import { Col } from "react-bootstrap";

const SelectButton = ({options = [], setState, state}) => {
    const [ isOpen, setIsOpen ] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    const selectOption = (grams) => {
        setState(grams);
    };

    return(
        <button className="select-button bg-white" onClick={handleOpen}>
            <div className={`d-flex justify-content-between align-items-center ${isOpen ? 'select-button--option' : 'select-button--not-opened'}`}>
                <Col>{state ? state : 'Vyberte hmotnost'}</Col>
                <img src={arrowDownOne} className='icon--32px' alt='otevřít uživatelský profil drop-down' />
            </div>
            {
                isOpen
                &&
                <>
                    {options.map(item => {
                        if(state !== item)
                            return <div className="select-button--option" onClick={() => {selectOption(item)}}>{item}</div>
                    })}
                </>
            }
        </button>
    );
};

export default SelectButton;