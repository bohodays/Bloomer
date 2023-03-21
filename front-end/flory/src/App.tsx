import React, { Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import "./App.css";
import DiaryDetail from "./pages/DiaryDetail/DiaryDetail";
import pMinDelay from "p-min-delay";

// 유저 정보 관련
import { localData } from "../src/redux/modules/user/token";
import { useAppSelector, useAppDispatch } from "./redux/store.hooks";
import { getUserDataToTokenAction } from "./redux/modules/user";
import GroupList from "./pages/GroupList/GroupList";

// 코드 스플리팅 (Code Splitting)
const Main = React.lazy(() => import("./pages/Main/Main"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));
const Map = React.lazy(() => import("./pages/Map/Map"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPage"));
const Diary = React.lazy(() => import("./pages/Diary/Diary"));
const DiaryCreate = React.lazy(() => import("./pages/DiaryCeate/DiaryCreate"));
const DiarySelect = React.lazy(() => import("./pages/DiarySelect/DiarySelect"));
const Garden = React.lazy(() => pMinDelay(import("./pages/Garden/Garden"), 0));
const GardenEdit = React.lazy(() => import("./pages/GardenEdit/GardenEdit"));
const GardenList = React.lazy(() => import("./pages/GardenList/GardenList"));
const Setting = React.lazy(() => import("./pages/Setting/Setting"));

function App() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user.userData);

  useEffect(() => {
    if (localData.getAccessToken()) {
      if (user.userId === null) {
        dispatch(getUserDataToTokenAction());
      }
    }
  }, []);

  return (
    <div className="app">
      {/*  fallback 추가해야 됨 */}
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* 로그인 되어있으면 메인페이지로 보내기 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/map" element={<Map />} />
            <Route path="/diary/create" element={<DiaryCreate />} />
            <Route path="/diary/select" element={<DiarySelect />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/diary/:diaryId" element={<DiaryDetail />} />
            <Route path="/garden" element={<Garden />} />
            <Route path="/garden/edit" element={<GardenEdit />} />
            <Route path="/garden/list" element={<GardenList />} />
            <Route path="/setting" element={<Setting />} />
            <Route path="/group/list" element={<GroupList />} />
            {/* 404 Not Found 추가해야 됨 */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
