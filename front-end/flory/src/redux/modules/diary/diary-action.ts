import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

// 일기 생성
export const createDiaryAction = createAsyncThunk(
  "CREATE",
  async (diaryData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(`/api/diary`, diaryData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
