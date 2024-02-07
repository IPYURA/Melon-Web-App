import React, { useState, useEffect } from "react";
import "./MusicVideo.css";
import musicVideoData from "../mv-data.json";

const MusicVideo = () => {
  const [mvData, setMvData] = useState([]);
  useEffect(() => {
    setMvData(musicVideoData);
  }, []);
  return (
    <div className="MusicVideo">
      {mvData.map((item,index) => (
        <div key={index} className="mvItem">
          <div className="mvImgBox">
            <img src={item.img} alt={item.title} />
            <span className="mvDuration">{item.duration}</span>
          </div>
          <div className="mvDesc">
            <span className="mvTitle">{item.title}</span>
            <span className="mvArtist">{item.artist}</span>
            <span className="mvDate">{item.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicVideo;
