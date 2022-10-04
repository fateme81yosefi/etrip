import Dropdown from "react-bootstrap/Dropdown";
import React, { Fragment, useContext } from "react";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./navbar.css";
import Lbl from "./lbl/Lbl";
import Calendar from "../calendar/Calendar";
import { useRef, useEffect } from "react";
import "./navbar.css";
import ListFilter from "./ListFilter";
import { CartIcon } from "../cartIcon/CartIcon";
import { Link } from "react-router-dom";
import {
  CityContext,
  ContentContext,
  DastebandiContext,
  TagIdContext,
} from "../../shared/city-context";
import {
  MajmoeeContext,
  ZirdasteContext,
  GenderIdContext,
} from "../../shared/city-context";
import { DarkContext } from "../../shared/darkmode";

export function Navbar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const ref = useRef(null);

  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [TagId, setTagId] = useContext(TagIdContext);
  const [GenderId, setGenderId] = useContext(GenderIdContext);
  const [Content, setContent] = useContext(ContentContext);
  const [dark, setDark] = useContext(DarkContext);

  const [city, setcity] = useState([]);
  const [dastebandi, setdastebandi] = useState([]);
  const [majmoee, setmajmoee] = useState([]);
  const [zirdaste, setzirdaste] = useState([]);
  const [tag, settag] = useState([]);
  const [gender, setgender] = useState([]);

  useEffect(() => {
    fetch("http://webapi.ep7.ir/TourismAPI/GetFilterInfo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
        Authorization: '{"Token": "-1"}',
      },
      body: JSON.stringify({
        ShopID: 11015,
        PrivateKey: "-1",
        LastSelectedCityID: -1,
        CityID: -1,
        Resolution: "500*500",
        Browser: navigator.userAgent,
        IP: "192.168.1.1",
        Host: "192.168.1.1",
        MacAddress: "15:54:21:32:12",
        OS: "test",
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        setcity(result.City);
        setdastebandi(result.ProductCategory);
        setmajmoee(result.Collection);
        setzirdaste(result.CollectionCategory);
        settag(result.Tag);
        setgender(result.GenderType);
      });
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      document.getElementById("search-btn").style.display = "none";
      document.getElementById("input-search1").style.display = "flex";
    };

    const element = ref.current;

    element.addEventListener("click", handleClick);

    return () => {
      element.removeEventListener("click", handleClick);
    };
  });

  useEffect(() => {
    var locbtn = document.getElementById("loc-btn");
    var dropdownmenue = document.getElementById("dropdownmenue");
    locbtn.addEventListener("click", function (e) {
      e.preventDefault();
      locbtn.style.display = "none";
      dropdownmenue.style.display = "flex";
    });
  }, []);

  const darkmodeStyle = dark
    ? {
        background: "#3F3F46",
        color: "#beb5b5",
      }
    : {};

  return (
    <Fragment>
      <div className="contain-navbar" style={darkmodeStyle}>
        <div className="container">
          <div className="nav1">
            <MDBDropdown
              group
              className="shadow-0"
              id="dropdownmenue"
              style={{ display: "none" }}
            >
              <MDBDropdownToggle color="light">
                {" "}
                <svg
                  style={{ float: "right", marginLeft: "5px" }}
                  width="15"
                  height="15"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title></title>
                  <g
                    dataname="locate location map pin"
                    id="locate_location_map_pin"
                  >
                    <path d="M23.78,6.15A11,11,0,0,0,8.22,21.71l4.1,4.1a1,1,0,1,0,1.42-1.42l-4.1-4.1a9,9,0,1,1,12.72,0l-7.07,7.07a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7.07-7.07A11,11,0,0,0,23.78,6.15Z"></path>
                    <path d="M21,14a5,5,0,1,0-5,5A5,5,0,0,0,21,14Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,14Z"></path>
                  </g>
                </svg>
                شهر
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem>
                  <Link to="./list">
                    <MDBDropdownLink
                      onClick={() => {
                        setcityId(-1);
                      }}
                    >
                      تمام شهر ها
                    </MDBDropdownLink>
                  </Link>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="./list">
                    <MDBDropdownLink
                      onClick={() => {
                        setcityId(1639);
                      }}
                    >
                      کیش
                    </MDBDropdownLink>
                  </Link>
                </MDBDropdownItem>
                <MDBDropdownItem>
                  <Link to="./list">
                    <MDBDropdownLink
                      onClick={() => {
                        setcityId(2350);
                      }}
                    >
                      قشم
                    </MDBDropdownLink>
                  </Link>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
            <button className="icon-nav" id="loc-btn">
              <svg
                style={{ float: "right", marginLeft: "5px" }}
                width="40"
                height="40"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title></title>
                <g
                  data-name="locate location map pin"
                  id="locate_location_map_pin"
                >
                  <path d="M23.78,6.15A11,11,0,0,0,8.22,21.71l4.1,4.1a1,1,0,1,0,1.42-1.42l-4.1-4.1a9,9,0,1,1,12.72,0l-7.07,7.07a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l7.07-7.07A11,11,0,0,0,23.78,6.15Z"></path>
                  <path d="M21,14a5,5,0,1,0-5,5A5,5,0,0,0,21,14Zm-8,0a3,3,0,1,1,3,3A3,3,0,0,1,13,14Z"></path>
                </g>
              </svg>
            </button>
            <button className="icon-nav" ref={ref}>
              <img
                id="search-btn"
                src="https://s6.uupload.ir/files/search_qd76.png"
              ></img>
            </button>
            <div className="input-search-container">
              <input
                className="input-search"
                id="input-search1"
                type={"search"}
                placeholder={"...متن جستجو"}
                onChange={(e) => setContent(e.target.value)}
              ></input>
            </div>

            <Link to="/cartlist">
              <CartIcon />
            </Link>
            <Button
              variant="light"
              className="icon-nav d-flex"
              onClick={handleShow}
            >
              <img src="https://s6.uupload.ir/files/filter_r19x.png"></img>{" "}
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title
                  style={{
                    textAlign: "center",
                    fontSize: "smaller !important",
                  }}
                >
                  فیلترها
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="body-modal">
                  <label className="mb-1 mt-2">شهر</label>
                  <Dropdown
                    style={{
                      width: "100%",
                      border: "1px solid #ddd ",
                      color: " #a0a0a4",
                      borderRadius: "6px",
                    }}
                  >
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic6"
                      className="hereing"
                      style={{ color: "black" }}
                    >
                      شهر{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{ width: "100%" }}>
                      <ul className="ul-st">
                        {city.map((item) => (
                          <li
                            onClick={() => {
                              setcityId(item.ID);
                            }}
                            key={item.ID}
                          >
                            <Dropdown.Item>{item.Name}</Dropdown.Item>
                          </li>
                        ))}
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>

                  <label className="mb-1 mt-2">دسته بندی</label>
                  <Dropdown
                    style={{
                      width: "100%",
                      border: "1px solid #ddd ",
                      color: " #a0a0a4",
                      borderRadius: "6px",
                    }}
                  >
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic6"
                      className="hereing"
                      style={{ color: "black" }}
                    >
                      دسته بندی{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        width: "100%",
                        maxHeight: "150px",
                        overflow: "scroll",
                      }}
                    >
                      <ul className="ul-st">
                        {dastebandi.map((item) => (
                          <li
                            key={item.ID}
                            onClick={() => {
                              setdastebandiId(item.ID);
                            }}
                          >
                            <Dropdown.Item id={item.ID}>
                              {item.Name}
                            </Dropdown.Item>
                          </li>
                        ))}
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>

                  <label className="mb-1 mt-2">مجموعه</label>
                  <Dropdown
                    style={{
                      width: "100%",
                      border: "1px solid #ddd ",
                      color: " #a0a0a4",
                      borderRadius: "6px",
                    }}
                  >
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic6"
                      className="hereing"
                      style={{ color: "black" }}
                    >
                      مجموعه{" "}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        width: "100%",
                        maxHeight: "150px",
                        overflow: "scroll",
                      }}
                    >
                      <ul className="ul-st">
                        {majmoee.map((item) => (
                          <li
                            key={item.ID}
                            onClick={() => {
                              setmajmoeeId(item.ID);
                            }}
                          >
                            <Dropdown.Item id={item.ID}>
                              {item.Name}
                            </Dropdown.Item>
                          </li>
                        ))}
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>
                  <label className="mb-1 mt-2">زیردسته</label>
                  <Dropdown
                    style={{
                      width: "100%",
                      border: "1px solid #ddd ",
                      color: " #a0a0a4",
                      borderRadius: "6px",
                    }}
                  >
                    <Dropdown.Toggle
                      variant="link"
                      id="dropdown-basic6"
                      className="hereing"
                      style={{ color: "black" }}
                    >
                      زیر دسته
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      style={{
                        width: "100%",
                        maxHeight: "150px",
                        overflow: "scroll",
                      }}
                    >
                      <ul className="ul-st">
                        {zirdaste.map((item) => (
                          <li
                            onClick={() => {
                              setzirdasteId(item.ID);
                            }}
                            key={item.ID}
                          >
                            <Dropdown.Item id={item.ID}>
                              {item.Name}
                            </Dropdown.Item>
                          </li>
                        ))}
                      </ul>
                    </Dropdown.Menu>
                  </Dropdown>

                  <label className="mb-1 mt-2">برچسب</label>
                  <div className="contain-lbl">
                    <ul>
                      {tag.map((item) => (
                        <li key={item.ID}>
                          <Lbl
                            title={item.Name}
                            ID={item.ID}
                            onClick={() => {
                              setTagId(item.ID);
                            }}
                          ></Lbl>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <label className="mb-1 mt-2">نوع</label>

                  <div className="contain-lbl">
                    <div className="check-container">
                      <ul>
                        {gender.map((item) => (
                          <li key={item.ID}>
                            <label
                              name={item.Name}
                              id={item.ID}
                              className="check-lb"
                              onClick={() => {
                                setGenderId(item.ID);
                              }}
                            >
                              {item.Name}
                            </label>
                            <input
                              type="checkbox"
                              id={item.ID}
                              name={item.Name}
                              onClick={() => {
                                setGenderId(item.ID);
                              }}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <label>بازه زمانی</label>
                  <div className="contain-lbl">
                    <Calendar title="تا تاریخ" />
                    <Calendar title="از تاریخ" />
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Link to="/list" className="btn-sp-module">
                  اعمال فیلتر{" "}
                </Link>
                <Button
                  style={{
                    background: "#fff",
                    color: "#e92444",
                    border: "1px #e92444 solid",
                  }}
                  variant="secondary"
                  className="btn-modal"
                  onClick={handleClose}
                >
                  حذف فیلتر
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
          <div
            className="nav2"
            style={{
              borderTop: "1px solid #ebe9e9",
              boxShadow: "rgb(203 194 194 / 24%) 11px 21px 15px -13px",
            }}
          >
            <span className="filter">:فیلتر دسته بندی</span>

            <div className="contain-option">
              <ListFilter />
            </div>
          </div>
        </div>{" "}
      </div>
    </Fragment>
  );
}
export default Navbar;
