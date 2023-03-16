import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/lotties/84142-gradient-background.json";
import StaticMap from "../../components/Map/StaticMap/StaticMap";
import { faLocationDot, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import DiaryFlower from "../../components/Diary/DiaryFlower/DiaryFlower";
import { SMain } from "./styles";
const DiaryDetail = () => {
  const { diaryId } = useParams() as { diaryId: string };
  const [mapView, setMapView] = useState<boolean>(false);
  const onClickLocation = () => {
    setMapView(!mapView);
  };

  const diary = {
    id: 1,
    content: "내용111",
    imgSrc: "path",
    address: "멀티캠퍼스 역삼",
    lat: "37.5128064",
    lng: "127.0284288",
    publicStatus: "그룹공개",
    x: "10",
    y: "10",
    z: "10",
    createdTime: "2023-03-15T06:15:51.715+00:00",
    garden: {
      createdDate: "2023-03-15T15:15:36.043595",
      modifiedDate: "2023-03-15T15:15:36.043595",
      id: 1,
      path: null,
      deadLine: "2023-04-15T15:15:36.036634",
      member: {
        createdDate: "2023-03-15T15:15:03.580057",
        modifiedDate: "2023-03-15T15:15:03.580057",
        userId: 1,
        nickname: "jisoo",
        password:
          "$2a$10$J/WXZXQLRYcrNvHjzEmAweEBMlKeJVwhAuRtzhKAdrBYPale8TpsK",
        img: "기본",
        email: "user1",
        refreshToken: null,
        authority: "ROLE_USER",
      },
      music: null,
    },
    flowerEmotion: {
      fid: 1,
      eid: 1,
      flowerName: "크로커스",
      language: "믿는 기쁨",
      largeCategory: "기쁨",
      smallCategory: "기쁨",
    },
    commentList: null,
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
        <div style={{ color: "white", marginBottom: 7 }}>
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
      <DiaryFlower />
      <div className="header" style={{ height: "200px" }}></div>
      <div>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <p>으아아악</p>
        <div onClick={onClickLocation}>
          <FontAwesomeIcon icon={faLocationDot} />
          {diary.address}
        </div>
      </div>
      {mapView && <StaticMap lng={diary.lng} lat={diary.lat} />}
    </SMain>
  );
};
export default DiaryDetail;
