import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiaryStateType } from "../../../models/diary/diaryStateType";
import {
  createDiaryAction,
  getAllDiary,
  getDiaryListAction,
  getEmotionAction,
  getDiaryWithMap,
  updatePositionAction,
} from "./diary-action";

const initialState: DiaryStateType = {
  diaryData: [],
  create: { loading: false, data: null, error: null },
  positionUpdate: { loading: false, data: null, error: null },
  allDiaryList: [],
  mapDiaryList: [],
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {
    // 개별 꽃 위치 수정
    positionUpdate: (state, action) => {
      const filteredItem = state.diaryData.filter(
        (item: any) => item.id === action.payload.diaryId
      );

      filteredItem[0].x = action.payload.x;
      filteredItem[0].y = action.payload.y;
      filteredItem[0].z = action.payload.z;
    },
  },
  extraReducers: (builder) => {
    builder
      // 일기 작성
      .addCase(createDiaryAction.pending, (state) => {
        state.create.loading = true;
        state.create.data = null;
        state.create.error = null;
      })
      .addCase(createDiaryAction.fulfilled, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = payload;
        state.create.error = null;
        console.log("일기작성 성공!");
      })
      .addCase(createDiaryAction.rejected, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = null;
        state.create.error = payload;
      })
      // 수정된 꽃들의 위치 서버에 전송
      .addCase(updatePositionAction.pending, (state) => {
        state.positionUpdate.loading = true;
        state.positionUpdate.data = null;
        state.positionUpdate.error = null;
      })
      .addCase(updatePositionAction.fulfilled, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = payload;
        state.positionUpdate.error = null;
      })
      .addCase(updatePositionAction.rejected, (state, { payload }) => {
        state.positionUpdate.loading = false;
        state.positionUpdate.data = null;
        state.positionUpdate.error = payload;
      })
      .addCase(getDiaryListAction.fulfilled, (state, { payload }) => {
        state.diaryData = [...payload.response];
      })
      .addCase(getAllDiary.fulfilled, (state, { payload }) => {
        state.allDiaryList = payload.response;
      })
      .addCase(getDiaryWithMap.fulfilled, (state, { payload }) => {
        state.mapDiaryList = payload.response;
      });
  },
});

export const { positionUpdate } = diarySlice.actions;

export default diarySlice.reducer;
