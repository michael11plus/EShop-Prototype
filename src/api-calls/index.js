import axios from 'axios';

export const getAllProducts = () => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    };
    return axios.get('http://localhost:5500/product', config);
}