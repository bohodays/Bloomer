import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import Post from "../../common/Post/Post";
import Accordion from "../../../components/common/Accordion/Accordion";
import Avatar from "../../common/Avatar/Avatar";
import { SGroupPanel, SMember } from "./styles";

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
    
  // console.log(userGroupList);
  return (
    <SGroupPanel>
      <div className="BrowseGroup" onClick={() => navigate("/group/list")}>
        그룹 둘러보기
      </div>
      <Post title="가입한 그룹 목록" content={
        <div>
          {userGroupList.map((group:any) => (
            <Accordion
              key={group.teamId}
              title={`${group.name} (${group.userTeamList.length})`}
              contents={group.userTeamList.map((member: any) => (
                <SMember key={member.userId}>
                  <Avatar
                    size="small"
                    // tmpsrc={}
                    imgIdx={1}
                    key={1}
                    
                  />
                  <div className="memberName">{member.nickname}</div>
                </SMember>
            ))}
          />
          ))}
        </div>
      }
        addition={<GroupCreateModal />}
      />
    </SGroupPanel>
  );
}

export default GroupPanel;
