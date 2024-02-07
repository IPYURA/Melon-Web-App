import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="Home">
      <div className="titleWrap">
        <div className="title">최신음악</div>
        <button>전체보기</button>
      </div>

      <div className="contentWrap">
        <div className="content">
          <span className="songsAmount">1곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">시작</div>
            <span className="albumArtist">신유미</span>
          </div>
        </div>
        <div className="content">
          <span className="songsAmount">2곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">Cinema</div>
            <span className="albumArtist">새벽공방</span>
          </div>
        </div>
        <div className="content">
          <span className="songsAmount">3곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">내 노래 리메이크 프로젝트 Vol. 4</div>
            <span className="albumArtist">레터 플로우</span>
          </div>
        </div>
        <div className="content">
          <span className="songsAmount">1곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">FEELS LIKE DEATH</div>
            <span className="albumArtist">gyun</span>
          </div>
        </div>
        <div className="content">
          <span className="songsAmount">5곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">when we were young</div>
            <span className="albumArtist">AVOKID (에이보키드)</span>
          </div>
        </div>
        <div className="content">
          <span className="songsAmount">1곡</span>
          <button className="play">
            <i className="fas fa-play"></i>
          </button>
          <div className="albumImg"></div>
          <div className="albumText">
            <div className="albumTitle">Fake Summer</div>
            <span className="albumArtist">g1nger</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
