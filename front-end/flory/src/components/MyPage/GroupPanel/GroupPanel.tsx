import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import Post from "../../common/Post/Post";
import Accordion from "../../../components/common/Accordion/Accordion";
import Avatar from "../../common/Avatar/Avatar";
import { SGroupPanel, SMember } from "./styles";

import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import GroupEditModal from "../GroupEditModal/GroupEditModal";
import { getGroupInfoAction } from "../../../redux/modules/group/group-action";

function GroupPanel({}): JSX.Element {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  // const [userGroupList, setUserGroupList] = useState(null);``
  const bgIcons: JSX.Element[] = []

  const userGroupList = useAppSelector((state) => state.group.userGroupList)

  useEffect(() => {
    dispatch(getGroupInfoAction())
  }, [])

  for (var i = 1; i < 26; i++) {
    var img_icon
    if (i < 10)
      img_icon = require(`../../../assets/imgs/flower_icon/icon_f0${i}.png`)
    else img_icon = require(`../../../assets/imgs/flower_icon/icon_f${i}.png`)
    bgIcons.push(<img className="icon_flower" key={i} src={img_icon} />)
  }

  // console.log(userGroupList);
  return (
    <SGroupPanel>
      <div className="BrowseGroup" onClick={() => navigate("/group/list")}>
        그룹 둘러보기
      </div>
      <Post
        title="가입한 그룹 목록"
        content={
          <div>
            {userGroupList.map((group: any, index:any) => (
              <Accordion
                key={index}
                title={`${group.name} (${group.userTeamList.length})`}
                contents={
                  <div>
                    {group.manager === 0 && (
                      <GroupEditModal
                        groupId={group.teamId}
                      />
                      // <div className="BrowseGroup" onClick={() => navigate("/group/list")}>그룹 설정</div>
                    )}
                    {group.userTeamList.map((member: any, index:any) => {
                      const random = Math.floor(Math.random() * bgIcons.length);
                      return (
                        <SMember key={index}>
                          {member.img && member.img.length > 2 ? (
                            <Avatar
                              size="small"
                              src={member.img}
                              imgIdx={"11"}
                              key={index}
                            />
                          ) : (
                            <Avatar size="small" imgIdx={member.img} key={index} />
                          )}
                          <br />
                          <div className="memberName">{member.nickname}</div>
                          {bgIcons[random]}
                        </SMember>
                      );
                    })}
                  </div>
                }
              />
            ))}
          </div>
        }
        addition={<GroupCreateModal />}
      />
    </SGroupPanel>
  )
}

export default GroupPanel
