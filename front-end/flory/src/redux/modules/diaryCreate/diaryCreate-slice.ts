import { createSlice } from "@reduxjs/toolkit";
import { DiaryCreateStateType } from "../../../models/diaryCreate/diaryCreateStateType";
import { createInfoSaveAction } from "./diaryCreate-action";

const initialState: DiaryCreateStateType = {
  diaryCreateData: {
    address: "",
    content: "",
    fid: null,
    gid: null,
    groupList: null,
    imgSrc: "",
    lat: "",
    lng: "",
    mid: null,
    publicStatus: "",
  },
  currentEmotionData: [],
  currentFlowerData: [],
};

const diaryCreateSlice = createSlice({
  name: "diaryCreate",
  initialState,
  reducers: {
    emotionDataSave: (state, action) => {
      const emotionData = action.payload.payload.response.emotions;
      const flowerData = action.payload.payload.response.flowers;
      state.currentEmotionData = [...emotionData];
      state.currentFlowerData = [...flowerData];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createInfoSaveAction.fulfilled, (state, { payload }) => {
      state.diaryCreateData = { ...state.diaryCreateData, ...payload };
    });
  },
});

export const { emotionDataSave } = diaryCreateSlice.actions;

export default diaryCreateSlice.reducer;
