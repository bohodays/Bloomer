import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignupType } from "../../../models/user/signUpType";
import { axiosInitializer } from "../../utils/axiosInitializer";

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
