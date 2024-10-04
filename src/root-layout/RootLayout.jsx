import React from 'react';
import { Navbar } from '../components';
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <div className='rootlayout'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default RootLayout;