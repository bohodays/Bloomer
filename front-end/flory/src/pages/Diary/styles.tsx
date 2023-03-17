import styled from "styled-components";

export const SMain = styled.main`
  max-width: 480px;
  width: 100%;
  height: 100%;

  .header-container {
    width: 100%;
    max-width: 480px;
    position: fixed;
  }
  svg {
    transform: translate3d(0px, 0px, 0px) scaleX(-1) !important;
  }

  .content-container {
    /* position: relative; */
    width: 90%;
    height: 100%;
    margin: 0 auto;
    z-index: -100;
    overflow-y: auto;
    -ms-overflow-style: none;

    .line {
      position: absolute;
      z-index: -100;
      left: calc(3.3rem + 1.15rem + 5%);
      border-left: 4px solid #ececec;
      height: 100%;
    }

    /* & .line { */
    /* position: absolute; */
    /* height: 130px; */
    /* z-index: -4; */
    /* left: 1.15rem; */
    /* overflow-y: hidden; */
    /* } */

    .diary-section {
      margin-top: 28vh;
    }
  }

  .content-container::-webkit-scrollbar {
    display: none;
  }
`;
