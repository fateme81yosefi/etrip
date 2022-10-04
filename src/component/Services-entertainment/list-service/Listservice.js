import React, { Fragment, useState, useEffect ,useContext} from "react";
import { Link } from "react-router-dom";
import { CityContext,MajmoeeContext,ZirdasteContext, DastebandiContext,ProductIdContext} from "../../../shared/city-context";
import Cart from "../cart/Cart";
import "./listserver.css";
export function Listservice() {
  const [carts, setcarts] = useState([]);

  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [productId, setproductId] = useContext(ProductIdContext);

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
        setcarts(result.Module[2].Item);
      });
  }, []);
  return (
      <div className="container">
        <div className="row">
          {carts.map((cart, index) => (
            <div className="col-xs-12 col-md-6 col-lg-4" key={index}>
               <Link to="./list">
               <Cart className="xsss" {...cart} onclick={()=>{
                setcityId(cart.CityID);
                setdastebandiId(cart.ProductCategoryID);
                setmajmoeeId(cart.CollectionID);
                setzirdasteId(cart.CollectionCategoryID);
                setproductId(cart.ProductID);
               }}/>
               </Link>
            </div>
          ))}
        </div>
      </div>

  );
}
export default Listservice;
