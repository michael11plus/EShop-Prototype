import React from 'react';
import { Navbar, Footer } from '../components';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import '../styles/navbar.css';
import '../styles/reusable.css';

const RootLayout = () => {
    const location = useLocation();
    const { id } = useParams();

    const isProductDetailPage = location.pathname.startsWith('/products/') && id;
    const isShoppingCart = location.pathname.startsWith('/shopping-cart');

    return(
        <div className='d-flex flex-column w-100 align-item-center justify-content-center'>
            <Navbar />
            <Outlet />
            {!isProductDetailPage && !isShoppingCart && <Footer />}
        </div>
    );
};

export default RootLayout;