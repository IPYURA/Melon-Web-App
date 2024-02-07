import React from "react";
import "./MelonChart.css";
import ChartItem from "../components/ChartItem";

const MelonChart = () => {
  return (
    <div className="MelonChart">
      <div className="topMenu">
        <button className="topBtn leftBtn">TOP100</button>
        <button className="topBtn rightBtn">HOT100</button>
        <div>ⓘ 16:00</div>
      </div>
      <ChartItem />
    </div>
  );
};

export default MelonChart;
