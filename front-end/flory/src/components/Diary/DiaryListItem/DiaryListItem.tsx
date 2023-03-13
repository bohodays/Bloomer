import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faImage, faLock } from "@fortawesome/free-solid-svg-icons";

export interface IProps {
  isContainMainImg: boolean;
  isPrivate: boolean;
  isContainImg: boolean;
  addStyle?: {
    position?: string;
    top?: string;
    right?: string;
    padding?: string;
    margin?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
  onClick?: () => void;
}

const DiaryListItem: React.FC<{ diary: any; page: string }> = (props) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon={faLock} />
        <div>{props.diary.emotion}했던 순간</div>
      </div>
      <div>{props.diary.title}</div>
      <div>{props.diary.content}</div>
      <div style={{ display: "flex" }}>
        <FontAwesomeIcon icon={faImage} />
        <FontAwesomeIcon icon={faComment} flip="horizontal" />
        <div>{props.diary.commentList.length}</div>
        <div>{props.diary.createdTime}</div>
      </div>
    </div>
  );
};

export default DiaryListItem;
