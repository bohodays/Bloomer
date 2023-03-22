import React from "react";
import { STextarea } from "./styles";

const GroupJoinInput = ({ contentInput }: any) => {
  return (
    <STextarea
      placeholder="승인 요청을 위한 가입 메시지를 작성해 주세요"
      ref={contentInput}
    />
  );
};

export default GroupJoinInput;
