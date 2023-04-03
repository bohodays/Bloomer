import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import Post from "../../common/Post/Post";
import Accordion from "../../../components/common/Accordion/Accordion";
import Avatar from "../../common/Avatar/Avatar";
import { SGroupPanel, SMember } from "./styles";
import { useSwipeable } from "react-swipeable";

import GroupCreateModal from "../GroupCreateModal/GroupCreateModal";
import GroupEditModal from "../GroupEditModal/GroupEditModal";
import { getGroupInfoAction, deleteGroupMemberAction } from "../../../redux/modules/group/group-action";

function GroupPanel({}): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const bgIcons: JSX.Element[] = [];

  const userGroupList = useAppSelector((state) => state.group.userGroupList);
  const userId = useAppSelector((state) => state.user.userData.userId);

  useEffect(() => {
    dispatch(getGroupInfoAction());
  }, []);

  for (var i = 1; i < 26; i++) {
    var img_icon;
    if (i < 10)
      img_icon = require(`../../../assets/imgs/flower_icon/icon_f0${i}.png`);
    else img_icon = require(`../../../assets/imgs/flower_icon/icon_f${i}.png`);
    bgIcons.push(<img className="icon_flower" key={i} src={img_icon} />);
  }

  const deleteAction = (groupId: any, userId: any) => {
    dispatch(deleteGroupMemberAction({teamId: groupId, userId})).then(() => {
      dispatch(getGroupInfoAction());
    });
  };

  const handleSwipeRight = () => {
    console.log("swiped right");
    setShowDeleteButton(false);
  };

  const handleSwipeLeft = () => {
    console.log("swiped left");
    setShowDeleteButton(true);
  }
  
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const swipeConfig = useSwipeable({
    onSwipedRight: handleSwipeRight,
    onSwipedLeft: handleSwipeLeft,
    trackMouse: true,
    delta: 50,
  });

  return (
    <SGroupPanel>
    <div className="BrowseGroup" onClick={() => navigate("/group/list")}>
      그룹 둘러보기
    </div>
    <Post
      title="가입한 그룹 목록"
      content={
        <div>
          {userGroupList.length === 0 ? (
            <div className="default">
              그룹에 가입해보세요
            </div>
          ) : (
            userGroupList.map((group: any, index: any) => (
              <Accordion
                key={index}
                title={`${group.name} (${group.userTeamList.length})`}
                contents={
                  <div>
                    {group.manager === 0 && (
                      <GroupEditModal
                        groupId={group.teamId}
                      />
                    )}
                    {group.manager === 1 && (
                      <div className="secessionGroup" onClick={() => deleteAction(group.teamId, userId)}>그룹 탈퇴</div>
                    )}
                    {group.userTeamList.map((member: any, index:any) => {
                      const random = Math.floor(Math.random() * bgIcons.length);
                      const handleMoveToOtherGarden = () => {
                        navigate(`/garden/${member.userId}`);
                      }
                      
                      return (
                        <SMember key={index} {...swipeConfig}>
                          {member.img && member.img.length > 2 ? (
                            <Avatar
                              size="small"
                              src={member.img}
                              imgIdx={"11"}
                              key={index}
                              onClick={handleMoveToOtherGarden}
                            />
                          ) : (
                            <Avatar size="small"
                                imgIdx={member.img} key={index}
                                onClick={handleMoveToOtherGarden}
                              />
                          )}
                          <br />
                          <div className="memberName">{member.nickname}</div>
                          {bgIcons[random]}
                          {showDeleteButton && group.manager === 0 &&  (
                            <button className="deleteButton" onClick={() => deleteAction(group.teamId, member.userId)}>
                              삭제
                            </button>
                          )}
                        </SMember>
                      );
                    })}
                  </div>
                }
              />
            ))
          )}
        </div>
      }
      addition={<GroupCreateModal />}
    />
  </SGroupPanel>
  )
}

export default GroupPanel
