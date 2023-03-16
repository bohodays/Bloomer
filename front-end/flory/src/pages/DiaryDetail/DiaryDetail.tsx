import { useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/lotties/84142-gradient-background.json";
import StaticMap from "../../components/Map/StaticMap/StaticMap";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

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
    <div>
      <Lottie options={defaultOptions} height={200} width="100%" />
      <div onClick={onClickLocation}>
        <FontAwesomeIcon
          className="nav__item item__active"
          icon={faLocationDot}
        />
        {diary.address}
      </div>
      {mapView && <StaticMap lng={diary.lng} lat={diary.lat} />}
    </div>
  );
};
export default DiaryDetail;
