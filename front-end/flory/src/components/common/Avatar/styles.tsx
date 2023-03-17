import styled from "styled-components";
export const SAvatar = styled.div<any>`
  img {
    width: ${(props) => (props.size === "small" ? "2rem" : "4rem")};
  }
`;
