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

// 수정된 꽃 위치 백엔드 API 연결해서 서버상에서도 위치 수정시키기
export const updatePositionAction = createAsyncThunk(
  "UPDATEPOSITION",
  async (diaryData: any, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.put(
        `/api/diary/location`,
        { updateDiaries: diaryData },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

// 입력받은 텍스트를 통해 감정 도출
export const getEmotionAction = createAsyncThunk(
  "GETEMOTION",
  async (text: string | undefined, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.post(
        `/api/diary/emotion`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      return data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
