import React from 'react';
import { Container } from "react-bootstrap";
import GlobalContext from '../../context/GlobalContext';

const Cart = () => {
    const { cart, removeFromCart, addToCart } = React.useContext(GlobalContext);

    return(
        <Container>
            {
                cart.map(item => {
                    console.log(item);
                    return(
                        <div key={item?._id} className='d-flex'>
                            <img src={`../../assets/${item.image}`}/>
                            <div>{item?.name}</div>
                            <div>{item?.count}</div>
                            <button onClick={() => removeFromCart(item)}>-</button>
                            <button onClick={() => addToCart(item)}>+</button>
                        </div>
                    );
                })
            }
        </Container>
    );
};

export default Cart;