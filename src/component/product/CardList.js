import "./cardlist.css";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Card from "./card/Card";
import Spinner from "react-bootstrap/Spinner";
import {
  CityContext,
  ZirdasteContext,
  MajmoeeContext,
  DastebandiContext,
  ProductIdContext,TagIdContext,GenderIdContext, ContentContext
} from "../../shared/city-context";
import InfiniteScroll from 'react-infinite-scroll-component';
function CardList() {
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [productId, setproductId] = useContext(ProductIdContext);
  const [TagId,setTagId] = useContext(TagIdContext);
  const [GenderId,setGenderId] = useContext(GenderIdContext);
  const [Content,setContent] = useContext(ContentContext);



  const [count] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const [products, setproducts] = useState([]);

  const fetchData = () => {
    setIsLoading(true);

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
        CityID: cityId,
        CollectionCategoryID: zirdasteId,
        CollectionID: -1,
        ProductCategoryID: dastebandiId,
        TagID: -1,
        GenderID: -1,
        FromDate: "-1",
        ToDate: "-1",
        Content: ""+Content,
        ProductID: productId,

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
        setIsLoading(false);
      })
      .catch(() => {
        alert("خطایی رخ داده لطفا مجددا تلاش فرمایید");
        setIsLoading(false);
      });
  };

  useEffect(
    () => {
      fetchData();
    },
    [dastebandiId],
    [cityId],
    [zirdasteId]
  );

  const renderpage = () => {
    if (isLoading)
      return (
        <div
          className="contain-loading"
          style={{
            alignItem: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {" "}
          <Spinner animation="border" variant="danger" />
        </div>
      );

    if (products.length == 0 || !products)
      return (
        <div className="err" style={{ zIndex: "100" }}>
          موردی یافت نشد
          <img src="https://s6.uupload.ir/files/image_2022-09-19_11-53-52_9g9.png"></img>
        </div>
      );

    if (!isLoading)
      return (
        <InfiniteScroll
        dataLength={products.length} //This is important field to render the next data
        next={fetchData}
        hasMore={false}
        loader={<h4>Loading...</h4>}

        // endMessage={'list finished.'}
      >
       
          <div className="container">
            <div className="row">
              {products.map((product, index) => (
                <div className="col-12" key={index}>
                  <Card {...product} />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      );
    // if(!products || products.length <= 0) return
  };

  return renderpage();
}

export default CardList;
