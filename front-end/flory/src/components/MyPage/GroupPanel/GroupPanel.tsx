import Post from "../../common/Post/Post";

import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";

function GroupPanel({}): JSX.Element {
  return (
    <div>
      <div className="">그룹 둘러보기</div>
      <Post title="가입한 그룹 목록" content={"hi"} />

      <GroupCreateModal />
    </div>
  );
}

export default GroupPanel;
