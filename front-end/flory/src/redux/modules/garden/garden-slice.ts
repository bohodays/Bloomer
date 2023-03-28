import { createSlice } from "@reduxjs/toolkit";
import { GardenStateType } from "../../../models/garden/gardenStateType";
import {
  createGardenAction,
  getCurrentGardenAction,
  getGardenListAction,
} from "./garden-action";

const initialState: GardenStateType = {
  gardenList: [],
  gardenData: {
    nickname: "",

    deadline: "",

    userId: null,
    gardenId: null,
    musicTitle: null,
    img: null,
  },
};

const gardenSlice = createSlice({
  name: "garden",
  initialState,
  reducers: {
    setGardenData(state, action) {
      state.gardenData = action.payload.gardenData;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createGardenAction.fulfilled, (state, { payload }) => {
        console.log("정원 생성 완료", payload.response.id);
        // state.gardenData.id = payload.response.id;
        // state.gardenData.gardenPath = payload.response.gardenPath;
        // state.gardenData.nickname = payload.response.nickname;
        // state.gardenData.artist = payload.response.artist;
        // state.gardenData.title = payload.response.title;
        // state.gardenData.deadline = payload.response.deadline;
      })
      .addCase(createGardenAction.rejected, (state, { payload }) => {
        console.log("정원 생성 실패");
      })
      .addCase(getCurrentGardenAction.fulfilled, (state, { payload }) => {
        console.log("정원 확인 성공", payload);

        // state.gardenData.id = payload.response.id;
        // state.gardenData.gardenPath = payload.response.gardenPath;
        // state.gardenData.nickname = payload.response.nickname;
        // state.gardenData.artist = payload.response.artist;
        // state.gardenData.title = payload.response.title;
        // state.gardenData.deadline = payload.response.deadline;
      })
      .addCase(getCurrentGardenAction.rejected, (state, { payload }) => {
        console.log("정원 확인 실패");
      })
      .addCase(getGardenListAction.fulfilled, (state, { payload }) => {
        console.log("정원 리스트 확인 성공");
        state.gardenList = payload.response;
      })
      .addCase(getGardenListAction.rejected, (state, { payload }) => {
        console.log("정원 리스트 확인 실패");
      });
  },
});

export default gardenSlice.reducer;
export const gardenActions = gardenSlice.actions;
