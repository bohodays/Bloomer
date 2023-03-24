import { createAsyncThunk } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import { useAppSelector } from "../../store.hooks";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

// 현재 정원 확인
export const getCurrentGardenAction = createAsyncThunk(
  "GETCURRENT",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/garden/list/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return data;
    } catch (e: any) {
      console.log("오잉?");
      const user = useAppSelector((state) => state.user.userData);
      console.log(user);
      return rejectWithValue(e);
    }
  }
);

// 정원 생성
export const createGardenAction = createAsyncThunk(
  "CREATE",
  async (userId: any, { rejectWithValue }) => {
    try {
      console.log("시도 확인");
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      console.log(userId);
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
