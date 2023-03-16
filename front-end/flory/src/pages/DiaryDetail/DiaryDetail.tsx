import { useParams } from "react-router-dom";
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
  const { diaryId } = useParams() as { diaryId: string };
  const [mapView, setMapView] = useState<boolean>(false);
  const onClickLocation = () => {
    setMapView(!mapView);
  };

  const diary = {
    id: 1,
    content:
      "김 팀장님이 일을 잔뜩 주셔서 야근을 했다 ㅠㅠ 야근해서 슬펐지만 집 가는 길에 본 노을 풍경은 정말 예뻤다.",
    imgSrc:
      "https://cdn.eyesmag.com/content/uploads/posts/2022/08/08/main-ad65ae47-5a50-456d-a41f-528b63071b7b.jpg",
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
    commentList: [
      {
        id: 1,
        content: "댓글입니당",
        createdTime: "2023-03-15T06:17:33.145+00:00",
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
      },
      {
        id: 2,
        content: "댓글입니당22",
        createdTime: "2023-03-15T06:17:33.145+00:00",
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
      },
    ],
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
          {diary.commentList.map((comment) => {
            return <p>{comment.content}</p>;
          })}
        </div>
      </div>
    </SMain>
  );
};
export default DiaryDetail;
