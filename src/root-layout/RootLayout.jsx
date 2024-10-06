import React from 'react';
import { NavigBar } from '../components';
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return(
        <div className='rootlayout'>
            <NavigBar />
            <Outlet />
        </div>
    );
};

export default RootLayout;