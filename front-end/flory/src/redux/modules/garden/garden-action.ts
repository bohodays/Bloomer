import { createAsyncThunk } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

export default {};

// 정원 생성
export const createGardenAction = createAsyncThunk(
  "CREATE",
  async (userId: string, { rejectWithValue }) => {
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
