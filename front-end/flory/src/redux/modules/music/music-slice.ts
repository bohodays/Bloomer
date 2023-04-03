import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {} from "./music-action";

const initialState = {
  musicTitle: "",
  musicUrl: "",
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    updateMusicTitle: (state, action) => {
      state.musicTitle = action.payload.musicTitle;
    },
    updateMusicUrl: (state, action) => {
      state.musicUrl = action.payload.musicUrl;
    },
  },
  extraReducers: (builder) => {},
});

export default musicSlice.reducer;
export const { updateMusicTitle, updateMusicUrl } = musicSlice.actions;
