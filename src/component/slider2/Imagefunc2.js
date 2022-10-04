import "./slider.css";
import { useContext } from "react";
import {
  CityContext,
  MajmoeeContext,
  ZirdasteContext,
  DastebandiContext,
  ProductIdContext,
} from "../../shared/city-context";
import { Link } from "react-router-dom";

export function Imagefunc2(props) {
  const [cityId, setcityId] = useContext(CityContext);
  const [majmoeeId, setmajmoeeId] = useContext(MajmoeeContext);
  const [zirdasteId, setzirdasteId] = useContext(ZirdasteContext);
  const [dastebandiId, setdastebandiId] = useContext(DastebandiContext);
  const [productId, setproductId] = useContext(ProductIdContext);


  return (
    <Link to="/list" style={{ display: "flex", justifyContent: "center" }}>
      <img
        className="img-cart"
        src={props.ImageURL}
        alt={props.Alt}
        onClick={() => {
          setcityId(props.CityID);
          setdastebandiId(props.ProductCategoryID);
          setmajmoeeId(props.CollectionID);
          setzirdasteId(props.CollectionCategoryID);
          setproductId(props.ProductID);
        }}
      />
    </Link>
  );
}
export default Imagefunc2;
