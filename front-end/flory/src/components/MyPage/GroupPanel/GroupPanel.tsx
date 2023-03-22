import { useNavigate } from "react-router-dom";
import Post from "../../common/Post/Post";

import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";

function GroupPanel({}): JSX.Element {
  const navigate = useNavigate();
  return (
    <div>
      <div className="" onClick={() => navigate("/group/list")}>
        그룹 둘러보기
      </div>
      <Post title="가입한 그룹 목록" content={"hi"} />

      <GroupCreateModal />
    </div>
  );
}

export default GroupPanel;
