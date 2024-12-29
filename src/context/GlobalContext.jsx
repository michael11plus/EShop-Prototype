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
        } else {
            setCart((prevCart) => [...prevCart, { ...rest, count: 1 }]);
        }
    };

    const removeFromCart = (itemId) => {
        const cartItem = cart.find(i => i._id === itemId);

        if (cartItem.count > 1) {
            setCart(actualCart => actualCart.map(i => i._id === itemId ? { ...i, count: i.count - 1} : i));
        } else {
            setCart(actualCart => actualCart.filter(i => i._id !== itemId));
        }
    };
    
<<<<<<< HEAD
=======
    

>>>>>>> 33dfcc1f926ce76d9ebddfaf619a6e15b6245465
    useEffect(() => {
        console.log(cart);
    }, [cart]);

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