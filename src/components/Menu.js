import React, { useState, useEffect } from "react";
import "./Menu.css";
import MenuItem from "../components/MenuItem";

const menuItemText = [
  "멜론홈",
  "최신음악",
  "멜론차트",
  "뮤직비디오",
  "뮤직웨이브",
  "멜론뮤직어워드",
  "이벤트",
  "공지사항",
  "멜론 티켓",
];

const Menu = ({ open, onStateChange }) => {
  const [exit, setExit] = useState(open);

  useEffect(() => {
    onStateChange();
  }, [exit]);

  const onClickExit = () => {
    setExit(!exit);
  };

  return (
    <div className={open ? "Menu" : "Menu active"}>
      <button className="exitBtn" onClick={onClickExit}>
        <span></span>
        <span></span>
      </button>
      <div className="profileBox">
        <div className="profileImg"></div>
        <div className="profileName whitetext">로그인하세요</div>
      </div>

      <div className="purchaseBox">
        <div>
          <span className="purchaseText greentext">
            내 스타일에 맞는 이용권은?
          </span>
          <button className="purchaseBtn">이용권구매</button>
        </div>
        <div>
          <span className="purchaseText whitetext">
            회원등급 <span className="graytext">로그인 후 확인하세요</span>
          </span>
          <button className="purchaseBtn">멜론라운지</button>
        </div>
      </div>

      <div className="menuItemBox">
        {menuItemText.map((item, index) => (
          <MenuItem key={index} text={item} num={index} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
