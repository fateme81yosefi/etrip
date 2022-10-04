import React, { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../shared/cart-context";
import { DarkContext } from "../../shared/darkmode";
import { Link } from "react-router-dom";
export default function Cart(props) {
  const [cartItems, setCartItems] = useContext(CartContext);
  const [dark, setDark] = useContext(DarkContext);

  let varin = -1;

  const inc = (i) => {
    cartItems[i].cartcount = cartItems[i].cartcount + 1;
    localStorage.setItem("cartItem", JSON.stringify([...cartItems]));

    setCartItems(() => {
      return [...cartItems];
    });
  };
  const darkmodeStyle = dark
    ? {
        background: "#3F3F46",
        boxShadow: "2px 9px 42px -2px #aaaaaa",
        color: "#beb5b5",
      }
    : {};
  const darkmode = dark
    ? {
        background: "#71717A",
        color: "#ffffff",
      }
    : {};
  const deleteall = (i) => {
    alert("آیا از حذف این بلیط اطمینان دارید؟");

    cartItems.splice(i, 1);
    localStorage.setItem("cartItem", JSON.stringify([...cartItems]));
    setCartItems(() => {
      return [...cartItems];
    });
  };

  const dec = (i) => {
    if (cartItems[i].cartcount == 1) {
      alert("آیا از حذف این بلیط اطمینان دارید؟");
      cartItems.splice(i, 1);
      localStorage.setItem("cartItem", JSON.stringify([...cartItems]));
      setCartItems(() => {
        return [...cartItems];
      });
    } else {
      cartItems[i].cartcount = cartItems[i].cartcount - 1;
      localStorage.setItem("cartItem", JSON.stringify([...cartItems]));

      setCartItems(() => {
        return [...cartItems];
      });
    }
  };

  const renderpage = () => {
    if (cartItems.length == 0 || !cartItems) {
      return (
        <div className="empty">
          <span style={{ textAlign: "center"}}>
          سبد خرید خالی است
        </span>
        <img src="data:image/png;base64,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"></img>
        <Link to="./"><button className="btn-home">بازگشت به صفحه اصلی</button></Link>

        </div>
      );
    } else
      return cartItems.map((item, index) => (
        <div className="contain-cart" key={index}>
          <div className="container cart-style" style={darkmodeStyle}>
            <div className="row">
              <span className="cart-title">{item.cartname} </span>
              <div className="col-xs-12 col-md-6 xv">
                <div className="st-out" style={darkmode}>
                  {item.cartfeaturename}
                </div>
              </div>
              <div className="col-6 col-md-3 xv">
                <div className="st-out" style={darkmode}>
                  {item.cartdate}
                </div>
              </div>
              <div className="col-6 col-md-3 xv">
                <div className="st-out" style={darkmode}>
                  {item.carttime}
                </div>
              </div>
              <hr style={{ margin: "10px 0", width: "98%" }}></hr>
              <div className="col-6 col-md-3 bold xv">
                <div className="st-out space-beetween" style={darkmode}>
                  <span>قیمت:</span>
                  <span>{item.cartbaseprice}ریال</span>
                </div>
              </div>
              <div className="col-6 col-md-3 bold xv">
                <div className="st-out space-beetween" style={darkmode}>
                  <span>با تخفیف:</span>
                  <span>{item.cartfinalprice}ریال</span>
                </div>
              </div>
              <div className="col-4 col-md-1 xv">
                <div
                  className="st-out sum add dec"
                  onClick={() => inc(index)}
                  style={darkmode}
                >
                  +
                </div>
              </div>
              <div className="col-4 col-md-1 xv">
                <div className="st-out count" style={darkmode}>
                  {item.cartcount}
                </div>
              </div>
              <div className="col-4 col-md-1 xv" onClick={() => dec(index)}>
                <div className="st-out dec" style={darkmode}>
                  {item.cartcount == 1 ? (
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
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-3 bold xv ">
                <div className="st-out sum space-beetween" style={darkmode}>
                  <span>مجموع:</span>
                  <span>{(item.cartcount / 2) * item.cartfinalprice}</span>
                </div>
              </div>
              <hr style={{ margin: "10px 0", width: "98%" }}></hr>

              <button
                className="btn btn-danger"
                onClick={() => deleteall(index)}
              >
                حذف از سبد خرید
              </button>
            </div>
          </div>
        </div>
      ));
  };

  return renderpage();
}
