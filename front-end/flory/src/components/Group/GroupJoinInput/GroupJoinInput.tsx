import React from "react";
import { STextarea } from "./styles";

const GroupJoinInput = ({ setContent }: any) => {
  const handleChange = (e: any) => {
    setContent(e.target.value);
  };

  return (
    <STextarea
      placeholder="승인 요청을 위한 가입 메시지를 작성해 주세요"
      onChange={handleChange}
    />
  );
};

export default GroupJoinInput;
