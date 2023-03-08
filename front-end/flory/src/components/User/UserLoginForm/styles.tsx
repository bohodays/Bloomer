import styled from "styled-components";

export const SForm = styled.form`
  width: 80%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  margin-bottom: 1rem;
  p {
    text-align: right;
    margin-top: 0.7rem;
    margin-bottom: 1.2rem;
  }
  .input-wrapper {
    text-align: center;
    width: 100%;
    position: relative;
  }
  .icon {
    position: absolute;
    font-size: 1rem;
    color: #b0b0b0;
    left: 5%;
    top: 50%;
    transform: translateY(-50%);
  }
  .active {
    color: #2e2162;
  }
  button {
  }
`;

export const SInput = styled.input`
  font-size: 1rem;
  width: 100%;
  height: 4rem;
  box-shadow: 5px 5px 5px #3737372d;
  border-radius: 16px;
  background-color: #f2f2fc;
  margin: 0.5rem 0;
  padding-left: 3rem;
  border: none;
  outline: none;
`;
