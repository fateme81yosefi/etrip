import React, { Fragment, useContext } from "react";
import { DarkContext } from "../../shared/darkmode";

import Cart from "./cart/Cart";
import Listservice from "./list-service/Listservice";
import "./Services_entertainment.css";
export function Services_entertainment() {
  const [dark, setDark] = useContext(DarkContext);

  const darkmodeStyle = dark
    ? {
        background: "#52525B",
        color: "#ebebeb",
      }
    : { background: "#f5f6f8" };

  return (
    <Fragment>
      <div className="back-service" style={darkmodeStyle}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <div className="contain-services">
            <h4 className="title-service" style={darkmodeStyle}>
              خدمات و تفریحات
            </h4>
            <h6 className="description">
              <img
                width="20%"
                src="https://s6.uupload.ir/files/line_arr.png"
              ></img>
              هرآنچه در سفر مورد نیاز شماست
              <img
                width="20%"
                src="https://s6.uupload.ir/files/line_arr.png"
              ></img>
            </h6>
          </div>
        </div>
        <Listservice />
      </div>
    </Fragment>
  );
}
export default Services_entertainment;
