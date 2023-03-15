import styled from "styled-components";

export const SMain = styled.main`
  max-width: 480px;
  width: 100%;
  height: 100%;

  .header-container {
    position: fixed;
  }

  .background-image {
    object-fit: cover;
    top: 0;
    left: 0;
    right: 0;
    max-width: 480px;
    width: 100%;
    /* height: 24vh; */
    margin: 0 auto;
  }

  .content-container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    z-index: -100;
    overflow-y: auto;
    -ms-overflow-style: none;
    .diary-section {
      margin-top: 28vh;
    }
  }

  .content-container::-webkit-scrollbar {
    display: none;
  }
`;
