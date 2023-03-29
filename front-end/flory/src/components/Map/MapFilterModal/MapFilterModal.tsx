import { Checkbox } from "@mui/material";
import { useState } from "react";
import { GroupType } from "../../../models/Group/GroupType";
import { getDiaryWithGroup } from "../../../redux/modules/diary";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import Button from "../../common/Button/Button";
import BasicModal from "../../common/Modal/BasicModal";
import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faPenToSquare,
  faHome,
  faListUl,
  faLocationDot,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
const MapFilterModal = ({ teamIdList }: any): JSX.Element => {
  // const userGroupList = useAppSelector((state) => state.group.userGroupList);
  const dispatch = useAppDispatch();
  // 체크 관리
  const handleCheck = (idx: number) => {};

  const dispatchAction = () => {};

  return (
    <BasicModal
      modalButton={<button>모달 열기</button>}
      dispatchAction={dispatchAction}
    >
      <h3>그룹 설정</h3>
      <div style={{ width: "100%" }}>
        {teamIdList &&
          teamIdList.map((group: any, idx: number) => (
            <div
              key={idx}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {group.name}

              <FontAwesomeIcon
                // className={initialList[idx] ? "active" : "disabled"}
                icon={faSquareCheck}
                onClick={() => {
                  handleCheck(idx);
                }}
              />
            </div>
          ))}
      </div>
    </BasicModal>
  );
};
export default MapFilterModal;
