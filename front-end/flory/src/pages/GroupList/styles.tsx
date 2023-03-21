import styled from "styled-components";

export const SMain = styled.main`
  width: 90%;
  height: 100%;
  margin: auto;

  .search__wrapper {
    width: 100%;
    height: 10%;
    padding-top: 20px;
  }

  .grouplist__wrapper {
    width: 100%;
    height: 90%;
    overflow-y: auto;
    /* Chrome, Edge, and Safari */
    /* ::-webkit-scrollbar {
      width: 10px;
    }
    ::-webkit-scrollbar-track {
      background: #ffffff;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #f2f2fc;
      border-radius: 10px;
      border-left: 3px solid #ffffff;
    } */
  }

  /*
  .grouplist__wrapper:hover {
    transform: scale(1.03);
  } */
`;
