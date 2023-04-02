import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faImage, faLock } from "@fortawesome/free-solid-svg-icons"
import { SIcon, SItem, SMain } from "./styles"

import testFlower from "../../../assets/imgs/day_background.png"
import { DiaryType } from "../../../models/diary/diaryType"
import {
  convertContentToMaxLength,
  convertNumFormat,
  convertTimeFormat,
  convertEmotionFormat,
} from "../../../utils/utils"
import { useNavigate } from "react-router-dom"
import Avatar from "../../common/Avatar/Avatar"

const DiaryListItem: React.FC<{ diary: DiaryType; page: string }> = (props) => {
  // 다이어리 페이지 / 커뮤니티페이지 구분
  const isDiaryPage = props.page === "diary"
  const isPrivate = props.diary.publicStatus === "비공개"
  const isContainImage = props.diary.imgSrc !== null
  const time = convertTimeFormat(props.diary.createdTime)
  const emotion = convertEmotionFormat(props.diary.flowerEmotion.largeCategory)
  const content = convertContentToMaxLength(props.diary.content)
  const flowerIdx = convertNumFormat(props.diary.flowerEmotion.fid)
  const iconRoute_bg = require(`../../../assets/imgs/flower_bgicon/bgicon_f${flowerIdx}.png`)

  const navigate = useNavigate()
  const handleMoveToDetail = (diaryId: number, item?: any) => {
    navigate(`/diary/${diaryId}`)
  }

  return (
    <SMain
      onClick={() => {
        handleMoveToDetail(props.diary.id, props.diary)
      }}
    >
      {isDiaryPage && (
        <img src={iconRoute_bg} alt="flower" className="flower-image-border" />
      )}
      <SItem isDiaryPage={isDiaryPage}>
        <div className="wrapper">
          <div className="title-container">
            {!isDiaryPage && (
              <img src={iconRoute_bg} alt="flower" className="flower-image" />
            )}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              {!isDiaryPage && (
                <p style={{ fontSize: "0.75rem" }}>
                  {props.diary.garden?.member.nickname}
                </p>
              )}
              {isPrivate && <SIcon icon={faLock} />}
              {emotion} 순간
            </div>
          </div>
          {/* 이미지 경로 받았을 때 수정되어야 함! */}
          {/* {isContainImage && (
            <img src={testFlower} alt="img" className="img-container" />
          )} */}
          <div className="content-container">{content}</div>
          <div className="info-container">
            {isContainImage && <SIcon icon={faImage} />}
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
  )
}

export default DiaryListItem
