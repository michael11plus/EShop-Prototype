import React, { useState, useEffect, useLayoutEffect } from 'react';
import '../styles/navbar.css';
import '../styles/reusable.css';
import PropTypes from 'prop-types';
import { Link, useLocation, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { logo, shoppingCart } from '../assets';
// import { personIcon, arrowDown, lev, iconHamburger, navNovaZadost, iconLogout, iconPlus, iconAutoSave } from '../assets/index.js';

const Navbar = ({isScrollable, isOfficer = false}) => {
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
    const [ borderVisible, setBorderVisible ] = useState(false);
    const location = useLocation();
    const { id } = useParams();
    const isProductDetailPage = location.pathname.startsWith('/products/') && id;
    const isProductFiltered = ['/products/green', '/products/red', '/products/white'].some(path => location.pathname.includes(path));

    const [ , setWindowWidth] = useState(window.innerWidth);
    
    useEffect(() => {
        let resizeTimeout;
        let scrollTimeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            
            if (window.innerWidth > 1040) {
                // setIsScrollable(true);
                setMobileNavVisible(false);
            }
    
            resizeTimeout = setTimeout(() => {
                setWindowWidth(window.innerWidth);
            }, 200);
        };

        const handleScroll = () => {
            setBackgroundColor('linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))');
            // Clear the existing timeout, if any
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }

            // Set a new timeout to call the callback after the timeout period
            scrollTimeout = setTimeout(() => {
                setBackgroundColor('white');
            }, 1000);

            if(window.scrollY === 0)
                setBorderVisible(false);
            else
                setBorderVisible(true);
        };
    
        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('resize', handleResize);
            clearTimeout(resizeTimeout);
        };
    }, []);
    

    // const toggleDropdown = (dropDownToToggle) => {
    //     if(dropDownToToggle)
    //     {
    //         setIsDropdownOpen(!isDropdownOpen);
    //         setFocused(!focused);
    //         if(isDropdownOpen2)
    //         {
    //             setIsDropdownOpen2(false);
    //             setFocused2(false);
    //         }
    //     }
    //     else
    //     {
    //         setIsDropdownOpen2(!isDropdownOpen2);
    //         setFocused2(!focused2);
    //         if(isDropdownOpen)
    //         {
    //             setIsDropdownOpen(false);
    //             setFocused(false);
    //         }
    //     }
    // };

    // const handleBlur = (openDropDownFunction, focusFunction) => {
    //     timeOut = setTimeout(() => {
    //         openDropDownFunction(false);
    //         focusFunction(false);
    //     }, 100);
    // };

    // const handleFocus = () => {
    //     clearTimeout(timeOut);
    // };

    const toggleNavbar = () => {
        setMobileNavVisible(!mobileNavVisible);
        // setIsScrollable(!isScrollable);
    };

    const NAVBAR_ITEMS = [
        {
            name: '',
            upperCaseName: 'HOME'
        },
        {
            name: 'products/green',
            upperCaseName: 'GREEN'
        },
        {
            name: 'products/red',
            upperCaseName: 'RED'
        },
        {
            name: 'products/white',
            upperCaseName: 'WHITE'
        },
        {
            name: 'contacts',
            upperCaseName: 'CONTACTS',
            isHighlighted: true,
        },
    ];

    return (
        <>
            <nav>
                <Container fluid className='nav m-0 p-0' style={{border: (borderVisible || isProductDetailPage || isProductFiltered) ? '' : 'none', background: backgroundColor}}>
                    <Row className='p-0 m-0 w-100'>
                        <Col xs={12} className='nav-top px-3 px-xl-0 d-flex align-items-center justify-content-center m-0 p-0' style={{border: (borderVisible || isProductDetailPage || isProductFiltered) ? '' : 'none'}}>
                            <Row className='nav-row d-flex align-items-center m-0 p-0'>
                                <Col xs={6}>
                                    <Link className='d-flex align-items-center p-0 m-0 h-100 nav__p-title' style={{ textDecoration: 'none' }} to='/'>
                                        <img className='logo' src={logo} alt='logo' style={{rotate: '-90deg'}}/>
                                        {/* <img className='logo' alt={'logo ČR'} src={lev} /> */}
                                        <h4 className='ps-2'>Kratom</h4>
                                    </Link>
                                </Col>
                                <Col className='text-end'>
                                    <img src={shoppingCart} className='logo' alt='shopping cart'/>
                                </Col>
                            </Row>
                        </Col>
                        {
                        (borderVisible || isProductDetailPage || isProductFiltered) &&
                        <Col xs={12} className='nav-bottom px-3 px-xl-0 visibility w-100 d-flex justify-content-center'>
                            <Row className='nav-row visibility h-100'>
                                <Col xs={5} className='d-flex justify-content-between'>
                                    {NAVBAR_ITEMS.map(item => {
                                        return (
                                            <Link to={`/${item.name}`} key={item.name} className='position-relative' style={{ textDecoration: 'none', color: 'black'}}>
                                                <Col xs={2} className=''>
                                                    <p className={location?.pathname === `/${item.name}` ? 'p-navbar clicked h-100' : 'p-navbar h-100'}>{item.upperCaseName}</p>
                                                    {/* {item?.isHighlighted && (
                                                        <GovIcon className='nav-link__icon--highlighted' name='star-fill' size='xs' />
                                                    )} */}
                                                </Col>
                                            </Link>
                                        );
                                    })}
                                </Col>
                            </Row>
                        </Col>}
                    </Row>
                </Container>
            </nav>
            {(mobileNavVisible && !isScrollable) && <Container fluid className='hamburger-visibility nav-layer-active pb-3'>
                <Row className='w-100'>
                    {
                        !isOfficer &&
                        <>
                            <Link className='nav-layer__column' to='/zadosti/new' style={{ textDecoration: 'none' }}><Col className='nav__button-logout' xs={12} onClick={toggleNavbar}>NOVÁ ŽÁDOST</Col></Link>
                            <Link className='nav-layer__column' to='/uvod' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ÚVOD</Col></Link>
                            <Link className='nav-layer__column' to='/zadosti' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ŽÁDOSTI</Col></Link>
                            <Link className='nav-layer__column' to='/rizeni' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ŘÍZENÍ</Col></Link>
                            <Link className='nav-layer__column' to='/zamery' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>ZÁMĚRY</Col></Link>
                            <Link className='nav-layer__column' to='/stavby' style={{ textDecoration: 'none' }}><Col xs={12} onClick={toggleNavbar}>STAVBY</Col></Link>
                        </>

                    }
                    <Col className='nav-layer__column nav__button-logout' xs={12} onClick={toggleNavbar} style={{ border: 'none' }}>
                        <div className='navbar__div--logout' onClick={() => {
                            toggleNavbar();
                        }}>
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
    isScrollable: PropTypes.bool,
    isOfficer: PropTypes.bool,
};
