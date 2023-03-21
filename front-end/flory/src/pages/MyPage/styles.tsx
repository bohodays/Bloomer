import styled from "styled-components";

export const SMyPage = styled.div`
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

  .header {   
    color: linear-gradient(
      60deg,
      rgba(84, 58, 183, 1) 0%,
      rgba(0, 172, 193, 1) 100%
    );
    height:5%;
    margin-bottom: 1rem;
  }

  .setting-icon{
    margin: 0.8vw 1.5vw;
    font-size: 1.5em;
    position: absolute;
    right: 0;
  }

  .flex {
    /*Flexbox for containers*/
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .totalFlower{
    background: #e6d1ff;
    text-align: center;
    margin: 2vw auto;
    width: 15vw;
    padding: 0.4vh;
    border-radius: 2em;
    box-shadow: #ebe1e1 3px 3px 3px 3px;
  }

  .flowerImg{
    height: 2vh;
    width: 1vw;
    position: relative;
    top: 0.2vw;
    right: 0.3vw;
  }

  .inner-title{
    font-size: 0.8em;
    margin-bottom:5vh;
  }
`;
