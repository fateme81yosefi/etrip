import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  CityContext,
  MajmoeeContext,
  ZirdasteContext,
  DastebandiContext,
  ProductIdContext,
} from "../../../shared/city-context";
export function Imagein(props) {
  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [productId, setproductId] = useContext(ProductIdContext);

  return (
    <Link to="./list">
      <img
        className="img-cart1"
        src={props.ImageURL}
        alt={props.Alt}
        onClick={() => {
          setcityId(props.CityID);
          setdastebandiId(props.ProductCategoryID);
          setmajmoeeId(props.CollectionID);
          setzirdasteId(props.CollectionCategoryID);
          setproductId(props.ProductID);
        }}
      ></img>
    </Link>
  );
}
export default Imagein;
