import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import DiaryCreateInput from "../../components/Diary/DiaryCreateInput/DiaryCreateInput";
import { SMain, SSection } from "./styles";

// mui
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

import GroupTagWrapper from "../../components/Diary/GroupTagWrapper/GroupTagWrapper";
import Button from "../../components/common/Button/Button";
import BasicModal from "../../components/common/Modal/BasicModal";

const DiaryCreate = () => {
  const fileInput = React.useRef<HTMLInputElement>(null);

  const handleAddImg = (e: React.MouseEvent<SVGSVGElement>) => {
    fileInput.current!.click();
  };

  return (
    <SMain>
      <SSection>
        {/* 전체 공개인 경우 height 60% 올리는 로직 추가하기! */}
        <DiaryCreateInput />
        <div className="input__wrapper">
          <button className="image__button">
            <FontAwesomeIcon
              className="image-input__icon"
              icon={faImage}
              onClick={handleAddImg}
            />
          </button>
          <input
            className="file__input"
            type="file"
            ref={fileInput}
            // 가능한 업로드 파일 형식 제한
            accept="image/jpg, image/jpeg, image/png"
          />
          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked />}
              label="전체 공개"
            />
          </FormGroup>
        </div>
        {/* 많아졌을 때 문제있음. API 연결하고 수정해야 됨 */}
        {/* 그룹 태그 */}
        <GroupTagWrapper />
        <div className="location__wrapper">
          <div>기록 위치</div>
          <div className="location">서울 강남구 테헤란로 212</div>
          <BasicModal
            modalButton={
              <button className="location-switch__button">위치 변경</button>
            }
          >
            <h3>위치 설정</h3>
          </BasicModal>
        </div>
      </SSection>
      <div className="bottom__wrapper">
        <Button
          contents="기록 완료"
          addStyle={{
            width: "90%",
            // margin: "2rem  0",
            height: "25%",
            background1: "rgb(46,33,98)",
            background2:
              "linear-gradient(90deg, rgba(132,120,185,1) 0%, rgba(46,33,98,1) 100%)",
            borderRadius: "16px",
            color: "#ffffff",
            fontSize: "1rem",
          }}
        />
      </div>
      <Navbar />
    </SMain>
  );
};

export default DiaryCreate;
