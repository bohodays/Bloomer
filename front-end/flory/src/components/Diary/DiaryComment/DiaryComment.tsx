import { useNavigate } from "react-router-dom"
import { JsxElement } from "typescript"
import { deleteCommentAction } from "../../../redux/modules/diary"
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks"
import Avatar from "../../common/Avatar/Avatar"
import SettingPopover from "../../common/SettingPopover/SettingPopover"

import { SMain } from "./styles"
function DiaryComment({ comment, updateDiary }: any): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const userId = useAppSelector((store) => store.user.userData.userId)
  const handleMoveToOtherGarden = () => {
    navigate(`/garden/${comment.member.userId}`)
  }

  const deleteAction = () => {
    dispatch(deleteCommentAction(comment.id)).then(() => {
      updateDiary()
    })
  }

  return (
    <SMain style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <Avatar
          pointer="pointer"
          size="small"
          onClick={handleMoveToOtherGarden}
        />
        <p
          style={{
            marginLeft: "0.5rem",
            color: "#612FAB",
            marginRight: "auto",
            cursor: "pointer",
          }}
          onClick={handleMoveToOtherGarden}
        >
          {comment.member.nickname}
        </p>
        {comment.member.userId === userId && (
          <SettingPopover deleteAction={deleteAction} />
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
  )
}

export default DiaryComment
