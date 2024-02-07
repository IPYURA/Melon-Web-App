import React, { useState, useEffect } from "react";
import "../pages/MelonChart.css";
import chartItem from "../music_chart.json";

const ChartItem = () => {
  const [songItems, setSongItems] = useState([]);

  useEffect(() => {
    setSongItems(chartItem);
  }, []);

  return songItems.map((item, index) => (
    <div key={index} className="ChartItem">
      <img className="chartItemImg" src={item.albumimage} alt={item.title} />
      <div className="itemDesc">
        <div className="rankBox">
          <span className="rank">{item.rank}</span>
          <span className="rankBar">-</span>
        </div>
        <div className="titleArtist">
          <span className="songTitle">{item.title}</span>
          <span className="songArtist">{item.artist}</span>
        </div>
      </div>
    </div>
  ));
};

export default ChartItem;
