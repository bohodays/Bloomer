import React, { useEffect } from "react";
import useGeolocation from "react-hook-geolocation";
import { SMap } from "./styles";

declare global {
  interface Window {
    kakao: any;
  }
}

function TestMap({ func }: any): JSX.Element {
  const geolocation = useGeolocation();
  console.log(geolocation.latitude);
  console.log(geolocation.longitude);
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

    // 장소 검색 객체를 생성합니다
    let ps = new window.kakao.maps.services.Places();

    // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성
    const infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });

    // 키워드 검색 완료 시 호출되는 콜백함수 입니다
    function placesSearchCB(data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();

        for (var i = 0; i < data.length; i++) {
          displayMarker(data[i]);
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    }

    // 지도에 마커를 표시하는 함수입니다
    function displayMarker(place: any) {
      // 마커를 생성하고 지도에 표시합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        infowindow.setContent(
          '<div style="padding:5px;font-size:12px;">' +
            place.place_name +
            "</div>"
        );
        console.log(place);
        func.setPlace(place.place_name);
        infowindow.open(map, marker);
      });
    }

    ps.keywordSearch(func.keyword, placesSearchCB);

    // ========================================================================

    // 주소-좌표 변환 객체를 생성합니다
    var geocoder = new kakao.maps.services.Geocoder();
    // 마커 이미지의 이미지 크기 입니다
    var imageSize = new kakao.maps.Size(24, 35);
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
    // 마커 이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성합니다
    var yellowMarker = new kakao.maps.Marker({
      map: map, // 마커를 표시할 지도
      position: map.getCenter(), // 마커를 표시할 위치
      image: markerImage, // 마커 이미지
    });

    function searchDetailAddrFromCoords(coords: any, callback: any) {
      // 좌표로 법정동 상세 주소 정보를 요청합니다
      geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
    }
    // 지도를 클릭했을 때 클릭 위치 좌표에 대한 주소정보를 표시하도록 이벤트를 등록합니다
    kakao.maps.event.addListener(map, "click", function (mouseEvent: any) {
      searchDetailAddrFromCoords(
        mouseEvent.latLng,
        function (result: any, status: any) {
          if (status === kakao.maps.services.Status.OK) {
            var detailAddr = !!result[0].road_address
              ? "<div>도로명주소 : " +
                result[0].road_address.address_name +
                "</div>"
              : "";

            func.setPlace(result[0].road_address.address_name);
            console.log(result[0]);
            var content = '<div class="bAddr">' + detailAddr + "</div>";

            // 마커를 클릭한 위치에 표시합니다
            yellowMarker.setPosition(mouseEvent.latLng);
            yellowMarker.setMap(map);

            // 인포윈도우에 클릭한 위치에 대한 법정동 상세 주소정보를 표시합니다
            infowindow.setContent(content);
            infowindow.open(map, yellowMarker);
          }
        }
      );
    });

    // 지도 범위 가져오기
    let bounds = map.getBounds();
    bounds.toString(); // "((33.44843745687413, 126.56798357402302), (33.452964008206735, 126.57333898904454))"
  }, [isGeolocation, func.keyword]);

  return <SMap id="map" />;
}

export default TestMap;
