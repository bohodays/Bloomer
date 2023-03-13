import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import KakaoMap from "../../components/Map/KakaoMap";
import DiaryList from "../../components/Diary/DiaryList";

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
        <h3>내 주변에 피어난 꽃</h3>
      </div>
      <div className="container-box">
        <KakaoMap />
      </div>
      <div className="container-box">
        <DiaryList />
      </div>
    </SMain>
  );
};

export default Map;
