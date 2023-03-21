import { createSlice } from "@reduxjs/toolkit";
import { createDiaryAction } from "./diary-action";

const initialState: any = {
  diaryList: [],
  create: { loading: false, data: null, error: null },
};

const diarySlice = createSlice({
  name: "diary",
  initialState,
  reducers: {},
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

        console.log(state.create.data);
      })
      .addCase(createDiaryAction.rejected, (state, { payload }) => {
        state.create.loading = false;
        state.create.data = null;
        state.create.error = payload;
      });
  },
});

export default diarySlice.reducer;
