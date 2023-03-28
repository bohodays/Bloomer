import styled from "styled-components";

export const SMain = styled.main`
  /* position: relative; */
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
  justify-content: center;
  gap: 4%;
  width: 100%;
  height: 100%;
  background: rgb(144, 91, 241);
  background: linear-gradient(
    140deg,
    rgba(144, 91, 241, 1) 0%,
    rgba(232, 73, 158, 1) 100%
  );
  overflow: hidden;
  /* overflow-y: auto; */

  .back-icon {
    cursor: pointer;
    color: var(--color-white);
    background-color: #612fab;
    position: absolute;
    font-size: 1.8rem;
    left: 1rem;
    top: 1rem;
    padding: 0.5rem;
    border-radius: 50%;
    width: 1.4rem;
    height: 1.4rem;
  }

  /* 기간을 보여주는 div를 묶는 wrapper */
  .info__wrapper {
    /* margin-top: 35px; */
    width: 100%;
    /* height: 20%; */
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
      background-color: rgba(255, 255, 255, 0.32);
      padding: 0.4rem 1.4rem;
      border-radius: 12px;
      border: 2.4px solid var(--color-white);

      font-family: "S-CoreDream-5Medium";
      font-size: 1.3rem;
      color: var(--color-white);
      z-index: 10;
    }
  }

  /* Carousel */
  .wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: 17rem;
    /* margin-bottom: 2.5rem; */
  }

  img {
    width: 18rem;
  }

  .carousel {
    position: relative;
    width: 55%;
    perspective: 500px;
    transform-style: preserve-3d;
  }

  .card-container {
    position: absolute;
    width: 100%;
    height: 100%;
    transform: rotateY(calc(var(--offset) * 50deg))
      scaleY(calc(1 + var(--abs-offset) * -0.4))
      translateZ(calc(var(--abs-offset) * -30rem))
      translateX(calc(var(--direction) * -5rem));
    filter: blur(calc(var(--abs-offset) * 1rem));
    transition: all 0.3s ease-out;
    justify-content: center;
    align-items: center;
  }

  .card {
    width: 100%;
    height: 100%;
    padding: 2rem;
    background-color: hsl(280deg, 40%, calc(100% - var(--abs-offset) * 50%));
    border-radius: 1rem;
    color: #9ca3af;
    text-align: justify;
    transition: all 0.3s ease-out;

    h2 {
      text-align: center;
      font-size: 2rem;
      font-weight: bold;
      margin: 0 0 0.7em;
      color: #1f2937;
    }

    p,
    h2 {
      transition: all 0.3s ease-out;
      opacity: var(--active);
    }
  }

  .nav {
    color: white;
    font-size: 5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    z-index: 2;
    cursor: pointer;
    user-select: none;
    background: unset;
    border: unset;

    &.left {
      transform: translateX(-100%) translatey(-50%);
    }

    &.right {
      right: 0;
      transform: translateX(100%) translatey(-50%);
    }
  }

  .calendar__wrapper {
    width: 95%;
    margin: 0 auto;
  }
`;
