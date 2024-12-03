import axios from 'axios';

const DEV_URL = 'http://localhost:5500/products';

export const getProducts = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return axios.get(DEV_URL, config);
}

export const getProductsRed = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    
    return axios.get(DEV_URL, config);
}