import { React, useContext, useState } from "react";
import { CartContext } from "../../shared/cart-context";

export function CartIcon() {
  const result = localStorage.getItem("cartItem");
  const x = JSON.parse(result);
  let result1 = useState();

  const [cartItems, setCartItems] = useContext(CartContext);
  const result2 = cartItems.length;
  if (x != null) {
    result1 = x.length;
  }

  let y;
  result1 > result2 ? (y = result1) : (y = result2);

  return (
    <div>
      <img
        width="22"
        src="https://s6.uupload.ir/files/sabad_76ch.png"
        alt="cart"
      ></img>
      {y != 0 ? (
        <span
          style={{
            marginTop: "-7px",
            position: "absolute",
            marginLeft: "-8px",
            background: "#e92444",
            borderRadius: "30px",
            padding: "3px 5px",
            color: "white",
            fontSize: "10px",
            fontWeight: "100",
          }}
          className="badge badge-danger badge-pill"
        >
          {y}
        </span>
      ) : (
        ""
      )}
    </div>
  );
}
