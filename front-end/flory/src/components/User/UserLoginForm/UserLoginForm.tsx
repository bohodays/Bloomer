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
        <p>아직 계정이 없으신가요?</p>
        <Button
          type="submit"
          addStyle={{
            margin: "auto",
            fontSize: "1rem",
            width: "50%",
            height: "3rem",
            color: "#ffffff",
            background1: "rgb(101,182,255)",
            background2:
              "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
            borderRadius: "24px",
            boxShadow: "5px 5px 5px 0px rgb(158 158 158)",
          }}
          contents="로그인"
        />
      </SForm>
    </>
  );
};

export default UserLoginForm;
