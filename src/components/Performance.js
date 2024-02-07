import React from "react";
import "../pages/Ticket.css";
import SectionTitle from "./SectionTitle";
import PerformanceItem from "./PerformanceItem";

const Performance = () => {
  return (
    <div className="Performance">
      <SectionTitle text={"놓치지 말아야 할 공연"} />
      <div className="performanceItemBox">
        <PerformanceItem />
      </div>
    </div>
  );
};

export default Performance;
