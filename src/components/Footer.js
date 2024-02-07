import React from "react";
import "../App.css";

const Footer = () => {
  return (
    <div className="footerWrap">
      <div className="footerContents">
        <span className="font12">
          이용약관 | 위치기반 서비스 이용약관 | 개인정보처리방침
        </span>
        <br />
        <span className="font12">청소년보호정책</span>
        <br />
        <div className="kakaoEntertainment font12">(주)카카오엔터테인먼트</div>
        <span>대표이사 : 이진수, 김성수 | 사업자등록번호 : 220-88-02594</span>
        <br />
        <span>주소: 경기도 성남시 분당구 판교역로 221</span>
        <br />
        <span>문의전화 : 1566-7727 (평일 09:00-18:00, 유료)</span>
        <br />
        <span>통신판매업신고번호 : 2018-성남분당B-0004</span>
        <br />
        <span>
          사업자정보확인 <i className="fa-solid fa-angle-right"></i>
        </span>
        <br />
        <span>호스팅서비스사업자 : (주)카카오엔터테인먼트</span>
        <br />
        <div className="footerEmail">이메일 : melon_info@kakaoent.com</div>
        <div className="footerCopyright">© Kakao Entertainment Corp.</div>
      </div>
    </div>
  );
};

export default Footer;
