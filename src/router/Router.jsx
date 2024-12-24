import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ProductsFiltered, RootLayout, ProductDetailed } from '../components';

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<RootLayout />}>
                    <Route index element={<HomePage/>} />
                    <Route path='products/:id?' element={<ProductDetailed/>} />
                    <Route path='products/red' element={<ProductsFiltered productType={'red'}/>} />
                    <Route path='products/green' element={<ProductsFiltered productType={'green'}/>} />
                    <Route path='products/white' element={<ProductsFiltered productType={'white'}/>} />
                    <Route path='*' element={<div>hi</div>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
