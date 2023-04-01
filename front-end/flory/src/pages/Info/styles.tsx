import styled from "styled-components";

const userHeight = window.innerHeight;

export const SMain = styled.main<any>`
  /* padding-top: 2rem; */
  background-color: #4e126b;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  /* head */
  .head {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .down__arrow {
    position: absolute;
    bottom: 1rem;
    animation: blink-effect 1s step-end infinite;
    -webkit-animation: blink 0.5s ease-in-out infinite alternate;
    -moz-animation: blink 0.5s ease-in-out infinite alternate;
    animation: blink 0.5s ease-in-out infinite alternate;
  }

  @-webkit-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @-moz-keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes blink {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  #title {
    font-size: 80px;
    font-family: "Niconne";
    color: #ffffff;
    text-align: center;
    margin: 0;
    text-shadow: #805f89 5px 4px 2px;
  }

  /* 애니메이션 효과 */
  .animate__animated.animate__fadeIn {
    --animate-duration: 5s;
  }

  .text-container {
    text-align: center;
    margin: 1rem 0;
    margin-bottom: 5rem;
  }

  .service__info-1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.userHeight + "px"};
    text-align: center;
    & > p {
      color: #dfdede;
    }
  }

  .service__info-2 {
    position: relative;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${(props) => props.userHeight - 200 + "px"};
    text-align: center;
    & > p {
      color: #dfdede;
      z-index: 10;
      transform: translate(3rem, 3rem);
    }
  }

  .crocus {
    position: absolute;
    left: 2rem;
  }
`;
