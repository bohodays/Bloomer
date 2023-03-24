import { createSlice } from "@reduxjs/toolkit";
import { GroupStateType } from "../../../models/Group/groupStateTypes";
import { getAllGroupByKeywordAction, getGroupInfoAction } from "./group-action";

const initialState: GroupStateType = {
  userGroupList: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getGroupInfoAction.fulfilled, (state, { payload }) => {
        console.log(payload);
      })
      .addCase(getAllGroupByKeywordAction.fulfilled, (state, { payload }) => {
        console.log(state, payload);
      });
  },
});

export default groupSlice.reducer;
