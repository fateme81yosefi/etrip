import React, { useContext } from "react";
import { CartContext } from "../../../../shared/cart-context";

function UnderCard(props) {
  const [cartItems, setCartItems] = useContext(CartContext);

  let varin = -1;

  const inc = () => {
    cartItems.map((item, index) => {
      if (props.cartid == item.cartid) {
        varin = index;
      }
    });
    cartItems[varin].cartcount = cartItems[varin].cartcount + 1;
    localStorage.setItem("cartItem", JSON.stringify([...cartItems]));

    setCartItems(() => {
      return [...cartItems];
    });
  };
  const dec = () => {
    cartItems.map((item, index) => {
      if (props.cartid == item.cartid) {
        varin = index;
      }
    });

    if(cartItems[varin].cartcount==1){
      cartItems.splice(varin,1);
      localStorage.setItem("cartItem", JSON.stringify([...cartItems]));
      setCartItems(()=>{return [...cartItems]})
    }
   else{
    cartItems[varin].cartcount = cartItems[varin].cartcount - 1;
    localStorage.setItem("cartItem", JSON.stringify([...cartItems]));

    setCartItems( ()=>{return [...cartItems]})
   }
  };

  return (
    <div className="container">
      <div
        className="row cart-style d-center"
        style={{ direction: "rtl", textAlign: "center" }}
      >
        <div className="col-sm-12 col-md-3" style={{ fontSize: "0.7rem" }}>
          {props.cartfeaturename}{" "}
        </div>
        <div className="col-sm-12 col-md-4 d-center">
          <div className="container">
            <div className="row">
              <div className="col-6 d-center" style={{ fontSize: "0.7rem" }}>
                {props.cartdate}
              </div>
              <div className="col-6 d-center" style={{ fontSize: "0.7rem" }}>
                {props.carttime}
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-5">
          <div className="container">
            <div className="row">
              <div
                className="col-6"
                style={{ display: "flex", flexDirection: "row" }}
              >
                <div className="col-4">
                  <button
                    className="cart-button inc"
                    style={{ padding: "4px 0  " }}
                    onClick={inc}
                  >
                    +
                  </button>
                </div>
                <div className="col-4">{props.cartcount}</div>
                <div className="col-4">
                  <button className="cart-button dec" onClick={dec}>
                    {props.cartcount == 1 ? (
                      <svg
                        className="res-trash"
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="21px"
                        viewBox="0 0 17.782 21.894"
                      >
                        <defs></defs>
                        <g transform="translate(0.003 0.001)">
                          <path
                            d="M222.911,154.7a.513.513,0,0,0-.513.513v9.691a.513.513,0,1,0,1.025,0v-9.691A.513.513,0,0,0,222.911,154.7Zm0,0"
                            transform="translate(-210.998 -146.772)"
                          ></path>
                          <path
                            d="M104.911,154.7a.513.513,0,0,0-.513.513v9.691a.513.513,0,1,0,1.025,0v-9.691A.513.513,0,0,0,104.911,154.7Zm0,0"
                            transform="translate(-99.048 -146.772)"
                          ></path>
                          <path
                            d="M1.453,6.517V19.149A2.829,2.829,0,0,0,2.205,21.1a2.525,2.525,0,0,0,1.832.792h9.7A2.524,2.524,0,0,0,15.57,21.1a2.829,2.829,0,0,0,.752-1.951V6.517a1.959,1.959,0,0,0-.5-3.852H13.195V2.024A2.014,2.014,0,0,0,11.164,0H6.611A2.014,2.014,0,0,0,4.581,2.024v.641H1.955a1.959,1.959,0,0,0-.5,3.852Zm12.285,14.35h-9.7a1.624,1.624,0,0,1-1.559-1.718V6.562H15.3V19.149a1.624,1.624,0,0,1-1.559,1.718ZM5.606,2.024a.988.988,0,0,1,1.005-1h4.553a.988.988,0,0,1,1.005,1v.641H5.606ZM1.955,3.69H15.82a.923.923,0,0,1,0,1.846H1.955a.923.923,0,1,1,0-1.846Zm0,0"
                            transform="translate(0 0)"
                          ></path>
                          <path
                            d="M163.911,154.7a.513.513,0,0,0-.513.513v9.691a.513.513,0,1,0,1.025,0v-9.691A.513.513,0,0,0,163.911,154.7Zm0,0"
                            transform="translate(-155.023 -146.772)"
                          ></path>
                        </g>
                      </svg>
                    ) : (
                      "-"
                    )}
                  </button>
                </div>
              </div>
              <div className="d-center col-6">
                <div className="total-price">
                  {props.cartfinalprice}
                  ریال
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UnderCard;
