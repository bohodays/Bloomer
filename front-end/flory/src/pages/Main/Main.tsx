import React from "react";
import Navbar from "../../components/common/Navbar/Navbar";
import { logoutAction } from "../../redux/modules/user";
import { localData } from "../../redux/modules/user/token";
import { useAppDispatch } from "../../redux/store.hooks";
import { SMain } from "./styles";

const Main = () => {
  const dispatch = useAppDispatch();

  // 로그아웃 연습
  const handleLogout = () => {
    const accessToken = localData.get("accessToken");
    dispatch(logoutAction(accessToken)).then(() => {
      localData.clear();
    });
  };

  return (
    <SMain>
      {/* 로그아웃 연습 */}
      <button onClick={handleLogout}>로그아웃</button>
      {/* 네브바 테스트를 위해 임시로 메인에 넣었습니다. 메인 페이지 작업할 때 빼주세요 */}
      <Navbar />
    </SMain>
  );
};

export default Main;
