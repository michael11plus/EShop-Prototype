import React, { useState, useEffect } from 'react';
import '../styles/navbar.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { shoppingCart } from '../assets';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [ focused, setFocused ] = useState(false);
    const [ focused2, setFocused2 ] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [ isScrollable, setIsScrollable ] = useState(true);
    let timeOut = null;

    const [ , setWindowWidth] = useState(window.innerWidth);
    let resizeTimeout;
    
    useEffect(() => {
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            
            if (window.innerWidth > 1040) {
                setIsScrollable(true);
                setMobileNavVisible(false);
            }
    
            resizeTimeout = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 200);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);
    

    const toggleDropdown = (dropDownToToggle) => {
        if(dropDownToToggle)
        {
            setIsDropdownOpen(!isDropdownOpen);
            setFocused(!focused);
            if(isDropdownOpen2)
            {
                setIsDropdownOpen2(false);
                setFocused2(false);
            }
        }
        else
        {
            setIsDropdownOpen2(!isDropdownOpen2);
            setFocused2(!focused2);
            if(isDropdownOpen)
            {
                setIsDropdownOpen(false);
                setFocused(false);
            }
        }
    };

    const handleBlur = (openDropDownFunction, focusFunction) => {
        timeOut = setTimeout(() => {
            openDropDownFunction(false);
            focusFunction(false);
        }, 100);
    };

    const handleFocus = () => {
        clearTimeout(timeOut);
    };

    const toggleNavbar = () => {
        setMobileNavVisible(!mobileNavVisible);
        setIsScrollable(!isScrollable);
    };

    const NAVBAR_ITEMS = [
        {
            name: '',
            upperCaseName: 'ÚVOD'
        },
        {
            name: 'o nas',
            upperCaseName: 'O NÁS'
        },
        {
            name: 'produkty',
            upperCaseName: 'PRODUKTY'
        },
        {
            name: 'kontakt',
            upperCaseName: 'KONTAKT'
        },

        ////////////////////////
    ];

    // const NAVBAR_REQ = [
    //     {
    //         name: 'zadosti/new',
    //         upperCaseName: 'NOVÁ ŽÁDOST',
    //         img: navNovaZadost
    //     },
    // ];

    return (
        <>
            <nav className='px-3 px-xl-0 nav'>
                <Row className='m-0 base-width h-100'>
                    <Col xs={6} className='h-100 d-flex align-items-center'>
                        <Link className='p-0 m-0 h-100 nav__p-title' to='/'>
                            {/* <img className='logo' alt={'logo ČR'} src={lev} /> */}
                            Kratom
                        </Link>
                    </Col>
                    <Col xs={6} className='d-flex align-items-center justify-content-end p-0 m-0 h-100'>
                        {/* <div className='nav-dropdown-container nav__dropdown-button-visibility w-100 d-flex justify-content-start'>
                            <button
                                className='navbar--dropdown-container d-flex flex-column'
                                {...(focused2 ? {dirty: 'true'} : {dirty: 'false'})}
                                style={{height: isDropdownOpen2 && 'auto'}}
                                onClick={() => toggleDropdown(0)}
                                onBlur={() => handleBlur(setIsDropdownOpen2, setFocused2)}
                                onFocus={handleFocus}
                            >
                                {
                                    isDropdownOpen2
                                    &&
                                    <>
                                        <Link to='/zadosti/new' className='navbar--dropdown-items-container'>Vytvořit žádost</Link>
                                    </>
                                }
                            </button>
                        </div> */}
                        <Link className='p-0 m-0 h-100 nav__p-title' to='/shopping-cart'>
                            <img src={shoppingCart} className='shoppingCart' alt='nákupní košík, shopping cart' />
                        </Link>
                        {/* <div className='nav-dropdown-container'>
                            <button
                                className='navbar--dropdown-container d-flex flex-column align-items-end'
                                {...(focused ? {focused: 'true'} : {focused: 'false'})}
                                style={{height: isDropdownOpen && 'auto'}}
                                onClick={() => toggleDropdown(1)}
                                onBlur={() => handleBlur(setIsDropdownOpen, setFocused)}
                                onFocus={handleFocus}
                            >
                                {
                                    isDropdownOpen
                                    &&
                                    <>
                                        <div
                                            className='navbar--dropdown-items-container'
                                            onClick={() => {
                                                // logOut();
                                                setMobileNavVisible(false);
                                            }}
                                        >
                                            Košíkové produkty
                                        </div>
                                    </>
                                }
                            </button>
                        </div> */}
                    </Col>
                </Row>
            </nav>
            {(mobileNavVisible && !isScrollable) && <Container fluid className='hamburger-visibility nav-layer-active pb-3'>
                <Row>
                    <Link className='nav-layer__column' to='/zadosti/new' style={{ textDecoration: 'none' }}><Col className='nav__button-logout' xs={12} onClick={toggleNavbar}>NOVÁ ŽÁDOST</Col></Link>
                    <Link className='nav-layer__column' to='/uvod' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ÚVOD</Col></Link>
                    <Link className='nav-layer__column' to='/zadosti' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ŽÁDOSTI</Col></Link>
                    <Link className='nav-layer__column' to='/rizeni' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ŘÍZENÍ</Col></Link>
                    <Link className='nav-layer__column' to='/zamery' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ZÁMĚRY</Col></Link>
                    <Link className='nav-layer__column' to='/stavby' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>STAVBY</Col></Link>
                    <Col className='nav-layer__column nav__button-logout' xs={12} onClick={toggleNavbar} style={{ border: 'none' }}>
                        <div className='navbar__div--logout' onClick={() => {
                            // logOut();
                            toggleNavbar();
                        }}>
                            {/* <img className='me-3' src={iconLogout} /> */}
                            Odhlásit
                        </div>
                    </Col>
                </Row>
            </Container>}
        </>
    );
};

export default Navbar;

Navbar.propTypes = {
    setIsScrollable: PropTypes.func,
    isScrollable: PropTypes.bool
};