import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {} from "./music-action";

const initialState = {
  musicTitle: "",
  musicUrl: "",
  showMusic: false,
  isPlaying: true,
};

const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {
    updateMusicTitle: (state, action) => {
      state.musicTitle = action.payload;
    },
    updateMusicUrl: (state, action) => {
      state.musicUrl = action.payload;
    },
    updateShowMusic: (state, action) => {
      state.showMusic = action.payload;
    },
    updateIsPlaying: (state, action) => {
      state.isPlaying = action.payload;
    },
    setFirstMusic: (state, action) => {
      if (state.musicTitle === "") {
        state.musicTitle = action.payload;
      }
    },
  },
  extraReducers: (builder) => {},
});

export default musicSlice.reducer;
export const {
  updateMusicTitle,
  updateMusicUrl,
  updateShowMusic,
  updateIsPlaying,
  setFirstMusic,
} = musicSlice.actions;
