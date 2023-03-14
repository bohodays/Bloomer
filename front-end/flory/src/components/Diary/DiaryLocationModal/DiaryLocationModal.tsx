import BasicModal from "../../common/Modal/BasicModal";
import KakaoMap from "../../Map/KakaoMap";
import TestMap from "../../Map/TestMap";
import React, { useState, useEffect, useRef } from "react";

function DiaryLocationModal({ place, setPlace }: any): JSX.Element {
  //   const [place, setPlace] = useState("최초 위치");
  const [keyword, setKeyword] = useState<any>();

  const func = {
    place,
    setPlace,
    keyword,
    setKeyword,
  };

  const keywordInput = useRef<HTMLInputElement>(null);
  const onSearch = (e: any) => setKeyword(keywordInput.current?.value);

  return (
    <BasicModal
      modalButton={
        <button className="location-switch__button">위치 변경</button>
      }
    >
      <h3>위치 설정</h3>
      <input ref={keywordInput} /> <button onClick={onSearch}>검색 버튼</button>
      <TestMap func={func} />
      <p>{place}</p>
    </BasicModal>
  );
}

export default DiaryLocationModal;
