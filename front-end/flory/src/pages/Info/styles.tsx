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

  .sub-title__wrapper {
    display: flex;
    justify-content: center;
  }

  #title {
    font-size: 80px;
    font-family: "Niconne";
    color: #ffffff;
    text-align: center;
    margin: 0;
    text-shadow: #805f89 5px 4px 2px;
  }

  .reg-text {
    transform: translateY(100px);
    opacity: 0;

    transition: transform 3s ease-out, opacity 5s ease;

    &.loaded {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .letter {
    transition: transform 5s cubic-bezier(0.43, 0.1, 0.57, 0.9), filter 5s ease,
      opacity 5s ease;
    opacity: 0;
    filter: blur(5px);

    &:nth-of-type(2) {
      transform: translateY(-160px);
      transition-duration: 5/2;
    }

    &:nth-of-type(3) {
      filter: blur(0);
      transform: translateY(-170px);
      transition-duration: 5/1.3;
    }

    &:nth-of-type(4) {
      transform: translateY(-200px);
      transition-duration: 5/1.5;
    }

    &:nth-of-type(5) {
      transform: translateY(-150px);
      transition-duration: 5/2;
    }

    &:nth-of-type(6) {
      filter: blur(0);
      transform: translateY(-180px);
      transition-duration: 5/2.3;
    }

    &.loaded {
      opacity: 1;
      transform: translateY(0);
      filter: blur(0);
    }
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

    display: inline-block;
    opacity: 0;
    transform: scale(0.9);
  }
`;
