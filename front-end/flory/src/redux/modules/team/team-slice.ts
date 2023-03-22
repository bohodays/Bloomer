import { createSlice } from "@reduxjs/toolkit";
import { TeamStateType } from "../../../models/Team/teamStateTypes";
import { getTeamInfoAction } from "./team-action";

const initialState: TeamStateType = {
  userGroupList: [],
};

const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamInfoAction.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export default teamSlice.reducer;
