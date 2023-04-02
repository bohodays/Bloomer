import styled from "styled-components";

export const SMusicWrapper = styled.button<any>`
  right: 16px;
  top: 16px;
  position: absolute;
  z-index: 2;

  transition: all linear 300ms;

  /* 오디오 숨기기 */
  audio {
    display: none;
  }

  .icon {
    cursor: pointer;
    font-size: 1.8rem;
    color: white;
    filter: drop-shadow(1px 1px 1px #aaa);
  }
`;
