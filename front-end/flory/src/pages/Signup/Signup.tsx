import React from "react";
import { SMain } from "./styles";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Wave } from "../../assets/imgs/wave.svg";
import UserSignupForm from "../../components/User/UserSignupForm/UserSignupForm";

const Signup = () => {
  const onClick = () => {};

  return (
    <SMain>
      <div className="header">
        <div className="inner-header flex"></div>
        <div>
          <Wave />
        </div>
      </div>
      {/* 뒤로 가기 아이콘 */}
      <FontAwesomeIcon
        className="back-icon"
        onClick={onClick}
        icon={faArrowLeft}
      />
      <div className="login__title">
        <h1>Welcome!</h1>
      </div>
      <UserSignupForm />
    </SMain>
  );
};

export default Signup;
