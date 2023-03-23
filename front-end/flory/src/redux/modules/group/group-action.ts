import { createAsyncThunk } from "@reduxjs/toolkit";
import { GroupCreateType } from "../../../models/Group/groupCreateType";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";

export const getGroupInfoAction = createAsyncThunk(
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

export const createGroupAction = createAsyncThunk(
  "CREATE_GROUP",
  async (groupCreateData: GroupCreateType, { rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      console.log("data", groupCreateData);
      console.log("token", accessToken);

      const { data } = await axios.post(`/api/team`, groupCreateData, {
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
