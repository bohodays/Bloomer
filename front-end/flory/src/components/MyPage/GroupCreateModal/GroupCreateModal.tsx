import BasicModal from "../../common/Modal/BasicModal";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CreateInput from "../../common/CreateInput/CreateInput";
import { useRef } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

function GroupCreateModal({}): JSX.Element {
  const contentInput = useRef<HTMLInputElement>(null);
  return (
    <BasicModal modalButton={<FontAwesomeIcon icon={faPlus} />}>
      <h1>새 그룹 만들기</h1>
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
            {" "}
            가입 승인 없이 모든 사람이 가입할 수 있게 합니다.
          </p>
        </div>
        <FormControlLabel control={<Switch defaultChecked />} label="" />
      </div>
    </BasicModal>
  );
}

export default GroupCreateModal;
