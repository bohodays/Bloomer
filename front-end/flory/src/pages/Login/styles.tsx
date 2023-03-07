import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .login__title {
    margin-bottom: 3rem;
  }

  h1 {
    font-size: 2.5em;
  }

  .sns-title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0px;
  }

  .button-wrapper {
    width: 80%;
    display: flex;
    justify-content: center;
  }

  .reverse {
    transform: scaleX(-1);
  }

  span {
    font-size: 0.8rem;
    margin: 0 1rem;
  }

  .back-icon {
    cursor: pointer;
    position: absolute;
    font-size: 1.8rem;
    left: 16px;
    top: 16px;
  }
`;

export const SButton = styled.button`
  width: 12rem;
  height: 3rem;
  background-color: #858aeb;
  border-radius: 30px;
  box-shadow: 5px 5px 5px #3737372d;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      color: var(--color-white);
    }
  }

  img {
    height: 2rem;
    margin-right: 0.5rem;
  }
`;
