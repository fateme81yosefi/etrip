import React, { Fragment } from "react";
import "./cart.css";
import { useState, useEffect } from "react";

export function Cart(props) {
  return (
    <Fragment>
      <div className="cart-container" style={{ margin: "10px" }}>
        <div className="shadow1">
          <div className="shadow2">
            <div className="noshadow">
              <div className="main-container">
                <img className="image-cart" style={{    borderRadius: "19px"}} src={props.ImageURL}></img>
             <div className="seting">
             <div className="col-7"></div>
             <div className="col-5 contain-text" style={{ position: "absolute"}}>
                  <div className="title-cart">
                    <span>{props.CollectionCategoryName}</span>
                  </div>
                  <div className="detail-cart">
                    <span>{props.Description}</span>
                  </div>
                  <div className="button-cart">
                    <button>
                      <img
                        style={{ width: "10px", height: "10px" }}
                        src="https://s6.uupload.ir/files/image_2022-08-22_10-17-16-removebg-preview_rl2g.png"
                      ></img>
                      مشاهده
                    </button>
                  </div>
                </div>
             </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Cart;
