import { createSlice } from "@reduxjs/toolkit";
import { GroupStateType } from "../../../models/Group/groupStateTypes";
import { getGroupInfoAction } from "./group-action";

const initialState: GroupStateType = {
  userGroupList: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroupInfoAction.fulfilled, (state, { payload }) => {
      console.log(payload);
    });
  },
});

export default groupSlice.reducer;
