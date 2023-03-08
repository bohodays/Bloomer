import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import Button from "../../common/Button/Button";
import { SForm, SInput } from "./styles";

const UserLoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <>
      <SForm onSubmit={onSubmit}>
        <div className="input-wrapper">
          <FontAwesomeIcon
            className={email ? "icon active" : "icon"}
            icon={faEnvelope}
          />
          <SInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="이메일"
          />
        </div>
        <div className="input-wrapper">
          <FontAwesomeIcon
            className={password ? "icon active" : "icon"}
            icon={faLock}
          />
          <SInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="비밀번호"
          />
        </div>
        <p>비밀번호 찾기</p>
        <Button
          type="submit"
          addStyle={{
            fontSize: "1.1rem",
            width: "100%",
            height: "4rem",
            color: "#ffffff",
            background1: "rgb(132,120,185)",
            background2:
              "linear-gradient(140deg, rgba(132,120,185,0.9523) 0%, rgba(11,8,27,1) 100%)",
            borderRadius: "16px",
            boxShadow: "5px 5px 5px #3737372d",
          }}
          contents="로그인"
        />
      </SForm>
    </>
  );
};

export default UserLoginForm;
