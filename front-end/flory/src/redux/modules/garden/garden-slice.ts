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
    deadline: "",
    gardenId: null,
    img: null,
    musicTitle: null,
    nickname: "",
    userId: null,
    type: null,
  },
  otherGardenData: {
    deadline: "",
    gardenId: null,
    img: null,
    musicTitle: null,
    nickname: "",
    userId: null,
    type: null,
  },
};

const gardenSlice = createSlice({
  name: "garden",
  initialState,
  reducers: {
    setGardenData(state, action) {
      state.gardenData = action.payload.gardenData;
    },
    setGardenMusic(state, action) {
      state.gardenData.musicTitle = action.payload;
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

        state.otherGardenData = {
          deadline: payload.response.deadline,
          gardenId: payload.response.gardenId,
          img: payload.response.img,
          nickname: payload.response.nickname,
          musicTitle: payload.response.musicTitle,
          userId: payload.response.userId,
          type: payload.response.type,
        };
      })
      .addCase(getCurrentGardenAction.rejected, (state) => {
        console.log("정원 확인 실패");

        state.otherGardenData = {
          deadline: "",
          gardenId: null,
          img: null,
          nickname: "",
          musicTitle: null,
          userId: null,
          type: null,
        };
      })
      .addCase(getGardenListAction.fulfilled, (state, { payload }) => {
        console.log("정원 리스트 확인 성공!!!!!!!!!!!!!!!!!!!!");
        state.gardenList = payload.response;
      })
      .addCase(getGardenListAction.rejected, (state, { payload }) => {
        console.log("정원 리스트 확인 실패");
      });
  },
});

export default gardenSlice.reducer;
export const gardenActions = gardenSlice.actions;
