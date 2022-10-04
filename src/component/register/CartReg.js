import React, { Fragment } from "react";
import "../login/login.css";

import "./cartReg.css";
import {Link} from "react-router-dom";
export function CartReg() {
  return (
    <Fragment>
    <div className="background">
      <img
        className="background-image"
        src="https://etripgroup.com/imgs/bg.d8525824068c3d2cebcb5e0ef9930fdd.jpg"
      ></img>
      <div className="contain"  style={{marginTop: "-300px"}}>
      <div className="inner-cart">
        <div className="img-topper">
          <img  width="70%" src="https://etripgroup.com/imgs/signup.25c051869fa0397d64695b421bfe3089.svg"></img>
        </div>

        <div className="container containe-all">
          <span className="title-enter">ثبت نام کاربر</span>
          <div className="contain-inputs">
            <input
              className="input-enter"
              type={"username"}
              placeholder={"شماره موبایل"}
            ></input>
        
          </div>
          {/* <a
            href="#"
            style={{ color: "#e68922", textAlign: "right !important" }}>رمز عبور را فراموش کردم</a> */}
           <div className="rols">
           <label style={{    marginRight: "10px", color:"#fd9d0d" ,    fontSize: "12PX"}}>مشاهده و قبول قوانین</label>
            <input type={"checkbox"}/>
           </div>
          <button className="button-enter">ثبت نام</button>
          <div>
            <span style={{fontSize: "12PX"}}>قبلا ثبت نام کرده اید ؟</span>
            <Link to="/login"
              style={{ color: "#e68922", textAlign: "right !important" ,   fontSize: "12PX"}}
              href="#"
            >
            وارد شوید
            </Link>
          </div>
        </div>
      </div>
        <div className="under-cart">
          <div className="row contain-bottom-cart">
            <div className="col-4">
              <img
                className="img-bottom-cart"
                src="https://etripgroup.com/imgs/anar-dooni.59c1c7d091e9d10a66c1f36c43fd4341.png"
              ></img>
              <span className="under-txt">دانلود اپ از اناردونی</span>
            </div>
            <div
              className="col-4"
              style={{
                borderRight: "1px #e68922 solid",
                borderLeft: "1px #e68922 solid",
              }}
            >
              <img
                className="img-bottom-cart"
                src="https://etripgroup.com/imgs/bazar.6b9c67f4b32b9ea474fc2fc95c6ac09b.png"
              ></img>
              <span className="under-txt">دانلود اپ از کافه بازار</span>
            </div>
            <div className="col-4">
              <img
                className="img-bottom-cart"
                src="https://etripgroup.com/imgs/android.06b3e6f1043c6ba8aa4a90de787f13d3.png"
              ></img>
              <span className="under-txt">دانلود مستقیم اپ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
  
  );
}
export default CartReg;
