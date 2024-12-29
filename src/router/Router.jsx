import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, ProductsFiltered, RootLayout, ProductDetailed, ShoppingCart } from '../components';
import { GlobalProvider } from '../context/GlobalContext';

const Router = () => {
    return (
        <GlobalProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<RootLayout />}>
                        <Route index element={<HomePage/>} />
                        <Route path='products/:id?' element={<ProductDetailed/>} />
                        <Route path='products/red' element={<ProductsFiltered productType={'red'}/>} />
                        <Route path='products/green' element={<ProductsFiltered productType={'green'}/>} />
                        <Route path='products/white' element={<ProductsFiltered productType={'white'}/>} />
                        <Route path='shopping-cart' element={<ShoppingCart/>} />
                        <Route path='*' element={<div>404 - Page not found</div>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </GlobalProvider>
    );
}

export default Router;
