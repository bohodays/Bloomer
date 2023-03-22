import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "../../../models/user/userStateType";
import { localData } from "./token";
import {
  signupAction,
  checkDupEmailAction,
  loginAction,
  logoutAction,
  getUserDataToTokenAction,
} from "./user-action";

const initialState: UserStateType = {
  userData: {
    userId: null,
    nickname: "",
    email: "",
    img: "",
  },
  getUserData: { loading: false, data: null, error: null },
  login: { loading: false, data: null, error: null },
  logout: { loading: false, data: null, error: null },
  axiosState: { loading: false, data: null, error: null },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // 로그인
      .addCase(loginAction.pending, (state) => {
        state.login.loading = true;
        state.login.data = null;
        state.login.error = null;
      })
      .addCase(loginAction.fulfilled, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = payload;
        state.login.error = null;
        localData.setAccessToken(payload.response.accessToken);
        localData.setRefreshToken(payload.response.refreshToken);
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
      })
      // 토큰으로 유저 정보 얻기
      .addCase(getUserDataToTokenAction.pending, (state) => {
        state.getUserData.loading = true;
        state.getUserData.data = null;
        state.getUserData.error = null;
      })
      .addCase(getUserDataToTokenAction.fulfilled, (state, { payload }) => {
        state.getUserData.loading = false;
        state.getUserData.data = payload;
        state.getUserData.error = null;
        state.userData.userId = payload.response.userId;
        state.userData.nickname = payload.response.nickname;
        state.userData.email = payload.response.email;
        state.userData.img = payload.response.img;
      })
      .addCase(getUserDataToTokenAction.rejected, (state, { payload }) => {
        state.getUserData.loading = false;
        state.getUserData.data = null;
        state.getUserData.error = payload;
      })
      // 로그아웃
      .addCase(logoutAction.pending, (state) => {
        state.logout.loading = true;
        state.logout.data = null;
        state.logout.error = null;
      })
      .addCase(logoutAction.fulfilled, (state, { payload }) => {
        state.logout.loading = false;
        state.logout.data = payload;
        state.logout.error = null;
      })
      .addCase(logoutAction.rejected, (state, { payload }) => {
        state.logout.loading = false;
        state.logout.data = null;
        state.logout.error = payload;
      });
  },
});
export default userSlice.reducer;
