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

  #sub-title {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    color: #d7bede;
    letter-spacing: 4px;
    position: relative;
    overflow: hidden;

    background: linear-gradient(90deg, #7f18c9, #fff, #8f4fcc);
    background-repeat: no-repeat;
    background-size: 90%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
  }
`;
