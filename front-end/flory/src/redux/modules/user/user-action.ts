import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginType } from "../../../models/user/loginType";
import { SignupType } from "../../../models/user/signUpType";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "./token";
import { getCurrentGardenAction } from "../garden";

// 로그인
export const loginAction = createAsyncThunk(
  "LOGIN",
  async (userData: LoginType, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/user/login`, userData);
      return data;
    } catch (e: any) {
      // alert(e.response.data.message);
      return rejectWithValue(e);
    }
  }
);

// 토큰으로 내 정보 가져오기
export const getUserDataToTokenAction = createAsyncThunk(
  "GETINFO",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      dispatch(getCurrentGardenAction(data.response.userId));
      return data;
    } catch (e: any) {
      dispatch(updateAccessToken());
      return rejectWithValue(e);
    }
  }
);

// 로그아웃
export const logoutAction = createAsyncThunk(
  "LOGOUT",
  // 토큰 타입 지정해줘야 됨!!!
  async (userData: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      await axios.get(`/api/user/logout`, {
        headers: {
          Authorization: `Bearer ${userData}`,
        },
      });
      // return data;
    } catch (e: any) {
      alert(e.response.data.message);
      return rejectWithValue(e);
    }
  }
);

// 회원가입
export const signupAction = createAsyncThunk(
  "SIGNUP",
  async (userData: SignupType, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/user`, userData);
      return data;
    } catch (e: any) {
      alert("회원가입 실패");
      return rejectWithValue(e);
    }
  }
);

// 이메일 중복 확인
export const checkDupEmailAction = createAsyncThunk(
  "CHECK_DUP_EMAIL",
  async (email: string, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/user/check-email/${email}`);
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// refresh token 업데이트
export const updateAccessToken = createAsyncThunk(
  "UPDATE_TOKEN",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const refreshToken = localData.getRefreshToken();
      const axios = axiosInitializer();
      await axios
        .post(`/api/user/access`, { refreshToken, accessToken })
        .then((data: any) => {
          console.log("업데이트 요청", data);
          localData.setAccessToken(data.data.response.accessToken);
          localData.setRefreshToken(data.data.response.refreshToken);
        })
        .then(() => {
          dispatch(getUserDataToTokenAction());
        });
      return await dispatch(getUserDataToTokenAction());
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
