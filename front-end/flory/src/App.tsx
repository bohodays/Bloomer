import React, { Suspense, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router";
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
import GroupSignUpList from "./pages/GroupSignUpList/GroupSignUpList";
import {
  createGardenAction,
  getGardenListAction,
} from "./redux/modules/garden";
import SignupMusicSelect from "./pages/SignupMusicSelect/SignupMusicSelect";
import Signup from "./pages/Signup/Signup";
import GardenOther from "./pages/GardenOther/GardenOther";
import withoutAuth from "./utils/withoutAuth";
import withAuth from "./utils/withAuth";
import checkGarden from "./utils/checkGarden";

// 코드 스플리팅 (Code Splitting)
const Main = React.lazy(() => import("./pages/Main/Main"));
const Login = React.lazy(() => import("./pages/Login/Login"));
// const Signup = React.lazy(() => import("./pages/Signup/Signup"));
// const SignupMusicSelect = React.lazy(
//   () => import("./pages/SignupMusicSelect/SignupMusicSelect")
// );
const Map = React.lazy(() => import("./pages/Map/Map"));
const MyPage = React.lazy(() => import("./pages/MyPage/MyPage"));
const Diary = React.lazy(() => import("./pages/Diary/Diary"));
const DiaryCreate = React.lazy(() => import("./pages/DiaryCeate/DiaryCreate"));
const DiarySelect = React.lazy(() => import("./pages/DiarySelect/DiarySelect"));
const Garden = React.lazy(() => pMinDelay(import("./pages/Garden/Garden"), 0));
const GardenEdit = React.lazy(() => import("./pages/GardenEdit/GardenEdit"));
const GardenList = React.lazy(() => import("./pages/GardenList/GardenList"));
const Setting = React.lazy(() => import("./pages/Setting/Setting"));
const DiaryMusicSlect = React.lazy(
  () => import("./pages/DiaryMusicSelect/DiaryMusicSelect")
);
const GuestBook = React.lazy(() => import("./pages/GuestBook/GuestBook"));
const GuestBookCreate = React.lazy(
  () => import("./pages/GuestBookCreate/GuestBookCreate")
);
const Info = React.lazy(() => import("./pages/Info/Info"));
const GardenTheme = React.lazy(() => import("./pages/GardenTheme/GardenTheme"));
const OauthRedirect = React.lazy(
  () => import("./pages/OauthRedirect/OauthRedirect")
);

let isInitial = true;
function App() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.user.userData.userId);
  const gardenId = useAppSelector((state) => state.garden.gardenData.gardenId);

  useEffect(() => {
    if (isInitial) {
      if (localData.getAccessToken()) {
        if (userId === 0) {
          dispatch(getUserDataToTokenAction()).then((data: any) => {
            console.log("data", data);
            // dispatch(getGardenListAction(data.payload.response.userId));
          });
        }
      }
      isInitial = false;
    }
  }, [dispatch]);

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
            <Route path="/signup/music" element={<SignupMusicSelect />} />
            <Route path="/map" element={withAuth(<Map />)} />
            <Route path="/diary/create" element={withAuth(<DiaryCreate />)} />
            <Route path="/diary/select" element={withAuth(<DiarySelect />)} />
            <Route
              path="/diary/select/music"
              element={withAuth(<DiaryMusicSlect />)}
            />
            <Route path="/mypage" element={withAuth(<MyPage />)} />
            <Route path="/diary" element={withAuth(<Diary />)} />
            <Route path="/diary/:diaryId" element={withAuth(<DiaryDetail />)} />
            <Route path="/gardenTheme" element={withAuth(<GardenTheme />)} />
            <Route path="/garden" element={withAuth(<Garden />)} />
            <Route path="/garden/:userId" element={<GardenOther />} />
            <Route path="/garden/edit" element={withAuth(<GardenEdit />)} />
            <Route path="/garden/list" element={withAuth(<GardenList />)} />
            <Route path="/guestbook" element={withAuth(<GuestBook />)} />
            <Route
              path="/guestbook/create"
              element={withAuth(<GuestBookCreate />)}
            />
            <Route path="/setting" element={withAuth(<Setting />)} />
            <Route path="/group/list" element={withAuth(<GroupList />)} />
            <Route path="/group/list/signup/:groupId" element={<GroupSignUpList />} />
            <Route path="/info" element={<Info />} />
            <Route path="/oauth2-redirect" element={<OauthRedirect />} />
            {/* 404 Not Found 추가해야 됨 */}
          </Routes>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
