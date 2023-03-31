import { useLocation, useNavigate, useParams } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/imgs/lotties/84142-gradient-background.json";
import StaticMap from "../../components/Map/StaticMap/StaticMap";
import { faLocationDot, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState, useRef } from "react";
import DiaryFlower from "../../components/Diary/DiaryFlower/DiaryFlower";
import { SMain } from "./styles";
import { borderRadius } from "@mui/system";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Avatar from "../../components/common/Avatar/Avatar";
import DiaryComment from "../../components/Diary/DiaryComment/DiaryComment";
import BackButton from "../../components/common/BackButton/BackButton";
import CreateInput from "../../components/common/CreateInput/CreateInput";
import CommentInput from "../../components/common/CommentInput/CommentInput";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import {
  createCommentAction,
  deleteDiaryAction,
  getDetailDiary,
} from "../../redux/modules/diary";
import { DiaryType } from "../../models/diary/diaryType";
import SettingPopover from "../../components/common/SettingPopover/SettingPopover";
import { convertMusicFormat } from "../../utils/utils";
import BasicModal from "../../components/common/Modal/BasicModal/BasicModal";
import { FormControlLabel, FormGroup, Radio } from "@mui/material";
import GroupItems from "../../components/Diary/GroupItems/GroupItems";

let isInitial = true;
const DiaryDetail = () => {
  // 정원에서 해당 꽃을 누르면 이 페이지(일기 상세)로 이동하며
  // useNavigate로 일기의 id를 전달한다.
  // 이 페이지에서는 useLocation을 통해 전달된 데이터를 받는다.
  const location = useLocation();
  const diaryId = Number(location.pathname.slice(7));
  const backpage = location.state ? location.state.page : null;
  const initialDiary: DiaryType = {
    id: 0,
    content: "",
    imgSrc: "",
    lat: 0,
    lng: 0,
    publicStatus: "전체공개",
    x: 0,
    y: 0,
    z: 0,
    address: "",
    createdTime: "",
    garden: null,
    flowerEmotion: {
      fid: 0,
      eid: 0,
      flowerName: "",
      language: "",
      largeCategory: "",
      smallCategory: "",
    },
    groupList: [],
    musicTitle: "",
    commentList: [],
  };
  const [diary, setDiary] = useState<DiaryType>(initialDiary);
  const userId = useAppSelector((state) => state.user.userData.userId);
  const navigate = useNavigate();
  const commentInput = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const [mapView, setMapView] = useState<boolean>(false);

  let isSelf = false;
  if (diary !== initialDiary) {
    if (diary.garden?.member.userId === userId) {
      isSelf = true;
    }
  }

  const onClickLocation = () => {
    setMapView(!mapView);
  };

  const handleGoBack = () => {
    // 뒤로가기
    if (backpage) {
      navigate(backpage);
    } else {
      navigate(-1);
    }
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const createCommentHandler = () => {
    const commentData = {
      content: commentInput.current?.value,
      uid: userId,
      did: diary.id,
    };
    dispatch(createCommentAction(commentData)).then(() => {
      dispatch(getDetailDiary(diaryId)).then((data: any) => {
        setDiary(data.payload.response);
      });
      if (commentInput.current) {
        commentInput.current.value = "";
      }
    });
  };

  const deleteAction = async () => {
    alert(`해당 일기를 삭제하시겠습니까?`);
    await dispatch(deleteDiaryAction(diaryId));
    navigate("/garden");
  };

  const editAction = () => {};

  const updateDiary = () => {
    dispatch(getDetailDiary(diaryId)).then((data: any) => {
      setDiary(data.payload.response);
    });
  };

  useEffect(() => {
    if (diary === initialDiary) {
      // isInitial = false;
      updateDiary();
    }
  }, []);

  return (
    <SMain>
      {/* 헤더 영역 */}

      <div className="header_back">
        <div className="music_tag">
          <FontAwesomeIcon icon={faMusic} />
          <p>{convertMusicFormat(diary.musicTitle)}</p>
        </div>
        <div className="header-circle"></div>
        <Lottie
          style={{ position: "absolute", zIndex: -3 }}
          options={defaultOptions}
          height={200}
          width="100%"
        />
      </div>
      <DiaryFlower flower={diary.flowerEmotion} />
      <div className="header"></div>
      {/* 뒤로 가기 아이콘 */}
      <BackButton color="white" onClickAction={handleGoBack} />
      <div className="content-box">
        <div className="flower-title">
          {diary.flowerEmotion.flowerName} - {diary.flowerEmotion.language}
        </div>
        {/* 본인 글일 때 수정 삭제 하는 부분 */}
        {isSelf && diary && (
          <div className="setting">
            <SettingPopover
              color="black"
              deleteAction={deleteAction}
              editAction={editAction}
            />
          </div>
        )}

        {/* 다이어리 내용 영역 */}
        <img className="diary-img" src={diary.imgSrc} alt="img-loading,," />
        <h3>{diary.garden?.member.nickname}</h3>
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
        {mapView && (
          <StaticMap
            lng={diary.lng}
            lat={diary.lat}
            fid={diary.flowerEmotion.fid}
          />
        )}

        {/* 덧글 영역 */}
        <CommentInput
          contentInput={commentInput}
          placeholder="덧글을 입력해주세요"
          createCommentHandler={createCommentHandler}
        />
        {diary.commentList &&
          diary.commentList.map((comment: any, idx: number) => {
            return (
              <DiaryComment
                comment={comment}
                key={idx}
                updateDiary={updateDiary}
              />
            );
          })}
      </div>
    </SMain>
  );
};
export default DiaryDetail;
