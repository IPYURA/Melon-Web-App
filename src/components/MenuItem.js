import React from "react";
import "./Menu.css";
import { menuImgs } from "../imgLink";

const MenuItem = ({ text, num }) => {
  return (
    <div className="MenuItem">
      <img src={menuImgs[num]} alt={`icon${num + 1}`} />
      <div>{text}</div>
    </div>
  );
};

export default MenuItem;
