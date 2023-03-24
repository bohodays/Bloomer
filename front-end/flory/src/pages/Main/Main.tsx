import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { logoutAction } from "../../redux/modules/user";
import { localData } from "../../redux/modules/user/token";
import { useAppDispatch } from "../../redux/store.hooks";
import { SMain } from "./styles";

import { ReactComponent as LoadingImg } from "../../assets/imgs/loading.svg";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";

const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // 로그아웃 연습
  // const handleLogout = () => {
  //   const accessToken = localData.getAccessToken();
  //   dispatch(logoutAction(accessToken)).then(() => {
  //     localData.clear();
  //   });
  // };

  const handleMoveLogin = () => {
    navigate("/login");
  };
  const handleMoveSignUp = () => {
    navigate("signup");
  };

  return (
    <SMain>
      {/* 로그아웃 연습 */}
      {/* <Loading /> */}
      {/* <button onClick={handleLogout}>로그아웃</button> */}
      {/* 네브바 테스트를 위해 임시로 메인에 넣었습니다. 메인 페이지 작업할 때 빼주세요 */}
      <h1 className="title">Bloomer</h1>
      <h3>감정을 꽃 피우다</h3>
      <div className="btn__wrapper">
        <button className="btn" onClick={handleMoveLogin}>
          시작하기
        </button>
        {/* <button className="btn" onClick={handleMoveSignUp}>
          회원가입
        </button> */}
      </div>
      {/* <Navbar /> */}
    </SMain>
  );
};

export default Main;
