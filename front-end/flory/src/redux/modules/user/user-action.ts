import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginType } from "../../../models/user/loginType";
import { SignupType } from "../../../models/user/signUpType";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "./token";

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
  async (_, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/user/me`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data, "데이터");

      return data;
    } catch (e: any) {
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
      console.log(userData);

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
      alert("회원가입 완료");
      return data;
    } catch (e: any) {
      alert(e.response.data.message);
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
