import {
  faUser,
  faEnvelope,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import Button from "../../common/Button/Button";
import { SForm, SInput } from "./styles";
import { signupAction, checkDupEmailAction } from "../../../redux/modules/user";
import { useAppDispatch } from "../../../redux/store.hooks";
import { useNavigate } from "react-router-dom";

const UserSignupForm = () => {
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [alert, setAlert] = useState({
    nickname: "",
    email: "",
    pw: "",
    pwConf: "",
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 이메일 중복 확인
  const onCheckEmail = (e: any) => {
    e.preventDefault();
    dispatch(checkDupEmailAction(email)).then((data: any) => {
      console.log(data.payload.response);
      if (data.payload.response) {
        setAlert({
          ...alert,
          email: "alert",
        });
      } else {
        setAlert({
          ...alert,
          email: "confirm",
        });
      }
    });
  };

  // 비밀번호 재입력 확인
  useEffect(() => {
    if (password && password === passwordCheck) {
      setAlert({
        ...alert,
        pwConf: "confirm",
      });
    } else if (password && passwordCheck) {
      setAlert({
        ...alert,
        pwConf: "alert",
      });
    } else {
      setAlert({
        ...alert,
        pwConf: "",
      });
    }
  }, [password, passwordCheck]);

  // 회원가입
  const onSignup = (e: any) => {
    e.preventDefault();
    const signupData = {
      nickname,
      password,
      email,
    };
    dispatch(signupAction(signupData)).then(() => {
      navigate("/login");
    });
  };

  return (
    <SForm alert={alert}>
      {/* 닉네임 */}
      <div className="input__wrapper">
        <FontAwesomeIcon
          className={nickname ? "icon active" : "icon"}
          icon={faUser}
        />
        <SInput
          value={nickname}
          onChange={(e: any) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요."
        />
        <p id="nicknameAlert">닉네임 경고</p>
      </div>
      {/* 이메일 */}
      <div className="input__wrapper">
        <FontAwesomeIcon
          className={email ? "icon active" : "icon"}
          icon={faEnvelope}
        />

        <Button
          onClick={onCheckEmail}
          contents="중복 검사"
          addStyle={{
            position: "absolute",
            top: "0",
            right: "3%",
            padding: "0.3rem 1rem",
            backgroundColor: "#bfc6ff",
            borderRadius: "16px",
            color: "white",
          }}
        />
        <SInput
          value={email}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요."
        />
        <p id="emailAlert">
          {alert.email === "alert" ? "이메일 경고" : "이메일 확인"}
        </p>
      </div>
      {/* 비밀번호 */}
      <div className="input__wrapper">
        <FontAwesomeIcon
          className={password ? "icon active" : "icon"}
          icon={faLock}
        />
        <SInput
          value={password}
          onChange={(e: any) => setPassword(e.target.value)}
          type={"password"}
          placeholder="비밀번호를 입력해주세요."
        />
        <p id="pwAlert">
          {alert.pw === "alert" ? "비밀번호 경고" : "비밀번호 확인"}
        </p>
      </div>
      {/* 비밀번호 확인 */}
      <div className="input__wrapper">
        <FontAwesomeIcon
          className={passwordCheck ? "icon active" : "icon"}
          icon={faLockOpen}
        />
        <SInput
          value={passwordCheck}
          onChange={(e: any) => setPasswordCheck(e.target.value)}
          type={"password"}
          placeholder="비밀번호를 다시 입력해주세요."
        />
        <p id="pwConfAlert">
          {alert.pwConf === "alert"
            ? "비밀번호 확인 경고"
            : "비밀번호 확인 확인"}
        </p>
      </div>
      <Button
        onClick={onSignup}
        type="submit"
        addStyle={{
          margin: "auto",
          fontSize: "1rem",
          width: "60%",
          height: "3rem",
          color: "#ffffff",
          background1: "rgb(101,182,255)",
          background2:
            "linear-gradient(90deg, rgba(101,182,255,1) 0%, rgba(139,92,246,1) 100%)",
          borderRadius: "20px",
          boxShadow: "5px 5px 5px 0px rgb(158 158 158)",
        }}
        contents="회원가입"
      />
    </SForm>
  );
};

export default UserSignupForm;
