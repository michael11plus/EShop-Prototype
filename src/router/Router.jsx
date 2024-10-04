import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../components';
import RootLayout from '../root-layout/RootLayout.jsx';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<HomePage />} />   
                    
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
