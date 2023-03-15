import BasicModal from "../../common/Modal/BasicModal";
import KakaoMap from "../../Map/KakaoMap";
import SearchMap from "../../Map/SearchMap";
import React, { useState, useEffect, useRef } from "react";
import LocaList from "../../common/List/LocaList";

function DiaryLocationModal({ place, setPlace }: any): JSX.Element {
  const [keyword, setKeyword] = useState<any>({
    word: place.placeName,
    new: true,
  });
  const [locations, setLocations] = useState<any>([]);

  const onClickHere = () => {
    setKeyword("");
  };

  const func = {
    place,
    setPlace,
    keyword,
    setKeyword,
    locations,
    setLocations,
  };

  const keywordInput = useRef<HTMLInputElement>(null);
  const onSearch = (e: any) =>
    setKeyword({ word: keywordInput.current?.value, new: true });

  return (
    <BasicModal
      modalButton={
        <button className="location-switch__button">위치 변경</button>
      }
    >
      <h3>위치 설정</h3>
      <input ref={keywordInput} /> <button onClick={onSearch}>검색 버튼</button>
      <button onClick={onClickHere}>현재 위치로</button>
      <SearchMap func={func} />
      <p>{place.placeName ? place.placeName : place.address}</p>
      <div style={{ width: "100%", height: "200px", overflowY: "auto" }}>
        <LocaList func={func} />
      </div>
    </BasicModal>
  );
}

export default DiaryLocationModal;
