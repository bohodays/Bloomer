import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import Post from "../../common/Post/Post";
import Accordion from "../../../components/common/Accordion/Accordion";

import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import { getGroupInfoAction } from "../../../redux/modules/group/group-action";

let isInital = true;
function GroupPanel({}): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  // const [userGroupList, setUserGroupList] = useState(null);``
  
  const userGroupList = useAppSelector((state) => state.group.userGroupList);
  useEffect(() => {
    if (isInital) {
      isInital = false;
      dispatch(getGroupInfoAction())
    }
    
  }, [dispatch]);
    
  return (
    <div>
      <div className="" onClick={() => navigate("/group/list")}>
        그룹 둘러보기
      </div>
      <Post title="가입한 그룹 목록" content={
        <div>
          {userGroupList.map((group:any) => (
            <Accordion key={group.groupId} title={group.name} contents={group.info} />
          ))}
        </div>
      } 
      />
      <GroupCreateModal />
    </div>
  );
}

export default GroupPanel;
