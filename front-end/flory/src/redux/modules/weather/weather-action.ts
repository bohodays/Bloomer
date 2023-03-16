import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosInitializer } from "../../utils/axiosInitializer"

export const getWeatherAction = createAsyncThunk(
  "GET_WEATHER",
  async (requireData: any, { rejectWithValue }) => {
    try {
      const axios = axiosInitializer()
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${requireData.lat}&lon=${requireData.lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      )
      return data
    } catch (e: any) {
      alert(e.response.requireData.message)
      return rejectWithValue(e)
    }
  }
)
