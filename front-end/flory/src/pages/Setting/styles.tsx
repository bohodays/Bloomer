import styled from "styled-components";

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  h1 {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .back-icon {
    cursor: pointer;
    color: black;
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

  .box-Accordion{
    width:100%
  }
`;
