import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";
import { DiaryType } from "../../../models/diary/diaryType";
import { convertNumFormat } from "../../../utils/utils";
import { SMap } from "./styles";

declare global {
  interface Window {
    kakao: any;
  }
}

const BasicMap = ({ setBound, diaries }: any): JSX.Element => {
  const geolocation = useGeolocation();
  let isGeolocation = geolocation.latitude != null;
  let bounds;

  let map: any;

  var iconRoute_bg1 = `../../../assets/imgs/flower_bgicon/bgicon_f01.png`;

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

    map = new window.kakao.maps.Map(mapContainer, mapOptions); //지도 생성 및 객체 리턴

    // 마우스 드래그로 지도 이동이 완료되었을 때 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "dragend", function () {
      // 지도 범위 가져오기
      bounds = map.getBounds();
      setBound({
        lng1: String(bounds.ha),
        lat2: String(bounds.qa),
        lng2: String(bounds.oa),
        lat1: String(bounds.pa),
      });
    });

    // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "zoom_changed", function () {
      // 지도 범위 가져오기
      bounds = map.getBounds();
      console.log(bounds);
      setBound({
        lng1: String(bounds.ha),
        lat2: String(bounds.qa),
        lng2: String(bounds.oa),
        lat1: String(bounds.pa),
      });
    });

    // 마커를 표시할 위치와 title 객체 배열입니다
    let positions = diaries.map((diary: DiaryType) => {
      return {
        title: diary.content,
        latlng: new kakao.maps.LatLng(diary.lat, diary.lng),
        fid: convertNumFormat(diary.flowerEmotion.fid),
      };
    });

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f01.png`);
    for (var i = 0; i < positions.length; i++) {
      var iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f${positions[i].fid}.png`);
      // 마커 이미지의 이미지 주소입니다
      // const iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f0${positions[i].fid}.png`);

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(32, 32);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(iconRoute_bg, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, [bounds, isGeolocation]);

  useEffect(() => {
    console.log("다이어리", diaries);
    console.log("다이어리", map);
    // 마커를 표시할 위치와 title 객체 배열입니다
    let positions = diaries.map((diary: DiaryType) => {
      return {
        title: diary.content,
        latlng: new kakao.maps.LatLng(diary.lat, diary.lng),
        fid: convertNumFormat(diary.flowerEmotion.fid),
      };
    });

    for (var i = 0; i < positions.length; i++) {
      var iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f${positions[i].fid}.png`);
      // 마커 이미지의 이미지 주소입니다
      // const iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f0${positions[i].fid}.png`);

      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(32, 32);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(iconRoute_bg, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
      marker.setMap(map);
    }
  }, [diaries, bounds, map]);

  return <SMap id="map" />;
};

export default BasicMap;
