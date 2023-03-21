import { createAsyncThunk } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

// 현재 정원 확인
export const getCurrentGardenAction = createAsyncThunk(
  "GETCURRENT",
  async (_, { rejectWithValue }) => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/garden/date/${year}/${month}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

// 정원 생성
export const createGardenAction = createAsyncThunk(
  "CREATE",
  async (userId: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(
        `/api/garden`,
        {
          userId: String(userId),
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
