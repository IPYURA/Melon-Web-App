import React from "react";
import "../pages/Ticket.css";
import { TicketOpenInfo } from "../imgLink";

const TicketOpenItem = () => {
  return (
    <>
      {TicketOpenInfo.map((it) => (
        <div key={it.id} className="TicketOpenItem">
          <img src={it.imgSrc} alt={it.content} />
          <div className="descBox">
            <div className="descContent">{it.content}</div>
            <div className="opendate">{it.opendate}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TicketOpenItem;
