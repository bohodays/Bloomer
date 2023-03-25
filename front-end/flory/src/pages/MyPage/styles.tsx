import styled from "styled-components";

export const SMyPage = styled.div`
  width: 100%;
  // height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 0;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  .header {   
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
    margin: 20px auto;
    width: 230px;
    padding: 3px;
    border-radius: 2em;
    box-shadow: #ebe1e1 2px 2px 2px 2px;
  }

  .flowerImg{
    height: 15px;
    // width: 1vw;
    position: relative;
    top: 2.5px;
    right: 4px;
  }

  .inner-title{
    font-size: 12px;
    margin-bottom:5vh;
  }

  .flower-title{
    font-size: 12px;
    display:inline-block;
  }
`;


