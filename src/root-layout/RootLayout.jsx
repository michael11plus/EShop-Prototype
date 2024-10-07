import React from 'react';
import { NavigBar, Footer } from '../components';
import { Outlet } from 'react-router-dom';
import '../styles/styles.css';

const RootLayout = () => {
    return(
        <div className='rootlayout'>
            <NavigBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;