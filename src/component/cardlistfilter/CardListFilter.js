import React, { Fragment, useEffect, useState } from "react";
import Card from "../product/card/Card";


function CardListFilter(props) {
  const [products, setproducts] = useState([]);
  
const fetchData=(id)=>{
  fetch("http://webapi.ep7.ir/TourismAPI/GetCollectionsProducts/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authentication: '{"PrivateKey": "W0rK$h0pOL1yhn2#$F22UJMikOL>p"}',
      Authorization: '{"Token": "-1"}',
    },
    body: JSON.stringify({
      ShopID: 11015,
      PrivateKey: "-1",
      Token: "-1",
      CityID: -1,
      CollectionCategoryID:-1,
      CollectionID: 100,
      ProductCategoryID: {id},
      TagID: -1,
      GenderID: -1,
      FromDate: "-1",
      ToDate: "-1",
      Content: "",
      ProductID: -1,

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
      setproducts(result.Product);
    });
}
  useEffect(() => {
    fetchData(props.filter)
  }, );

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => (
          <div className="col-12" key={product.ID}>
            <Card {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardListFilter;
