import styled from "styled-components";

export const SButton = styled.button<any>`
  left: 0;
  top: 0;
  position: absolute;
  .back-icon {
    cursor: pointer;
    font-size: 1.8rem;
    border-radius: 50%;
    width: ${(props) => (props.color === "purple" ? "1.4rem" : null)};
    height: ${(props) => (props.color === "purple" ? "1.4rem" : null)};
    padding: ${(props) => (props.color === "purple" ? "0.5rem" : null)};
    color: ${(props) => (props.color === "black" ? "black" : "white")};
    background-color: ${(props) =>
      props.color === "purple" ? "#612fab" : "transparent"};
  }
`;
