import styled from "styled-components";

export const SMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;

  .info__wrapper {
    cursor: pointer;
    position: absolute;
    bottom: 1rem;
    width: 100%;
    /* height: 25%; */
    display: flex;
    justify-content: center;
    align-items: center;

    .background {
      z-index: 10;
      background-color: rgba(255, 255, 255, 0.32);
      padding: 0.3rem 1rem;
      border-radius: 12px;
      border: 2px solid var(--color-white);
      transition: all linear 300ms;
    }

    p {
      font-size: 1rem;
      color: var(--color-white);
      z-index: 10;
      transition: all linear 300ms;
      user-select: none;
    }
  }

  .info__wrapper:hover {
    .background {
      background-color: rgba(255, 255, 255, 0.5);
    }

    p {
      color: #942ef3;
    }
  }
`;
