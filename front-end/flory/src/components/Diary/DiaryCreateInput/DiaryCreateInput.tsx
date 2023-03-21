import React from "react";
import { STextarea } from "./styles";

function DiaryCreateInput({ contentInput }: any): JSX.Element {
  return <STextarea placeholder="어떤 일이 있었나요?" ref={contentInput} />;
}

export default DiaryCreateInput;
