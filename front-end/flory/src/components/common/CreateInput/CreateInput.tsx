import React from "react";
import { STextarea } from "./styles";

function CreateInput({ contentInput, placeholder }: any): JSX.Element {
  return <STextarea placeholder={placeholder} ref={contentInput} />;
}

export default CreateInput;
