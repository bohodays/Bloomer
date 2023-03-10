import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KakaoMap from "./KakaoMap";

const Map = () => {
  const onClick = () => {};
  return (
    <SMain>
      <div className="header">
        <div className="inner-header flex"></div>
      </div>
      {/* 뒤로 가기 아이콘 */}
      <FontAwesomeIcon
        className="back-icon"
        onClick={onClick}
        icon={faArrowLeft}
      />
      <div className="login__title">
        <h1>내 주변에 피어난 꽃</h1>
      </div>
      <KakaoMap />
    </SMain>
  );
};

export default Map;
