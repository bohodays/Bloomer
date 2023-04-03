import React, { useState, useEffect } from "react";
import { SMain } from "./styles";
import { ReactComponent as Wave } from "../../../assets/imgs/wave.svg";
import { useNavigate } from "react-router-dom";
import BackButton from "../../../components/common/BackButton/BackButton";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SForm, SInput } from "./styles";
import Button from "../../../components/common/Button/Button";
import { signupAction } from "../../../redux/modules/user";
import { useAppDispatch } from "../../../redux/store.hooks";

const FindPassword = () => {
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [alarm, setAlarm] = useState({
    nickname: "",
    email: "",
    pw: "",
    pwConf: "",
  });
  const dispatch = useAppDispatch();

  // 비밀번호 재입력 확인
  useEffect(() => {
    if (password && password === passwordCheck) {
      setAlarm({
        ...alarm,
        pwConf: "confirm",
      });
    } else if (password && passwordCheck) {
      setAlarm({
        ...alarm,
        pwConf: "alarm",
      });
    } else {
      setAlarm({
        ...alarm,
        pwConf: "",
      });
    }
  }, [password, passwordCheck]);

  return (
    <SMain>
      <div className="header">
        <div className="inner-header flex"></div>
        <div>
          <Wave />
        </div>
      </div>
      <BackButton color="white" />
      <div className="password__title">
        <h1>비밀번호 변경</h1>
      </div>

      <SForm alarm={alarm}>
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
          <p id="pwAlarm">
            {alarm.pw === "alarm" ? "비밀번호 경고" : "비밀번호 확인"}
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
          <p id="pwConfAlarm">
            {alarm.pwConf === "alarm"
              ? "비밀번호가 일치하지 않습니다."
              : "비밀번호가 일치합니다."}
          </p>
        </div>
        <Button
          // onClick={}
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
          contents="변경"
        />
      </SForm>
    </SMain>
  );
};

export default FindPassword;
