import React, { Component, useContext, useState } from "react";
import { CartContext } from "../../shared/cart-context";
import { DarkContext } from "../../shared/darkmode";
import "./cart.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";
export default function CartPage() {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [dark, setDark] = useContext(DarkContext);

  return (
    <div className="">
      <Cart />
   
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {cartItems.length>0 ?<Link to="./pardakht"><button className="btn-pardakht">پرداخت</button></Link>:""}
      </div>
    </div>
  );
}
