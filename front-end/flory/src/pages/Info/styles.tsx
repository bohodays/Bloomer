import styled from "styled-components";

export const SMain = styled.main`
  padding-top: 2rem;
  background-color: #4e126b;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* head */
  .head {
    position: relative;
  }

  #title {
    font-size: 80px;
    font-family: "Niconne";
    color: #ffffff;
    text-align: center;
    margin: 0;
    text-shadow: #805f89 5px 4px 2px;
  }

  .text-container {
    text-align: center;
    margin: 1rem 0;
  }
`;
