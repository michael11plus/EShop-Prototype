import React from 'react';
import { Container } from "react-bootstrap";
import GlobalContext from '../../context/GlobalContext';

const Cart = () => {
    const { cart } = React.useContext(GlobalContext);

    return(
        <Container>
            {
                cart.map(item => {
                    return(
                        <div key={item?._id}>
                            <img src={`../../assets/${item.image}`}/>
                            <div>{item?.name}</div>
                        </div>
                    );
                })
            }
        </Container>
    );
};

export default Cart;