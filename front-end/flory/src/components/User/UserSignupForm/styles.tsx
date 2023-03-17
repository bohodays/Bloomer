import styled from "styled-components";

export const SForm = styled.form<any>`
  text-align: center;
  width: 80%;
  .input__wrapper {
    position: relative;
    margin-bottom: 2rem;
  }

  .icon {
    position: absolute;
    left: 3%;
    top: 10%;
    color: #b0b0b0;
  }

  .active {
    color: #bfc6ff;
  }

  p {
    text-align: left;
    font-size: 0.5rem;
    padding-left: 0.5rem;
    color: #dc3545;
    visibility: hidden;
  }

  #nicknameAlert {
    color: ${(props) =>
      props.alert.nickname === "alert" ? "#dc3545" : "green"};
    visibility: ${(props) => (props.alert.nickname ? "visible" : "hidden")};
  }
  #emailAlert {
    color: ${(props) => (props.alert.email === "alert" ? "#dc3545" : "green")};
    visibility: ${(props) => (props.alert.email ? "visible" : "hidden")};
  }

  #pwAlert {
    color: ${(props) => (props.alert.pw === "alert" ? "#dc3545" : "green")};
    visibility: ${(props) => (props.alert.pw ? "visible" : "hidden")};
  }
  #pwConfAlert {
    color: ${(props) => (props.alert.pwConf === "alert" ? "#dc3545" : "green")};
    visibility: ${(props) => (props.alert.pwConf ? "visible" : "hidden")};
  }
`;

export const SInput = styled.input<any>`
  font-size: 0.8rem;
  width: 100%;
  border: none;
  outline: none;
  border-bottom: 3px solid #bfc6ff;
  padding-left: 2.5rem;
  padding-bottom: 1rem;
`;
