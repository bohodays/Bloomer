import { Checkbox } from "@mui/material";
import { useState } from "react";
import { GroupType } from "../../../models/Group/GroupType";
import { useAppSelector } from "../../../redux/store.hooks";
import Button from "../../common/Button/Button";
import BasicModal from "../../common/Modal/BasicModal";

const MapFilterModal = () => {
  const userGroupList = useAppSelector((state) => state.group.userGroupList);

  // 체크 관리
  const [check, setCheck] = useState(Array(userGroupList.length).fill(true));
  const handleCheck = (idx: number) => {
    setCheck(
      check.map((c, i) => {
        if (i === idx) {
          return !c;
        } else {
          return c;
        }
      })
    );
  };

  return (
    <BasicModal modalButton={<button>모달 열기</button>}>
      <h3>그룹 설정</h3>
      <div style={{ width: "100%" }}>
        {userGroupList.map((group: GroupType, idx) => (
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
            <Checkbox
              // color="secondary"
              checked={check[idx]}
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
