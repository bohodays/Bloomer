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
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../components/common/Avatar/Avatar";
import DiaryComment from "../../components/Diary/DiaryComment/DiaryComment";

const DiaryDetail = () => {
  const { diaryId } = useParams() as { diaryId: string };
  const [mapView, setMapView] = useState<boolean>(false);
  const onClickLocation = () => {
    setMapView(!mapView);
  };
  const onClick = () => {
    console.log("뒤로가기");
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
      {/* 헤더 영역 */}
      <div className="header_back">
        <div className="music_tag">
          <FontAwesomeIcon icon={faMusic} />
          <p>abstract world</p>
        </div>
        <div className="header-circle"></div>
        <Lottie
          style={{ position: "absolute", zIndex: -3 }}
          options={defaultOptions}
          height={200}
          width="100%"
        />
      </div>
      <DiaryFlower />
      <div className="header"></div>
      {/* 뒤로 가기 아이콘 */}
      <FontAwesomeIcon
        className="back-icon"
        icon={faArrowLeft}
        onClick={onClick}
      />
      <div className="content-box">
        <div className="flower-title">
          {diary.flowerEmotion.flowerName} - {diary.flowerEmotion.language}
        </div>

        {/* 다이어리 내용 영역 */}
        <img className="diary-img" src={diary.imgSrc} />
        <div className="content-header">
          <h2>{diary.flowerEmotion.smallCategory}했던 순간</h2>
          <p>
            {diary.createdTime.slice(0, 10) +
              " " +
              diary.createdTime.slice(11, 16)}
          </p>
        </div>
        <div className="content-diary">{diary.content}</div>

        {/* 지도 영역 */}
        <div className="location-tag" onClick={onClickLocation}>
          <FontAwesomeIcon icon={faLocationDot} />
          <p>{diary.address}</p>
        </div>
        {mapView && <StaticMap lng={diary.lng} lat={diary.lat} />}

        {/* 덧글 영역 */}
        {diary.commentList.map((comment) => {
          return <DiaryComment comment={comment} />;
        })}
      </div>
    </SMain>
  );
};
export default DiaryDetail;
