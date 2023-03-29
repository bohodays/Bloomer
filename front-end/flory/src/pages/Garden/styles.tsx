import styled from "styled-components";

export const SMain = styled.main`
  position: relative;
  width: 100%;
  height: 100%;
  background: #ed704e;

  .goto__info {
    /* position: absolute; */
    /* top: 1rem;
    left: 1rem; */
  }

  .moveToEdit {
    position: absolute;
    bottom: 5rem;
    right: 1.8rem;

    background-color: rgb(222, 197, 253);
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.14) 3px 3px 0px 0px;
    border-radius: 100%;

    transition: all 400ms ease;
  }

  .moveToEdit:hover {
    transform: scale(1.2);
  }

  .moveToInfo {
    position: absolute;
    top: 1rem;
    left: 1rem;

    background-color: rgb(222, 197, 253);
    width: 2.5rem;
    height: 2.5rem;
    box-shadow: rgba(0, 0, 0, 0.14) 3px 3px 0px 0px;
    border-radius: 100%;

    transition: all 400ms ease;
  }

  .moveToInfo:hover {
    transform: scale(1.2);
    color: #af5df8;
  }
`;
