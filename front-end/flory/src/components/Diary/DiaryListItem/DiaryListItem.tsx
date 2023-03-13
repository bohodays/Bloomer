import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faImage, faLock } from "@fortawesome/free-solid-svg-icons";
import { SIcon, SItem, SMain } from "./styles";

import testFlower from "../../../assets/imgs/flower_icon/Violet Flower.png";

// "기쁨", "안정", "당황", "분노", "불안", "상처", "슬픔"

const DiaryListItem: React.FC<{ diary: any; page: string }> = (props) => {
  return (
    // <SMain page={props.page}>
    <SMain>
      {props.page === "diary" && (
        <img src={testFlower} alt="flower" className="flower-image-border" />
      )}
      <SItem>
        {props.page === "total" && (
          <img src={testFlower} alt="flower" className="flower-image" />
        )}
        <div>
          <div className="title-container">
            <SIcon icon={faLock} />
            {props.diary.emotion}했던 순간
          </div>
          <div className="content-container">{props.diary.content}</div>
          <div className="info-container">
            <SIcon icon={faImage} />
            <span className="comment-section">
              <SIcon icon={faComment} flip="horizontal" />
              <span>{props.diary.commentList.length}</span>
            </span>
            <div>{props.diary.createdTime}</div>
          </div>
        </div>
      </SItem>
    </SMain>
  );
};

export default DiaryListItem;
