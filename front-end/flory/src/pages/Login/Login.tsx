import React from "react";
import Button from "../../components/common/Button/Button";
import { SMain } from "./styles";

const Login = () => {
  return (
    <SMain>
      <div className="login__title">
        <h1>로그인</h1>
      </div>
      <div>로그인 폼</div>
      <Button
        content="새로운 계정 만들기"
        backgroundColor="#453977"
        width="24rem"
        height=""
        borderRadius=""
      />
      <hr />
      <button>geogle</button>
      <button>kakao</button>
    </SMain>
  );
};

export default Login;
