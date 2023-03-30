import { useNavigate } from "react-router-dom";
import { JsxElement } from "typescript";
import { useAppSelector } from "../../../redux/store.hooks";
import Avatar from "../../common/Avatar/Avatar";
import SettingPopover from "../../common/SettingPopover/SettingPopover";

import { SMain } from "./styles";
function DiaryComment({ comment, diaryUserId }: any): JSX.Element {
  const navigate = useNavigate();
  const userId = useAppSelector((store) => store.user.userData.userId);
  const handleMoveToOtherGarden = () => {
    navigate(`/garden/${comment.member.userId}`);
  };

  const editAction = () => {};
  const deleteAction = () => {};

  return (
    <SMain style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <Avatar size="small" onClick={handleMoveToOtherGarden} />
        <p
          style={{
            marginLeft: "0.5rem",
            color: "#612FAB",
            marginRight: "auto",
          }}
          onClick={handleMoveToOtherGarden}
        >
          {comment.member.nickname}
        </p>
        {comment.member.userId === userId && (
          <SettingPopover editAction={editAction} deleteAction={deleteAction} />
        )}
      </div>
      <p>{comment.content}</p>
      <p
        style={{
          justifySelf: "end",
          alignSelf: "end",
          fontSize: "small",
          color: "#612FAB",
        }}
      >
        {comment.createdTime.slice(0, 10) +
          " " +
          comment.createdTime.slice(11, 16)}
      </p>
    </SMain>
  );
}

export default DiaryComment;
