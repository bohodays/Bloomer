import React, { FC } from "react";
import { SButton } from "./styles";

export interface ButtonProps {
  content?: string;
  backgroundColor?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Button: FC<ButtonProps> = ({
  content,
  backgroundColor,
  width,
  height,
  borderRadius,
}) => {
  return <SButton backgroundColor={backgroundColor}>{content}</SButton>;
};

export default Button;
