import styled from "styled-components"

export const SMain = styled.main`
  background-color: rgba(0, 0, 0, 0.18);
  border-radius: 10px;
  padding: 0.3rem;
  text-align: center;
  position: fixed;
  top: 11vh;

  .weather-icon {
    height: 1.7rem;
  }

  .info-container {
    color: white;
    display: flex;
    flex-direction: column;
    font-size: 0.2rem;
  }
`
