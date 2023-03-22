import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Login from "../../../pages/Login/Login";

export const getWeatherAction = createAsyncThunk(
  "GET_WEATHER",
  async (requireData: any, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${requireData.lat}&lon=${requireData.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      console.log("날씨 데이터 받아오기 성공");

      return data;
    } catch (e: any) {
      alert(e.response.requireData.message);
      return rejectWithValue(e);
    }
  }
);