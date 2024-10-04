import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from '../components';

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
