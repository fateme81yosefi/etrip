import React, { Fragment } from "react";
import "../login/login.css";
import { Link } from "react-router-dom";
import "./cartForget.css";
export function CartForget() {
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
              <img src="https://etripgroup.com/imgs/forgot.159cee65595403129daaaa750cbdac7c.png"></img>
            </div>

            <div className="container containe-all">
              <span className="title-enter">بازیابی کلمه عبور</span>
              <div className="contain-inputs">
                <input
                  className="input-enter"
                  type={"username"}
                  placeholder={"نام کاربری/شماره موبایل"}
                ></input>
              </div>
           
              <button className="button-enter">بازیابی کلمه عبور</button>
              <div>
                <Link
                  to="/login"
                  style={{
                    color: "#e68922",
                    textAlign: "right !important",
                    fontSize: "12PX",
                  }}
                >
                  وارد شوید{" "}
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
export default CartForget;
