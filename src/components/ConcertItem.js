import React from "react";
import "../pages/Ticket.css";

import { ConcertInfo } from "../imgLink";

const ConcertItem = () => {
  return (
    <>
      {ConcertInfo.map((it) => (
        <div key={it.id} className="ConcertItem">
          <p className="rank">{it.id + 1}</p>
          <img
            key={it.id}
            src={it.imgSrc}
            alt={it.content}
            className="concertImg"
          />
          <div className="concertDesc">
            <div className="concertTitle">{it.content}</div>
            <div className="concertDate">{it.date}</div>
            <div className="concertPlace">{it.place}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ConcertItem;
