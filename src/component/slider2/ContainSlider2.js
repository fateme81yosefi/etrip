import React, { Fragment, useState, useEffect,useContext } from "react";
import Responsive1 from "./Responsive1";
import { DarkContext } from "../../shared/darkmode";

export function ContainSlider2() {
  const [sliders, setslider] = useState([]);
  const [title, settitle] = useState([]);
  const [dark,setDark] = useContext(DarkContext);

  useEffect(() => {
    fetch("http://webapi.ep7.ir/TourismAPI/GetHomePageInfo", {
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
        setslider(result.Module[5].Item);
        settitle(result.Module[5]);
      });
  }, []);

  return (
     <Responsive1 sliderItems={sliders} title={title} isdark={dark}/>
  );
}
export default ContainSlider2;
