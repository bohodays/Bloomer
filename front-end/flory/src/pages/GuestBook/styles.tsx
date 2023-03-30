import styled from "styled-components"

export const SMain = styled.main`
  padding-top: 5rem;
  min-height: 100%;
  /* display: grid;
  grid-template-columns: repeat(2, 1fr); */

  button {
    top: 1rem;
    left: 1rem;
  }

  .create {
    padding: 0.5rem;
    /* width: 1rem; */
    width: 3rem;
    height: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 1rem;
    top: 1rem;
    font-size: 1.6rem;
    cursor: pointer;
    text-align: center;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 50%;
    transition: all linear 300ms;
  }

  .create:hover {
    transform: scale(1.1);
  }

  position: relative;
  background-color: #f6f6f6;
  background-image: linear-gradient(
      90deg,
      #cdcccc 0px,
      #cdcccc 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      #cdcccc 0px,
      #cdcccc 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      90deg,
      #e0e0e0 0px,
      #e0e0e0 1px,
      transparent 1px,
      transparent 99px,
      #e0e0e0 99px,
      #e0e0e0 100px
    ),
    linear-gradient(
      90deg,
      transparent 0px,
      transparent 5px,
      #f6f6f6 5px,
      #f6f6f6 95px,
      transparent 95px,
      transparent 100px
    ),
    linear-gradient(
      transparent 0px,
      transparent 1px,
      #f6f6f6 1px,
      #f6f6f6 99px,
      transparent 99px,
      transparent 100px
    ),
    linear-gradient(#cdcccc, #cdcccc);
  background-size: 100px 100%, 100% 100px, 100% 10px, 10px 100%, 100% 100px,
    100px 100%, 100px 100%, 100px 100px, 100px 100px;
`
