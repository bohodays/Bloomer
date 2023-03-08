import React from "react";
import Button from "../../components/common/Button/Button";
import UserLoginForm from "../../components/User/UserLoginForm/UserLoginForm";
import { SButton, SMain } from "./styles";
import headLine from "../../assets/imgs/head_line.png";
import kakaoLogoImg from "../../assets/imgs/login/kakao_logo.svg";
import googleLogoImg from "../../assets/imgs/login/google_logo.svg";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as Wave } from "../../assets/imgs/wave.svg";

const Login = () => {
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
        <h1>Hello!</h1>
      </div>
      <UserLoginForm />
      {/* Login Form 컴포넌트 */}
      <div className="sns-title-wrapper">
        <img src={headLine} alt="hr" />
        <span>SNS로 시작하기</span>
        {/* <span>SNS</span> */}
        <img className="reverse" src={headLine} alt="hr" />
      </div>
      {/* 소셜 로그인 */}
      <div className="button-wrapper">
        <SButton
          style={{ marginRight: "1rem" }}
          // 클릭 이벤트 수정해야 됨
          onClick={onClick}
        >
          <div>
            <img src={googleLogoImg} alt="" />
            <p>google</p>
          </div>
        </SButton>
        <SButton
          style={{ marginLeft: "1rem" }}
          // 클릭 이벤트 수정해야 됨
          onClick={onClick}
        >
          <div>
            <img src={kakaoLogoImg} alt="" />
            <p>kakao</p>
          </div>
        </SButton>
      </div>
    </SMain>
  );
};

export default Login;
