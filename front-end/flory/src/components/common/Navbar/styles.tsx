import styled from "styled-components";

export const SNavWrapper = styled.div`
  position: fixed;
  bottom: 0;
  max-width: 480px;
  width: 100%;
  padding: 0 1.5rem;
`;

export const SNavbar = styled.menu`
  background-color: #2e2162;
  /* font-size: 1.5em; */
  /* padding: 0 2.85em; */
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-radius: 16px;

  .button__wrapper {
    border: 3px solid #2e2162;
    border-radius: 50%;
  }

  .wrapper__active {
    transform: scale(1.2);
  }

  /* 아이콘을 감싸는 버튼 */
  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 5px solid #2e2162;
  }

  .button__active {
    background-color: #dec5fd;
  }

  .nav__item {
    color: var(--color-white);
    width: 1.5rem;
    height: 1.5rem;
    padding: 1rem 0;
  }

  .item__active {
    color: #9a1aff;
  }
`;
