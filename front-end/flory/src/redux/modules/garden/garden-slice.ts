import { createSlice } from "@reduxjs/toolkit";
import { GardenStateType } from "../../../models/garden/gardenStateType";
import { createGardenAction } from "./garden-action";

const initialState: GardenStateType = {
  gardenData: {
    gardenId: null,
    gardenPath: null,
    nickname: "",
    artist: null,
    title: null,
    deadline: null,
  },
};

const gardenSlice = createSlice({
  name: "garden",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createGardenAction.fulfilled, (state, { payload }) => {
        state.gardenData.gardenId = payload.response.id;
        state.gardenData.gardenPath = payload.response.gardenPath;
        state.gardenData.nickname = payload.response.nickname;
        state.gardenData.artist = payload.response.artist;
        state.gardenData.title = payload.response.title;
        state.gardenData.deadline = payload.response.deadline;
      })
      .addCase(createGardenAction.rejected, (state, { payload }) => {
        console.log("정원 생성 실패");
      });
  },
});

export default gardenSlice.reducer;
