const { kakao } = window;

function KakaoMap() {
  const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
  const options = {
    // 지도 생성 기본 옵션
    center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심 좌표
    level: 3, // 지도의 레벨(확대, 축소 정도)
  };
  var map = new kakao.maps.Map(container!, options);

  return <div id="map" style={{ width: "100%", height: "400px" }}></div>;
}
export default KakaoMap;
