import React from "react";
import { useEffect } from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [ cart, setCart ] = React.useState([]);
    const addToCart = (item) => {
        const {variants, ...rest} = item;
        console.log(item._id);
        const cartItem = cart.find(i => i.grams === item.grams);

        if(cartItem)
            cartItem.count++;
        else
            setCart([...cart, rest])
    };
    const removeFromCart = (itemId) => setCart(cart.filter(item => item.id !== itemId));

    useEffect(() => {
        console.log(cart);
    }, [cart])

    const contextValue = {
        cart,
        addToCart,
        removeFromCart,
    };

    return (
        <GlobalContext.Provider value={contextValue}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContext;