import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "../../../models/user/userStateType";
import {
  signupAction,
  checkDupEmailAction,
  loginAction,
  logoutAction,
} from "./user-action";

const initialState: UserStateType = {
  userData: {
    userId: null,
    nickname: "",
    email: "",
    img: "",
  },
  login: { loading: false, data: null, error: null },
  logout: { loading: false, data: null, error: null },
  signup: { loading: false, data: null, error: null },
  checkDupEmail: { loading: false, data: null, error: null },
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
      })
      .addCase(loginAction.rejected, (state, { payload }) => {
        state.login.loading = false;
        state.login.data = null;
        state.login.error = payload;
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
      })
      // 회원가입
      .addCase(signupAction.pending, (state) => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = null;
      })
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = payload;
        state.signup.error = null;
      })
      .addCase(signupAction.rejected, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = null;
        state.signup.error = payload;
      })
      // 이메일 중복 확인
      .addCase(checkDupEmailAction.pending, (state) => {
        state.checkDupEmail.loading = true;
        state.checkDupEmail.data = null;
        state.checkDupEmail.error = null;
      })
      .addCase(checkDupEmailAction.fulfilled, (state, { payload }) => {
        state.checkDupEmail.loading = false;
        state.checkDupEmail.data = payload;
        state.checkDupEmail.error = null;
      })
      .addCase(checkDupEmailAction.rejected, (state, { payload }) => {
        state.checkDupEmail.loading = false;
        state.checkDupEmail.data = null;
        state.checkDupEmail.error = payload;
      });
  },
});
export default userSlice.reducer;
