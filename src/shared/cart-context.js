import React, { createContext, useEffect, useState } from "react";
export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState(() => {
    const localData = localStorage.getItem("cartItem");
    return localData ? JSON.parse(localData) : [];
  });
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <CartContext.Provider value={[cartItems, setCartItems]}>
      {props.children}
    </CartContext.Provider>
  );
};
