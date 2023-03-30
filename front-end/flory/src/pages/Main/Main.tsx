import React, { useState } from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { logoutAction } from "../../redux/modules/user";
import { localData } from "../../redux/modules/user/token";
import { useAppDispatch, useAppSelector } from "../../redux/store.hooks";
import { SMain } from "./styles";

import { ReactComponent as LoadingImg } from "../../assets/imgs/loading.svg";
import Loading from "../Loading/Loading";
import { useNavigate } from "react-router";
import MainFlowerAsset from "../../components/Main/MainFlowerAsset/MainFlowerAsset";

// const Snowflake = ({ style }: any) => {
//   return (
//     <p className="snow-flake" style={style}>
//       ✿
//     </p>
//   )
// }

// const makeSnowFlakes = () => {
//   let animationDelay = "0s" // 기본 값은 0초이다.
//   let fontSize = "14px" // 기본 폰트사이즈는 14px로 했다.
//   const arr = Array.from("______________________") // length가 15인 array가 생긴다.

//   // arr의 length 만큼의 <SnowFlake />를 반환한다.
//   return arr.map((el, i) => {
//     animationDelay = `${(Math.random() * 16).toFixed(2)}s` // 0~16 사이에서 소수점 2번째 자리수까지의 랜덤숫자
//     fontSize = `${Math.floor(Math.random() * 10) + 10}px` // 10~20 사이의 정수
//     const style = {
//       animationDelay,
//       fontSize,
//       color: "#ffffff",
//     }
//     return <Snowflake key={i} style={style} />
//   })
// }

// const FallingSnow = () => (
//   <div className="snow-container">{makeSnowFlakes()}</div>
// )

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
      {/* <FallingSnow /> */}
      {/* 로그아웃 연습 */}
      {/* <Loading /> */}
      {/* <button onClick={handleLogout}>로그아웃</button> */}
      {/* 네브바 테스트를 위해 임시로 메인에 넣었습니다. 메인 페이지 작업할 때 빼주세요 */}
      <h1 id="title">Bloomer</h1>
      <h4 id="sub-title">당신의 감정을 꽃 피우다</h4>
      <MainFlowerAsset />
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
