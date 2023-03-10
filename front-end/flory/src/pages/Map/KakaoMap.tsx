import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const geolocation = useGeolocation();
  console.log(geolocation.latitude);
  console.log(geolocation.longitude);

  useEffect(() => {
    // 좌표 가져오기
    let container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let options = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        geolocation.latitude,
        geolocation.longitude
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }, [geolocation]);

  return <div id="map" style={{ width: "100vw", height: "300px" }} />;
};

export default KakaoMap;
