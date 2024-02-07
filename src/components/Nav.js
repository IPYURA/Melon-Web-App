import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Nav = () => {
  const [green, setGreen] = useState("page1");

  const handleColor = (num) => {
    setGreen(num);
  };
  return (
    <div className="navMenu">
      <Link
        className={`navList ${green === "page1" ? "active" : ""}`}
        to={"/"}
        onClick={() => handleColor("page1")}
      >
        홈
      </Link>

      <Link
        className={`navList ${green === "page2" ? "active" : ""}`}
        to={"/newest"}
        onClick={() => handleColor("page2")}
      >
        최신음악
      </Link>

      <Link
        className={`navList ${green === "page3" ? "active" : ""}`}
        to={"/melonchart"}
        onClick={() => handleColor("page3")}
      >
        멜론차트
      </Link>

      <Link
        className={`navList ${green === "page4" ? "active" : ""}`}
        to={"/musicvideo"}
        onClick={() => handleColor("page4")}
      >
        뮤직비디오
      </Link>

      <Link
        className={`navList ${green === "page5" ? "active" : ""}`}
        to={"/ticket"}
        onClick={() => handleColor("page5")}
      >
        티켓
      </Link>
    </div>
  );
};

export default Nav;
