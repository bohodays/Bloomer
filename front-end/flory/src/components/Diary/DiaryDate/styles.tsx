import styled from "styled-components";

export const SContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  margin-top: -30px;
  margin-bottom: 20px;
`;

export const SMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bolder;
  font-size: 0.625rem;

  color: #000000;
  background-color: white;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
`;
