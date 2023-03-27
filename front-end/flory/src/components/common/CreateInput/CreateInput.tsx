import React from "react";
import { STextarea } from "./styles";

function CreateInput({ contentInput, placeholder, page }: any): JSX.Element {
  return <STextarea page={page} placeholder={placeholder} ref={contentInput} />;
}

export default CreateInput;
