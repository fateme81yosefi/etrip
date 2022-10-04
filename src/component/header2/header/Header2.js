import React, { Fragment } from "react";
// import DropdownHeader from "./dropdown-header/Dropdownn";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";

import "./header2.css";

export function Header2() {
  return (
    <Fragment>
      
      <div className="background-variable">
        
        <div className="container-button">
          <div className="row-class">

            {/* display-lg */}
            <button className="button-top sign-in">
            <Link to={"./login"}> ورود/ثبت نام</Link>
              <svg
                height="17px"
                width="17px"
                enableBackground="new 0 0 32 32"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
              >
                <g>
                  <polyline
                    fill="none"
                    points="   649,137.999 675,137.999 675,155.999 661,155.999  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    fill="none"
                    points="   653,155.999 649,155.999 649,141.999  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    fill="none"
                    points="   661,156 653,162 653,156  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                </g>
                <path d="M21.947,16.332C23.219,14.915,24,13.049,24,11c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8  c1.555,0,3.003-0.453,4.233-1.224c4.35,1.639,7.345,5.62,7.726,10.224H4.042c0.259-3.099,1.713-5.989,4.078-8.051  c0.417-0.363,0.46-0.994,0.097-1.411c-0.362-0.416-0.994-0.46-1.411-0.097C3.751,21.103,2,24.951,2,29c0,0.553,0.448,1,1,1h26  c0.553,0,1-0.447,1-1C30,23.514,26.82,18.615,21.947,16.332z M10,11c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S10,14.309,10,11z  "></path>
              </svg>
            </button>
          
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic1">
                دانلود اپ
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">نسخه IOS</Dropdown.Item>
                <Dropdown.Item href="#/action-2">نسخه اندروید</Dropdown.Item>
             
              </Dropdown.Menu>
            </Dropdown>
            {/* display-sm */}
            <button className="button-top2 sign-in">
              <svg
                height="17px"
                width="17px"
                enableBackground="new 0 0 32 32"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 32 32"
              >
                <g>
                  <polyline
                    fill="none"
                    points="   649,137.999 675,137.999 675,155.999 661,155.999  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    fill="none"
                    points="   653,155.999 649,155.999 649,141.999  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                  <polyline
                    fill="none"
                    points="   661,156 653,162 653,156  "
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                  ></polyline>
                </g>
                <path d="M21.947,16.332C23.219,14.915,24,13.049,24,11c0-4.411-3.589-8-8-8s-8,3.589-8,8s3.589,8,8,8  c1.555,0,3.003-0.453,4.233-1.224c4.35,1.639,7.345,5.62,7.726,10.224H4.042c0.259-3.099,1.713-5.989,4.078-8.051  c0.417-0.363,0.46-0.994,0.097-1.411c-0.362-0.416-0.994-0.46-1.411-0.097C3.751,21.103,2,24.951,2,29c0,0.553,0.448,1,1,1h26  c0.553,0,1-0.447,1-1C30,23.514,26.82,18.615,21.947,16.332z M10,11c0-3.309,2.691-6,6-6s6,2.691,6,6s-2.691,6-6,6S10,14.309,10,11z  "></path>
              </svg>
            </button>
          
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic2">
                <img width="19px" style={{    marginRight: "10px"}} src="https://s6.uupload.ir/files/image_2022-08-23_12-39-01-removebg-preview_oudo.png"></img>
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">نسخه IOS</Dropdown.Item>
                <Dropdown.Item href="#/action-2">نسخه اندروید</Dropdown.Item>
             
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="img-container-logo">
            <img
              className="logo-image"
              src="https://etripgroup.com/imgs/etrip-logo.dfd312395636a73b84338e3afdfec36b.png"
            ></img>
            
          </div>
        </div>
    <img
          className="image-header" style={{height:"78px"}}
          src="https://etripgroup.com/imgs/res-list-img.aff94b922045160081e3b55278df5196.jpg"
        ></img>
      </div>
    </Fragment>
  );
}
