import React from "react";
import "../pages/Ticket.css";
import { performanceInfo } from "../imgLink";

const PerformanceItem = () => {
  return (
    <>
      {performanceInfo.map((it) => (
        <div key={it.id} className="PerformanceItem">
          <img src={it.imgSrc} alt={it.title} className="performanceImg" />
          <div className="performanceDesc">
            <h4 className="performanceTitle">{it.title}</h4>
            <p>{it.date}</p>
            <p>{it.place}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default PerformanceItem;
