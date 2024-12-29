import React from 'react';
import { Container } from "react-bootstrap";
import GlobalContext from '../../context/GlobalContext';

const Cart = ({sum}) => {
    const { cart, removeFromCart, addToCart } = React.useContext(GlobalContext);

    return(
        <Container>
            {
                cart.map(item => {
                    console.log('ccccccc', item);
                    return(
                        <div key={item?._id} className='d-flex'>
                            <img src={`../../assets/${item.image}`}/>
                            <div>{item?.name}</div>
                            <button onClick={() => removeFromCart(item._id)}>-</button>
                            <div>{item?.count}</div>
                            <button onClick={() => addToCart(item)}>+</button>
                            
                        </div>
                    );
                })
            }
            <p>{sum}</p>
        </Container>
    );
};

export default Cart;