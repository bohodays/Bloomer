import styled from "styled-components";
export const SAvatar = styled.div<any>`
  width: ${(props) => props.size};
  height: ${(props) => props.size};

  /* border: 2px solid #dec5fd; */
  border-radius: 50%;
  border: ${(props) =>
    props.size === "small"
      ? "2px solid transparent"
      : "3.5px solid transparent"};
  background-image: ${(props) =>
    props.status === "pick"
      ? "linear-gradient(#fff, #fff), linear-gradient(to right, #BD00FF, #FF00D6)"
      : "linear-gradient(#fff, #fff), linear-gradient(#DEC5FD, #DEC5FD)"};
  background-origin: border-box;
  background-clip: content-box, border-box;

  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
`;
