import React, { useState, useEffect } from "react";
import "./Newest.css";
import newestItem from "../newest-data.json";

const Newest = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(newestItem);
  }, []);

  return (
    <div className="Newest">
      {items.map((item, index) => (
        <div key={index} className="newestItem">
          <img src={item.img} alt={item.title} />
          <div className="newestDesc">
            <span className="newestTitle">{item.title}</span>
            <span className="newestArtist">{item.artist}</span>
            <span className="newestDate">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Newest;
