import { JsxElement } from "typescript";
import Avatar from "../../common/Avatar/Avatar";
import { SMain } from "./styles";
function DiaryComment({ comment }: any): JSX.Element {
  return (
    <SMain style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", marginBottom: "0.5rem" }}>
        <Avatar size="small" />
        <p style={{ marginLeft: "0.5rem", color: "#612FAB" }}>
          {comment.member.nickname}
        </p>
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
