import styled from "styled-components";

export const SContainer = styled.div`
  position: absolute;
  top: 21vh;
  left: 5%;
  display: flex;
  gap: 0.625rem;
  .date-picker {
    cursor: pointer;
  }
`;

export const SMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 0.1rem;
  font-weight: bold;
  color: #000000;
  background-color: white;
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
