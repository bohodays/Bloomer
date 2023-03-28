import BasicModal from "../../common/Modal/BasicModal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateInput from "../../common/CreateInput/CreateInput";
import { useRef, useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import CreateInputLine from "../../common/CreateInputLine/CreateInputLine";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../../redux/store.hooks";
import { GroupCreateType } from "../../../models/Group/groupCreateType";
import {
  createGroupAction,
  getGroupInfoAction,
} from "../../../redux/modules/group";

function GroupCreateModal(): JSX.Element {
  const [groupName, setGroupName] = useState("");
  const groupNameInput = useRef<HTMLInputElement>(null);
  const contentInput = useRef<HTMLInputElement>(null);
  const [isOpenData, setIsOpenData] = useState(true);
  const userInfo = useAppSelector((state: any) => state.user.userData);
  const dispatch = useAppDispatch();

  const handleChangeSwitch = (e: any) => {
    setIsOpenData(e.target.checked);
  };
  const initializeInput = () => {
    setGroupName("");
    if (contentInput.current) {
      contentInput.current.value = "";
    }
    setIsOpenData(true);
  };

  return (
    <BasicModal
      modalButton={<FontAwesomeIcon icon={faPlus} />}
      dispatchAction={async () => {
        const contentInputVal = contentInput.current?.value;

        if (groupName.length === 0) {
          groupNameInput.current?.focus();
          console.log(groupNameInput);
          return false;
        } else if (!contentInputVal || contentInputVal.trim().length === 0) {
          contentInput.current?.focus();
          return false;
        } else {
          const groupCreateData: GroupCreateType = {
            name: groupName,
            info: contentInput.current!.value,
            open: isOpenData,
            hostId: userInfo.userId,
          };
          await dispatch(createGroupAction(groupCreateData)).then(() => {
            // 가입 생성 완료 후 본인 가입 그룹 목록 다시 불러와야 함
            dispatch(getGroupInfoAction());
          });
          // input값 초기화
          initializeInput();
          return true;
        }
      }}
    >
      <h3>새 그룹 만들기</h3>
      <CreateInputLine
        icon={faUserGroup}
        placeholder="그룹 이름을 입력해주세요"
        contentInput={groupName}
        setContentInput={setGroupName}
        refVal={groupNameInput}
      />

      <CreateInput
        contentInput={contentInput}
        placeholder="그룹 소개말을 입력해주세요"
      />
      <div
        style={{
          display: "flex",
          width: "90%",
          justifyContent: "space-between",
        }}
      >
        <div>
          <p>공개 여부</p>
          <p style={{ fontSize: "small" }}>
            가입 승인 없이 모든 사람이 가입할 수 있게 합니다.
          </p>
        </div>
        <FormControlLabel
          onChange={handleChangeSwitch}
          control={<Switch checked={isOpenData} />}
          label=""
        />
      </div>
    </BasicModal>
  );
}

export default GroupCreateModal;
