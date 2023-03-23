import { createAsyncThunk } from "@reduxjs/toolkit";

export const createInfoSaveAction = createAsyncThunk(
  "SAVE",
  async (diaryCreateData: any, { rejectWithValue }) => {
    return diaryCreateData;
  }
);
