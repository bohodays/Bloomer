import { createSlice } from "@reduxjs/toolkit";
import { MapStateType } from "../../../models/map/mapStateType";
import useGeolocation from "react-hook-geolocation";

declare global {
  interface Window {
    kakao: any;
  }
}

const initialState: MapStateType = {
  lat: 0,
  long: 0,
  address: "",
};
const mapSlice = createSlice({
  name: "map",
  initialState,
  reducers: {
    findHere(state, action) {
      state.lat = action.payload.lat;
      state.long = action.payload.long;
    },
  },
});

export const mapActions = mapSlice.actions;

export default mapSlice.reducer;
