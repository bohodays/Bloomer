import styled from "styled-components"

export const SMain = styled.main`
  max-width: 480px;
  width: 100%;

  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  width: 3.2rem;
  padding: 5px;
  text-align: center;
  position: fixed;
  /* position: absolute; */
  top: 11vh;

  .weather-icon {
    height: 28px;
  }

  .info-container {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
  }
`
