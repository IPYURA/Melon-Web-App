import React from "react";
import "../pages/Ticket.css";
import SectionTitle from "./SectionTitle";
import TicketOpenItem from "./TicketOpenItem";

const TicketOpen = () => {
  return (
    <div className="TicketOpen">
      <SectionTitle text={"티켓오픈소식 >"} />
      <TicketOpenItem />
    </div>
  );
};

export default TicketOpen;
