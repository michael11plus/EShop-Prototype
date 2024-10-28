import React, { useState, useEffect, useRef } from 'react';
import '../styles/navbar.css';
// import '../css/reusable.css';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { iconHamburger } from '../assets';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [ focused, setFocused ] = useState(false);
    const [ focused2, setFocused2 ] = useState(false);
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [ isScrollable, setIsScrollable ] = useState(true);
    let timeOut = null;

    const location = useLocation();

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
            <nav>
                <Container fluid className='nav m-0 p-0'>
                    <Row className='w-100 m-0 px-3 px-xl-0'>
                        <Col xs={12} className='nav-top d-flex align-items-center justify-content-center m-0 p-0'>
                            <Row className='nav-row d-flex align-items-center m-0 p-0'>
                                <Col xs={6} className=''>
                                    <Link className='d-flex align-items-center p-0 m-0 h-100' to='/'>
                                        {/* <img className='logo' alt={'logo ČR'} src={lev} /> */}
                                        <p className='nav__p-title' style={{ minWidth: '170px' }}>Portál stavební správy</p>
                                    </Link>
                                </Col>
                                <Col xs={6} className='d-flex justify-content-end p-0 m-0 h-100'>
                                    <>
                                        <div className='nav-dropdown-container nav__dropdown-button-visibility w-100 d-flex justify-content-start'>
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
                                        </div>

                                        {/* {location?.pathname.includes('/zadost/form')
                                            && 
                                        <Container className='d-flex d-md-none justify-content-end align-items-center me-2' fluid>
                                            <Row>
                                                <Col className='d-flex'>
                                                    <p className='p-0 nav-autosave display'>Uloženo</p>
                                                    <img src={iconAutoSave} alt="autosave" style={{marginLeft: '12px'}}/>
                                                </Col>
                                            </Row>
                                        </Container>} */}
                                        <div className='nav-dropdown-container'>
                                            <button
                                                className='navbar--dropdown-container d-flex flex-column'
                                                {...(focused ? {focused: 'true'} : {focused: 'false'})}
                                                style={{height: isDropdownOpen && 'auto'}}
                                                onClick={() => toggleDropdown(1)}
                                                onBlur={() => handleBlur(setIsDropdownOpen, setFocused)}
                                                onFocus={handleFocus}
                                            >
                                                <p className='navbar--dropdown-placeholder'>
                                                    Košík
                                                </p>
                                                {/* <p className='navbar--dropdown-placeholder'>
                                                    <img src={personIcon} className='personIcon' alt='ikona uživatele' />
                                                    {tokenData?.firstName}&nbsp;{tokenData?.lastName}
                                                    <img src={arrowDown} className='arrowDown' alt='otevřít uživatelský profil drop-down' />
                                                </p> */}
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
                                                            Odhlásit
                                                        </div>
                                                    </>
                                                }
                                            </button>
                                        </div>
                                        <div className='hamburger-visibility' onClick={toggleNavbar}>
                                            <p className='p-2 text-white'>Menu</p>
                                            <img src={iconHamburger} alt='hamburger menu' />
                                        </div>
                                    </>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} className='nav-bottom visibility w-100 d-flex justify-content-center'>
                            <Row className='nav-row visibility h-100'>
                                <Col xs={6} className='d-flex justify-content-between'>
                                    {NAVBAR_ITEMS.map(item => {
                                        return (
                                            <Link to={`/${item.name}`} key={item.name} style={{ textDecoration: 'none', color: '#FFFFFF'}}>
                                                <Col xs={2} className=''>
                                                    <p className={location?.pathname === `/${item.name}` ? 'p-navbar  clicked h-100' : 'p-navbar h-100'}>{item.upperCaseName}</p>
                                                </Col>
                                            </Link>
                                        );
                                    })}
                                </Col>
                                <Col></Col>
                                <Col xs={4} className='d-flex'>
                                    {/* {NAVBAR_REQ.map(item => {
                                        return (
                                            <Link to={`/${item.name}`} key={item.name} className='text-end' style={{ textDecoration: 'none', color: '#FFFFFF', width: '100%'}}>
                                                <Col className={location?.pathname === `/${item.name}` ? 'nav-button-create p-navbar clicked h-100' : 'nav-button-create p-navbar h-100'} >
                                                    <img src={item.img} style={{ width: '24px', height: '24px', marginRight: '0.5rem'}} />
                                                    <p className='nav__button-p'>{item.upperCaseName}</p>
                                                </Col>
                                            </Link>
                                        );
                                    })} */}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
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