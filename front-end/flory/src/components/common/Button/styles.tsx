import styled from "styled-components";

interface props {
  backgroundColor: string;
}

export const SButton = styled.button<props>`
  background-color: ${(props) => props.backgroundColor};
  height: 3rem;
`;
