import JCalendar from "reactjs-persian-calendar";
import React, { Fragment } from "react";
import "./calendar.css";

import { useState } from "react";

export default function Calendar(props) {
  const [isShown, setIsShown] = useState(false);
  const[date,setDate]=useState()
  const handleClick = (event) => {
    // 👇️ toggle shown state
    setIsShown((current) => !current);

    // 👇️ or simply set it to true
    // setIsShown(true);
  };

  return (
    <Fragment>
      <button className="date-calendar" onClick={handleClick}>
          {props.title}
      </button>

      {/* 👇️ show elements on click */}
      {isShown && (
        <div>
          <JCalendar
            //   className={props.classNameee}
            locale={"fa"}
            color={"#e92444"}
            size={20}
            onClick={console.log}
            itemRender={(key, item, children) => children}
          />
        </div>
      )}

      {/* 👇️ show component on click */}
      {isShown && <Box />}
    </Fragment>
  );
}

function Box() {
  return (
    <div>
      <JCalendar
        //   className={props.classNameee}
        locale={"fa"}
        color={"#e92444"}
        size={20}
        onClick={console.log}
        itemRender={(key, item, children) => children}
        
      />
    </div>
  );
}
