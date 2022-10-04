import React, { Fragment } from "react";
import "./cart.css"
export function Cart() {
  return (
    <Fragment>
      <div className="container contain-image">
        <img
          className="img-cart"
          src="https://media.etripgroup.com/Images/Product/1001_cover_01.jpg"
        ></img>
        <span className="loc">کیش</span>
        <span className="subject">شاتل</span>
        <hr className="hr-style"></hr>
   </div>
    </Fragment>
  );
}
export default Cart;
