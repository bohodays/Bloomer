import styled, { css } from "styled-components";

export const SButton = styled.button<any>`
  ${(props) => {
    return css`
      font-size: ${props.addStyle.fontSize};
      width: ${props.addStyle.width};
      height: ${props.addStyle.height};
      background-color: ${props.addStyle.backgroundColor};
      background: ${props.addStyle.background1};
      background: ${props.addStyle.background2};
      color: ${props.addStyle.color};
      border-radius: ${props.addStyle.borderRadius};
      box-shadow: ${props.addStyle.boxShadow};
    `;
  }}
`;
