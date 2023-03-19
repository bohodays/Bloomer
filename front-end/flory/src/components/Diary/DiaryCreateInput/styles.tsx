import styled from "styled-components"

export const STextarea = styled.textarea`
  height: 50%;
  width: 90%;
  background: #f2f2fc;
  border-radius: 15px;
  border: none;
  outline: none;
  padding: 10px;
  resize: none;

  /* 스크롤바 */
  /* Chrome, Edge, and Safari */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f2f2fc;
    border-radius: 10px;
    border-left: 3px solid #ffffff;
  }
`
