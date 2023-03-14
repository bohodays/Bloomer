import React, { Suspense } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Garden from "./pages/Garden/Garden";

// 코드 스플리팅 (Code Splitting)
const Main = React.lazy(() => import("./pages/Main/Main"));
const Login = React.lazy(() => import("./pages/Login/Login"));
const Signup = React.lazy(() => import("./pages/Signup/Signup"));
const Map = React.lazy(() => import("./pages/Map/Map"));
const Diary = React.lazy(() => import("./pages/Diary/Diary"));

function App() {
  return (
    <div className="app">
      {/* // fallback 추가하기 */}
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            {/* 로그인 되어있으면 메인페이지로 보내기 */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/map" element={<Map />} />
            <Route path="/diary" element={<Diary />} />
            <Route path="/home" element={<Garden />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
