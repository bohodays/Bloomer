import React from "react";
import Avatar from "../../common/Avatar/Avatar";
import { SSection } from "./styles";

const GuestBookComment = (props: any) => {
  console.log(props);

  const commentData = props.info;

  return (
    <SSection deg={props.deg}>
      <div className="post-it">
        <p className="note">
          <div className="header">
            {/* 작성자 프로필 이미지 */}
            <Avatar size={"medium"} imgIdx={0} />
            {/* 작성자 이름 */}
            <p className="user-name">{commentData.name}</p>
          </div>
          {/* 작성 내용 */}
          <p className="comment">{commentData.comment}</p>
        </p>
      </div>
    </SSection>
  );
};

export default GuestBookComment;
