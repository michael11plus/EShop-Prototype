import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ProductsFiltered, RootLayout } from '../components';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<HomePage/>} />
                    <Route path='products/red' element={<ProductsFiltered productType={'red'}/>} />
                    <Route path='products/green' element={<ProductsFiltered productType={'green'}/>} />
                    <Route path='products/white' element={<ProductsFiltered productType={'white'}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
