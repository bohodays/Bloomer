import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faComment, faImage, faLock } from "@fortawesome/free-solid-svg-icons"
import { SIcon, SItem, SMain } from "./styles"

import testFlower from "../../../assets/imgs/flower_icon/Violet Flower.png"

// "기쁨", "안정", "당황", "분노", "불안", "상처", "슬픔"
const convertTimeFormat = (date: Date) => {
  const target = new Date(date)
  const hour = target.getHours()
  const minute = target.getMinutes()
  return (
    hour.toString().padStart(2, "0") + ":" + minute.toString().padStart(2, "0")
  )
}

const DiaryListItem: React.FC<{ diary: any; page: string }> = (props) => {
  // 다이어리 페이지 / 커뮤니티페이지 구분
  const isDiaryPage = props.page === "diary"
  const isPrivate = props.diary.publicStatus === "비공개"
  const isContainImage = props.diary.imgSrc !== ""
  const time = convertTimeFormat(props.diary.createdTime)

  return (
    <SMain>
      {isDiaryPage && (
        <>
          <img src={testFlower} alt="flower" className="flower-image-border" />
          <div className="line"></div>
        </>
      )}
      <SItem isDiaryPage={isDiaryPage}>
        {!isDiaryPage && (
          <img src={testFlower} alt="flower" className="flower-image" />
        )}
        <div>
          <div className="title-container">
            {isPrivate && <SIcon icon={faLock} />}
            {props.diary.emotion}했던 순간
          </div>
          <div className="content-container">{props.diary.content}</div>
          <div className="info-container">
            {isContainImage && <SIcon icon={faImage} />}
            <span className="comment-section">
              <SIcon icon={faComment} flip="horizontal" />
              <span>{props.diary.commentList.length}</span>
            </span>
            <div>{time}</div>
          </div>
        </div>
      </SItem>
    </SMain>
  )
}

export default DiaryListItem
