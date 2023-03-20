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
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../components/common/Avatar/Avatar";
import DiaryComment from "../../components/Diary/DiaryComment/DiaryComment";

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
  const onClick = () => {
    console.log("뒤로가기");
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
        {diary.commentList.map((comment: any) => {
          return <DiaryComment comment={comment} />;
        })}
      </div>
    </SMain>
  );
};
export default DiaryDetail;
