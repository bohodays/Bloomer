import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faImage, faLock } from "@fortawesome/free-solid-svg-icons";
import { SIcon, SItem, SMain } from "./styles";

import testFlower from "../../../assets/imgs/flower_icon/Violet Flower.png";
import { DiaryType } from "../../../models/diary/diaryType";
import {
  convertContentToMaxLength,
  convertNumFormat,
  convertTimeFormat,
  convertEmotionFormat,
} from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const DiaryListItem: React.FC<{ diary: DiaryType; page: string }> = (props) => {
  // 다이어리 페이지 / 커뮤니티페이지 구분
  const isDiaryPage = props.page === "diary";
  const isPrivate = props.diary.publicStatus === "비공개";
  const isContainImage = props.diary.imgSrc !== "";
  const time = convertTimeFormat(props.diary.createdTime);
  const emotion = convertEmotionFormat(props.diary.flowerEmotion.largeCategory);
  const content = convertContentToMaxLength(props.diary.content);
  const flowerIdx = convertNumFormat(props.diary.flowerEmotion.fid);
  const iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f${flowerIdx}.png`);

  const navigate = useNavigate();
  const handleMoveToDetail = (diaryId: number, item?: any) => {
    navigate(`/diary/${diaryId}`, {
      state: {
        diaryData: item,
      },
    });
  };

  return (
    <SMain
      onClick={() => {
        handleMoveToDetail(props.diary.id, props.diary);
      }}
    >
      {isDiaryPage && (
        <img src={iconRoute_bg} alt="flower" className="flower-image-border" />
      )}
      <SItem isDiaryPage={isDiaryPage}>
        {!isDiaryPage && (
          <img src={iconRoute_bg} alt="flower" className="flower-image" />
        )}
        <div className="wrapper">
          <div className="title-container">
            {isPrivate && <SIcon icon={faLock} />}
            {emotion} 순간
          </div>
          <div className="content-container">{content}</div>
          <div className="info-container">
            <div>{isContainImage && <SIcon icon={faImage} />}</div>
            <span className="comment-section">
              <SIcon icon={faComment} flip="horizontal" />
              <span>
                {props.diary.commentList ? props.diary.commentList.length : 0}
              </span>
            </span>
            <div>{time}</div>
          </div>
        </div>
      </SItem>
    </SMain>
  );
};

export default DiaryListItem;
