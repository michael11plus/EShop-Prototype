import React from "react";
import { useEffect } from "react";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [ cart, setCart ] = React.useState([]);
    const addToCart = (item) => {
        const { variants, ...rest } = item;
        const cartItem = cart.find((i) => i.grams === item.grams);
    
        if (cartItem) {
            setCart((prevCart) =>
                prevCart.map((i) =>
                    i.grams === item.grams ? { ...i, count: i.count + 1 } : i
                )
            );
        }
        else
            setCart((prevCart) => [...prevCart, { ...rest, count: 1 }]);
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