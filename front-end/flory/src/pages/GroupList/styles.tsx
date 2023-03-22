import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  height: 100%;

  .search__wrapper {
    width: 90%;
    margin: auto;
    height: 15%;
    padding-top: 3.3rem;
  }

  .grouplist__wrapper {
    width: 90%;
    height: 85%;
    margin: auto;
    overflow-y: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
