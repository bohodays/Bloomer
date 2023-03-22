import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

export const getTeamInfoAction = createAsyncThunk(
  "GET",
  async (userData, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/team/member`, {
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
