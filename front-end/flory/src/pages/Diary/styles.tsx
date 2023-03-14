import styled from "styled-components"

export const SMain = styled.main`
  .background-image {
    position: fixed;
    object-fit: cover;
    /* z-index: 0; */
    top: 0;
    left: 0;
    right: 0;
    max-width: 480px;
    width: 100%;
    height: 24vh;
    margin: 0 auto;
  }

  .content-container {
    max-width: 480px;

    width: 90%;
    height: 100%;
    margin: 0 auto;
    z-index: -1;
    overflow-y: auto;

    .diary-section {
      margin-top: 30vh;
    }
  }
`
