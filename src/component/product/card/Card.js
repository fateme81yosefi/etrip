/* eslint-disable no-undef */
import "./card.css";
import React, { Fragment, useEffect, useState, useContext } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import parse, { domToReact } from "html-react-parser";
import { CartContext } from "../../../shared/cart-context";
import UnderCard from "./undercard/UnderCard";
function Card(props) {
  const desc = props.Description;
  const [cartItems, setCartItems] = useContext(CartContext);
  const [dateindex, setDateindex] = useState(0);
  const [timeindex, setTimeindex] = useState(0);
  const [nameindex, setNameindex] = useState(0);

  let ind = -1;

  const [show, setshow] = useState(0);
  const [imageIndex, setImageIndex] = useState(1);

  const cinc = () => {
    const product = {
      cartidnotunic: props.ID,
      cartid:
        props.ID +
        "" +
        props.Feature[nameindex].ID +
        "" +
        props.Feature[nameindex].DateRang[dateindex].ID +
        "" +
        props.Feature[nameindex].DateRang[dateindex].TimeRange[0].ID,

      cartname: props.Name,
      cartfeaturename: props.Feature[nameindex].Name,
      carttime:
        props.Feature[nameindex].DateRang[dateindex].TimeRange[timeindex].Time,
      cartdate: props.Feature[nameindex].DateRang[dateindex].Date,
      cartbaseprice: props.Feature[nameindex].BasePrice,
      cartfinalprice: props.Feature[nameindex].FinalPrice,
      cartcount: 1,
    };

    setCartItems((cartItems) => {
      cartItems.map((item, index) => {
        if (item.cartid === product.cartid) {
          ind = index;
        }
      });

      if (ind == -1) {

        localStorage.setItem(
          "cartItem",
          JSON.stringify([...cartItems, product])
        );

        return [...cartItems, product];
      } else {
        product.cartcount = cartItems[ind].cartcount + 1;
        cartItems.splice(ind,1)
        ind = -1;
        return[...cartItems,product]
      }
    });
  };

  const showtozihat = () => {
    show == 0 ? setshow(1) : setshow(0);
  };

  return (
    <div
      style={{ display: "flex", alignItem: "center", justifyContent: "center" }}
    >
      <div className="container containnn">
        <div className="row display-row">
          <div className="col-sm-12 col-lg-4">
            <div className="contain-images" style={{ position: "relative" }}>
              <img
                alt="none"
                style={{
                  width: "100%",
                  position: "reletive",
                  marginBottom: " 15px",
                  borderRadius: "15px ",
                }}
                src={props.Photo[imageIndex].ImageURL}
              ></img>
              <div className="top">
                <div className="contain-2">
                  <img
                    style={{ position: "", top: "-12%" }}
                    src="https://s6.uupload.ir/files/image_2022-08-28_10-49-32-removebg-preview_(1)_u.png"
                    alt="none"
                  ></img>
                  <span id="location">{props.CityName}</span>
                </div>
              </div>
              <div className="sans">
                <span>{props.GenderText}</span>
              </div>
              <div className="contain-photos">
                <img
                  src="https://s6.uupload.ir/files/image_2022-08-28_10-55-32-removebg-preview_vv9.png"
                  alt="none"
                ></img>
                <div className="photos-3">
                  {props.Photo
                    ? props.Photo.map((item, index) => (
                        <img
                          src={item.ThumbnailURL}
                          alt="none"
                          key={index}
                          onClick={() => setImageIndex(index)}
                        ></img>
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-8">
            <div className="container">
              <div className="row display-row d-1">
                <div className="col-sm-12 col-lg-6 center">
                  <div className="box textover" style={{ fontWeight: "bold" }}>
                    {props.Name}
                  </div>
                </div>
                <div className="col-sm-12 col-lg-6 center">
                  {props.Feature ? (
                    props.Feature.length < 2 ? (
                      <div
                        className="box "
                        style={{ backgroundColor: "white" }}
                      >
                        {props.Feature[0].Name}
                      </div>
                    ) : (
                      <div
                        className="box "
                        style={{ backgroundColor: "white", padding: "1px" }}
                      >
                        {" "}
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="link"
                            id="dropdown-basic6"
                            className="hereing"
                            style={{ color: "black" }}
                          >
                            {props.Feature ? props.Feature[nameindex].Name : ""}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{
                              width: "100%",
                              maxHeight: "100px",
                              overflow: "scroll",
                            }}
                          >
                            <ul className="ul-st">
                              {props.Feature
                                ? props.Feature.map((item, index) => (
                                    <li
                                      key={index}
                                      style={{ width: "100%" }}
                                      onClick={() => {
                                        setNameindex(index);
                                      }}
                                    >
                                      <Dropdown.Item style={{ width: "100%" }}>
                                        {item.Name}
                                      </Dropdown.Item>
                                    </li>
                                  ))
                                : ""}
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    )
                  ) : (
                    "...انتخاب آیتم"
                  )}
                </div>
              </div>

              {props.Feature ? (
                props.Feature[0].DateRang.length > 1 ? (
                  <div className="row display-row">
                    <div className="col-sm-12 col-lg-3 center">
                      <div
                        className="box"
                        style={{ backgroundColor: "white", padding: "1px" }}
                      >
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="link"
                            id="dropdown-basic5"
                            style={{ color: "black" }}
                          >
                            {props.Feature
                              ? props.Feature[nameindex].DateRang
                                ? props.Feature[nameindex].DateRang[dateindex]
                                    .TimeRange
                                  ? props.Feature[nameindex].DateRang[dateindex]
                                      .TimeRange[timeindex].Time
                                  : ""
                                : ""
                              : ""}
                          </Dropdown.Toggle>

                          <Dropdown.Menu style={{ width: "100%" }}>
                            <ul style={{ width: "100%" }}>
                              {props.Feature
                                ? props.Feature[nameindex].DateRang
                                  ? props.Feature[nameindex].DateRang[dateindex]
                                    ? props.Feature[nameindex].DateRang[
                                        dateindex
                                      ].TimeRange.map((item,index) => (
                                        <li
                                          key={index}
                                          style={{ width: "100%" }}
                                        >
                                          <Dropdown.Item
                                            style={{ width: "100%" }}
                                          >
                                            {item.Time}
                                          </Dropdown.Item>
                                        </li>
                                      ))
                                    : ""
                                  : ""
                                : ""}
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 center">
                      <div
                        className="box"
                        style={{ backgroundColor: "white", padding: "1px" }}
                      >
                        <Dropdown>
                          <Dropdown.Toggle
                            variant="link"
                            id="dropdown-basic6"
                            className="hereing"
                            style={{ color: "black" }}
                          >
                            {props.Feature
                              ? props.Feature[nameindex].DateRang
                                ? props.Feature[nameindex].DateRang[dateindex]
                                    .Date
                                : ""
                              : ""}
                          </Dropdown.Toggle>

                          <Dropdown.Menu
                            style={{
                              width: "100%",
                              maxHeight: "100px",
                              overflow: "scroll",
                            }}
                          >
                            <ul className="ul-st">
                              {props.Feature
                                ? props.Feature[nameindex].DateRang
                                  ? props.Feature[nameindex].DateRang.map(
                                      (item, index) => (
                                        <li
                                          key={item.ID}
                                          style={{ width: "100%" }}
                                          onClick={() => {
                                            setDateindex(index);
                                          }}
                                        >
                                          <Dropdown.Item
                                            style={{ width: "100%" }}
                                          >
                                            {item.Date}
                                          </Dropdown.Item>
                                        </li>
                                      )
                                    )
                                  : ""
                                : ""}
                            </ul>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 center">
                      <div className="box b-1">
                        <span
                          style={{
                            color: "#5dab5d",
                            fontWeight: "bolder",
                            direction: "rtl",
                          }}
                        >
                          {props.Feature
                            ? props.Feature[nameindex].FinalPrice
                            : ""}
                          ریال
                        </span>
                        <span>:باتخفیف</span>{" "}
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-3 center">
                      <div className="box b-1">
                        <strike
                          style={{
                            color: "red",
                            fontWeight: "bolder",
                            direction: "rtl",
                          }}
                        >
                          {props.Feature
                            ? props.Feature[nameindex].BasePrice
                            : ""}
                          ریال
                        </strike>
                        <span>:قیمت</span>{" "}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="row display-row">
                    <div className="col-sm-12 col-lg-6 center">
                      <div className="box b-1">
                        <span
                          style={{
                            color: "#5dab5d",
                            fontWeight: "bolder",
                            direction: "rtl",
                          }}
                        >
                          {props.Feature
                            ? props.Feature[nameindex].FinalPrice
                            : ""}
                          ریال
                        </span>
                        <span>:باتخفیف</span>{" "}
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 center">
                      <div className="box b-1">
                        <strike
                          style={{
                            color: "red",
                            fontWeight: "bolder",
                            direction: "rtl",
                          }}
                        >
                          {props.Feature
                            ? props.Feature[nameindex].BasePrice
                            : ""}
                          ریال
                        </strike>
                        <span>:قیمت</span>{" "}
                      </div>
                    </div>
                  </div>
                )
              ) : (
                ""
              )}

              <div className="row display-row ">
                <div className="col-sm-12 col-lg-6 center">
                  {props.Status == 1 ? (
                    <button
                      className="add-to-cart"
                      id={props.ID + "add"}
                      onClick={cinc}
                    >
                      افزودن به سبد خرید
                    </button>
                  ) : (
                    <button
                      className="add-to-cart"
                      style={{ backgroundColor: "#f7f7fa" }}
                    >
                      افزودن به سبد خرید
                    </button>
                  )}
                </div>
                <div className="col-sm-12 col-lg-6 center">
                  <button
                    className="more"
                    id={props.ID + "more"}
                    onClick={showtozihat}
                  >
                    « توضیحات بیشتر
                  </button>
                </div>
              </div>
            </div>
          </div>
          {show == 1 ? <div className="tozihat">{parse(desc)}</div> : ""}{" "}
        </div>

        <ul style={{ display: "flex", flexDirection: "column" }}>
          {cartItems.map((post,index) =>
            props.ID === post.cartidnotunic ? (
              <li key={index}>
                <UnderCard {...post} />
              </li>
            ) : (
              ""
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default Card;
