import React, { Fragment, useState, useEffect } from "react";
import "./footer.css";
import parse, { domToReact } from "html-react-parser";

export function Footer(props) {
  const [namads, setnamads] = useState([]);
  const [desc, setdesc] = useState([]);

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
        setnamads(result.Module[6].Item);
        setdesc(result.Module[7].Description);
      });
  }, []);

  return (
    <Fragment>
      <div
        className="contain"
        style={{
          background: "#1e1e1e",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <div className="photos-nav">
            <ul>
              {namads.map((namad, index) => (
                <li key={index}>
                  <img src={namad.ImageURL} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <span className="span-footer">استفاده از مطالب این سایت، برای مقاصد غیرتجاری و با ذکر منبع، بلامانع است. تمامی حقوق این سایت متعلق به هلدینگ پرهام کیش میباشد</span>
      </div>
    </Fragment>
  );
}
export default Footer;
