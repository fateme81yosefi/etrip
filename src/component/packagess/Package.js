import React, { Fragment, useState, useEffect, useContext } from "react";
import Responsive2 from "./slider/Responsive2";
import "./package.css";
import {
  CityContext,
  DastebandiContext,
  MajmoeeContext,
  ProductIdContext,
  ZirdasteContext,
} from "../../shared/city-context";
import { DarkContext } from "../../shared/darkmode";

import { Link } from "react-router-dom";

export function Package() {
  const [packages, setpackages] = useState([]);

  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [productId, setproductId] = useContext(ProductIdContext);
  const [dark, setDark] = useContext(DarkContext);

  const darkmodeStyle = dark
    ? {
        background: "#52525B",
        color: "#ebebeb",
      }
    : { background: "#f5f6f8" };

  useEffect(() => {
    fetch("http://webapi.ep7.ir/TourismAPI/GetHomePageInfo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
        Authorization: '{"Token": "-1"}',
      },
      body: JSON.stringify({
        ShopID: 11015,
        PrivateKey: "-1",
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
        setpackages(result.Module[4].Item);
      });
  }, []);
  return (
    <Fragment>
      <div className="background-package" style={darkmodeStyle}>
        <h4 style={{ textAlign: "center" }}>پکیج ها</h4>
        <h6
          className="description"
          style={{
            textAlign: "center",
            marginTop: "16px",
            marginBottom: "20px",
          }}
        >
          <img width="20%" src="https://s6.uupload.ir/files/line_arr.png"></img>
          مجموعه ای از پکیج های هیجانی
          <img width="20%" src="https://s6.uupload.ir/files/line_arr.png"></img>
        </h6>
        <div className="packages-section-row">
          {packages.map((packagess, index) => (
            <div
              className="package-item-parent"
              style={{ display: "inline" }}
              key={index}
            >
              <div className="pakcage-img-container">
                <Link to="/list">
                  <img
                    className="package-img lp-img"
                    src={packagess.ImageURL}
                    alt={packagess.Alt}
                    onClick={() => {
                      setcityId(packagess.CityID);
                      setdastebandiId(packagess.ProductCategoryID);
                      setmajmoeeId(packagess.CollectionID);
                      setzirdasteId(packagess.CollectionCategoryID);
                      setproductId(packagess.ProductID);
                    }}
                  ></img>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="sliderrrrr">
          <Responsive2 sliderItems={packages} isdark={dark} />
        </div>
      </div>
    </Fragment>
  );
}
export default Package;
