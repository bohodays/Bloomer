import { createSlice } from "@reduxjs/toolkit"
import { ReduxStateType } from "../../../models/reduxStateType"
import { getWeatherAction } from "./weather-action"

const initialState: ReduxStateType = {
  loading: false,
  data: null,
  error: null,
}

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeatherAction.pending, (state) => {
      state.loading = true
      state.data = null
      state.error = null
    })
    builder.addCase(getWeatherAction.fulfilled, (state, { payload }) => {
      state.loading = false
      state.data = payload
      state.error = null
    })
    builder.addCase(getWeatherAction.rejected, (state, { payload }) => {
      state.loading = false
      state.data = null
      state.error = payload
    })
  },
})

export default weatherSlice.reducer
