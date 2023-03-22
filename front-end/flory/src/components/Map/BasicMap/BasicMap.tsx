import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";
import { SMap } from "./styles";

declare global {
  interface Window {
    kakao: any;
  }
}

const BasicMap = () => {
  const geolocation = useGeolocation();
  let isGeolocation = geolocation.latitude != null;

  useEffect(() => {
    // 좌표 가져오기
    let mapContainer = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
    let mapOptions = {
      //지도를 생성할 때 필요한 기본 옵션
      center: new window.kakao.maps.LatLng(
        geolocation.latitude,
        geolocation.longitude
      ), //지도의 중심좌표.
      level: 3, //지도의 레벨(확대, 축소 정도)
    };

    let map = new window.kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

    // 지도 범위 가져오기
    var bounds = map.getBounds();
    bounds.toString(); // "((33.44843745687413, 126.56798357402302), (33.452964008206735, 126.57333898904454))"

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "현 위치",
        latlng: new kakao.maps.LatLng(
          geolocation.latitude,
          geolocation.longitude
        ),
      },
      {
        title: "멀티캠퍼스",
        latlng: new kakao.maps.LatLng(37.50119059031505, 127.03959330427779),
      },
      {
        title: "한국은행",
        latlng: new kakao.maps.LatLng(37.50059645381534, 127.03798710525825),
      },
      {
        title: "근린공원",
        latlng: new kakao.maps.LatLng(33.451393, 126.570738),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, [isGeolocation]);

  return <SMap id="map" />;
};

export default BasicMap;
