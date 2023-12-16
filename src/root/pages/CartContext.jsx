import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const updateQuantity = (itemKey, quantity) => {
    const updatedItems = cartItems.map(item => {
      if (item.key === itemKey) {
        return { ...item, quantity };
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
