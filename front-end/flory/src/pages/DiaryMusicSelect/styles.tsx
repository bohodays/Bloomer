import styled, { css } from "styled-components";

export const SMain = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgb(254, 219, 217);
  background: linear-gradient(
    135deg,
    rgba(254, 219, 217, 1) 0%,
    rgba(186, 205, 222, 1) 100%
  );

  .info__wrapper {
    position: absolute;
    top: 3rem;
    left: 50%;
    transform: translateX(-50%);
    & > p {
      font-size: 0.8rem;
    }
    width: 90%;
    text-align: center;
    margin: 0 auto;
    background: #ffffff;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25), 0px 2px 8px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 1rem 0.8rem;
    margin-bottom: 2rem;
  }

  .bottom__wrapper {
    position: absolute;
    bottom: 5rem;
    width: 100%;
    /* height: 25%; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SMusicWrapper = styled.div<any>`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all linear 300ms;
  margin: 0.3rem 0;

  .icon {
    padding: 0.8rem;
    border-radius: 50%;
  }

  .music {
    background-color: rgb(237, 191, 188);
  }

  .play {
    cursor: pointer;
  }
  /* height: 2rem; */

  background-color: ${(props) =>
    props.isSelected ? "rgb(228, 163, 158)" : "none"};

  &:hover {
    background-color: ${(props) =>
      props.isSelected ? "none" : "rgb(243, 200, 197)"};
  }
`;
