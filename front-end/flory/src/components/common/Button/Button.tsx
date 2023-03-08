import React from "react";
import { SButton } from "./styles";

export interface IProps {
  type?: string;
  addStyle?: {
    margin?: string;
    fontSize?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    background1?: string;
    background2?: string;
    color?: string;
    borderRadius?: string;
    boxShadow?: string;
  };
  contents: string;
  onClick?: () => void;
}

const Button = (props: IProps) => {
  const { type, addStyle = {}, contents, onClick } = props;

  return (
    <SButton type={type} addStyle={addStyle} onClick={onClick}>
      {contents}
    </SButton>
  );
};

export default Button;
