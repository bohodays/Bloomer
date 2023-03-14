import BasicModal from "../../common/Modal/BasicModal";
import KakaoMap from "../../Map/KakaoMap";
import TestMap from "../../Map/TestMap";
import React, { useState, useEffect } from "react";

function DiaryLocationModal({ children, modalButton }: any): JSX.Element {
  const [place, setPlace] = useState("최초 위치");
  return (
    <BasicModal
      modalButton={
        <button className="location-switch__button">위치 변경</button>
      }
    >
      <h3>위치 설정</h3>
      <input /> <button>검색 버튼</button>
      <TestMap place={place} setPlace={setPlace} />
      <p>{place}</p>
    </BasicModal>
  );
}

export default DiaryLocationModal;
