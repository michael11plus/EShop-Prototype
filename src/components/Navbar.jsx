import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
    const [ hamburgerOpen, setHamburgerOpen ] = useState(false);
    const [ hamburgerVisible, setHamburgerVisible ] = useState(false);
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
    let resizeTimeout = null;

    useEffect(() => {
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            
            if (window.innerWidth > 1040)
            {
                // setIsScrollable(true);
                setHamburgerOpen(false);
                setHamburgerVisible(false);
            }

            if (window.innerWidth < 1040)
            {
                if (!hamburgerVisible)
                    setHamburgerVisible(true);
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

    const handleDropDownVisibility = () => {
        setHamburgerOpen(!hamburgerOpen);
    }

    return(
        <nav className='nav'>
            <Row className='d-flex align-items-center w-100'>
                <Col xs={6} md={6} href="#HomePage">k - time</Col>
                <Col xs={6} md={6} className='d-flex justify-content-between'>
                    {
                        !hamburgerVisible &&
                        <>
                            <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>o nás</p></Link>
                            <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>produkty</p></Link>
                            <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>kontakt</p></Link>
                        </>
                    }
                    <button variant='secondary'>nakupuj!</button>
                    {
                        hamburgerVisible &&
                        <button onClick={handleDropDownVisibility}>hamburger</button>
                    }
                </Col>
            </Row>
            {
                hamburgerOpen &&
                <nav className='w-100 vh-100 bg-white z-3'>
                    <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>o nás</p></Link>
                    <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>produkty</p></Link>
                    <Link href="" style={{textDecoration: 'none'}} ><p className='navbar-link'>kontakt</p></Link>
                </nav>

            }
        </nav>
    );
};

export default Navbar;