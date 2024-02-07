import React, { useState } from "react";
import Menu from "./Menu";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [active, setActive] = useState(false);
  const navigate = useNavigate();
  const onClickMenu = () => {
    setActive(!active);
  };
  return (
    <div className="headerWrap">
      <div className="mainGnb">
        <div onClick={onClickMenu} className="menuBtn">
          <i className="fa-solid fa-bars"></i>
        </div>
        <div onClick={() => navigate("/")} className="logo"></div>
        <div className="searchIcon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      <Menu open={active} onStateChange={onClickMenu} />
    </div>
  );
};

export default Header;
