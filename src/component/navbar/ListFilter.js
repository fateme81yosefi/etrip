import React, { useState, useEffect, useContext, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listfilter.css";
import { Link } from "react-router-dom";
import { DastebandiContext } from "../../shared/city-context";

export function ListFilter(props) {
  const [listFilters, setlistFilter] = useState([]);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);

  const fetchData = () => {
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
        setlistFilter(result.ProductCategory);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{}}>

      <ul
        style={{
          height: "42px",
          alignItems: "center",
          textDecoration: "none",
          color: "black",
        }}
      >
        {listFilters.map((listFilter, index) => (
          <li key={index}>
            <Link
              to="/list"
              onClick={() => {
                setdastebandiId(listFilter.ID);
              }}
              className="option-sort"
            >
              {listFilter.Name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ListFilter;
