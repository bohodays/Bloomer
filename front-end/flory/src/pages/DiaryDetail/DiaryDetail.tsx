import { useLocation, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/lotties/84142-gradient-background.json";
import StaticMap from "../../components/Map/StaticMap/StaticMap";
import { faLocationDot, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DiaryFlower from "../../components/Diary/DiaryFlower/DiaryFlower";
import { SMain } from "./styles";
import { borderRadius } from "@mui/system";
const DiaryDetail = () => {
  // 정원에서 해당 꽃을 누르면 이 페이지(일기 상세)로 이동하며
  // useNavigate로 일기의 id를 전달한다.
  // 이 페이지에서는 useLocation을 통해 전달된 데이터를 받는다.
  const location = useLocation();
  const diary = location.state.diaryData;

  const [mapView, setMapView] = useState<boolean>(false);
  const onClickLocation = () => {
    setMapView(!mapView);
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <SMain>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "200px",
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          flexDirection: "column",
        }}
      >
        <div style={{ color: "white", marginBottom: 7, userSelect: "none" }}>
          <FontAwesomeIcon icon={faMusic} />
          abstract world
        </div>
        <div
          className="circle"
          style={{
            zIndex: -2,
            width: "200px",
            height: "160px",
            borderRadius: "200px 200px 0 0",
          }}
        ></div>

        <Lottie
          style={{ position: "absolute", zIndex: -3 }}
          options={defaultOptions}
          height={200}
          width="100%"
        />
      </div>
      <DiaryFlower flower={diary.flowerEmotion} />
      <div className="header" style={{ height: "200px" }}></div>
      <div style={{ margin: "50px 5%" }}>
        <img
          style={{ width: "100%", borderRadius: "15px" }}
          src={diary.imgSrc}
        />
        <h2>{diary.flowerEmotion.smallCategory}했던 순간</h2>
        <p>{diary.createdTime}</p>

        <p>{diary.content}</p>

        <div onClick={onClickLocation}>
          <FontAwesomeIcon icon={faLocationDot} />
          {diary.address}
        </div>
        {mapView && <StaticMap lng={diary.lng} lat={diary.lat} />}
        <div>
          {diary.commentList.map((comment: any) => {
            return <p>{comment.content}</p>;
          })}
        </div>
      </div>
    </SMain>
  );
};
export default DiaryDetail;
