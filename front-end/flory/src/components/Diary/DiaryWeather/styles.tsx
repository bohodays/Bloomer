import styled from "styled-components";

export const SMain = styled.div`
  position: absolute;
  width: 4rem;
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 0.3rem;
  text-align: center;
  top: 12vh;
  right: 5%;
  z-index: 100;

  .weather-icon {
    height: 1.7rem;
  }

  .info-container {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
  }
`;
