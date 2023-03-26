import { createAsyncThunk } from "@reduxjs/toolkit";
import { stringify } from "querystring";
import { useAppSelector } from "../../store.hooks";
import { axiosInitializer } from "../../utils/axiosInitializer";
import { localData } from "../user/token";
import { gardenActions } from "./garden-slice";

// 현재 정원 확인
export const getCurrentGardenAction = createAsyncThunk(
  "GET_CURRENT_GARDEN",
  async (_, { dispatch, rejectWithValue }) => {
    try {
      let today = new Date();
      let year = today.getFullYear(); // 년도
      let month = today.getMonth() + 1; // 월
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/garden/date/2023/${month}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      console.log(data, "현재 정원 확인");

      return data;
    } catch (e: any) {
      console.log("오잉?");
      const user = useAppSelector((state) => state.user.userData);
      console.log(user);
      return rejectWithValue(e);
    }
  }
);

// 정원 목록 확인
export const getGardenListAction = createAsyncThunk(
  "GET_GARDEN_LIST",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      const accessToken = localData.getAccessToken();
      const axios = axiosInitializer();
      const { data } = await axios.get(`/api/garden/list/${userId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (data.response.length > 0) {
        const latestDate = data.response[
          data.response.length - 1
        ].deadline.substr(0, 7);
        let today = new Date();
        let year = String(today.getFullYear()); // 년도
        let month = String(today.getMonth() + 1); // 월
        if (month.length < 2) {
          month = "0" + String(month);
        }

        if (latestDate !== String(year) + "-" + String(month)) {
          console.log("최신 아닙니다");
          dispatch(createGardenAction(userId));
        } else {
          const currentGarden = data.response[data.response.length - 1];
          dispatch(
            gardenActions.setGardenData({
              gardenData: currentGarden,
            })
          );
        }
      } else {
        console.log("정원 신규 생성");
        dispatch(createGardenAction(userId));
      }

      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);

// 정원 생성
export const createGardenAction = createAsyncThunk(
  "CREATE",
  async (userId: number, { dispatch, rejectWithValue }) => {
    try {
      console.log("정원 생성 시도합니다");
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
      // const userId = useAppSelector((state) => state.user.userData.userId);
      dispatch(getGardenListAction(userId));
      return data;
    } catch (e: any) {
      return rejectWithValue(e);
    }
  }
);
