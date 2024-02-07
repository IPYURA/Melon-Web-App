import React from "react";
import "../pages/Ticket.css";
import ConcertItem from "./ConcertItem";
import SectionTitle from "./SectionTitle";
import BottomLinkBtn from "./BottomLinkBtn";

const Concert = () => {
  return (
    <div className="Concert">
      <SectionTitle text={"콘서트 랭킹 >"} />
      <ConcertItem />
      <BottomLinkBtn text={"더 많은 티켓 보러가기 >"} />
    </div>
  );
};

export default Concert;
