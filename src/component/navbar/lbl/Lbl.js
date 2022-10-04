import * as React from "react";
import { useContext, useState } from "react";
import "./lbl.css";
import { GenderIdContext, TagIdContext } from "../../../shared/city-context";
export function Lbl(props) {
  const [TagId, setTagId] = useContext(TagIdContext);
  const [isActive, setIsActive] = useState(false);

  return (
    <React.Fragment>
      <button
        className="lbl-style"
        onClick={() => {
          setTagId(props.ID);
          setIsActive((current) => !current);
        }}
        style={{
          borderColor: isActive ? "#e92444" : "",
          color: isActive ? "#e92444" : "",
        }}
      >
        {props.title}
      </button>
    </React.Fragment>
  );
}
export default Lbl;
