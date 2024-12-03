import React from 'react';
import { Navbar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import '../styles/navbar.css';

const RootLayout = () => {
    return(
        <div className='d-flex flex-column w-100 align-item-center justify-content-center'>
            <Navbar />
            <div height='72px'></div>
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;