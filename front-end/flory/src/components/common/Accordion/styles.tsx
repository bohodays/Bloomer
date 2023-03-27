import styled from "styled-components";

export const SAccordion = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  margin: 1vw;
  border-radius: 4px;
  border-bottom: 1px solid silver;

  .back-icon {
    cursor: pointer;
    color: black;
    position: absolute;
    font-size: 1.8rem;
    left: 16px;
    top: 16px;
  }

  .title{
    float:left;
    color: black;
  
  }

  .select-icon {
    cursor: pointer;
    color: black;
    float:left;
    font-size: 1.8rem;
    margin-right: 1vw;
  }

  .down-icon{
    cursor: pointer;
    color: black;
    float: right;
  }

`;
