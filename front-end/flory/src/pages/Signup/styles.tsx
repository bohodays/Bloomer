import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .login__title {
    width: 78%;
  }

  h1 {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .back-icon {
    cursor: pointer;
    color: var(--color-white);
    position: absolute;
    font-size: 1.8rem;
    left: 16px;
    top: 16px;
  }

  .header {
    /* position: absolute;
    top: 0; */
    text-align: center;
    background: linear-gradient(
      60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%
    );
    color: white;
    margin-bottom: 2rem;
  }

  .inner-header {
    height: 6rem;
    width: 100%;
    margin: 0;
    padding: 0;
  }

  .flex {
    /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .waves {
    position: relative;
    width: 100%;
    height: 15vh;
    margin-bottom: -7px; /*Fix for safari gap*/
    min-height: 100px;
    max-height: 150px;
  }

  /* Animation */

  .parallax > use {
    animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
  }
  .parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }
  .parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }
  .parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }
  .parallax > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }
  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
`;
