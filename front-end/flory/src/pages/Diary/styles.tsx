import styled from "styled-components"

export const SMain = styled.main`
  .background-image {
    position: fixed;
    /* z-index: 0; */
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }

  .content-container {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    z-index: -1;

    .diary-section {
      margin-top: 200px;
    }
  }
`
