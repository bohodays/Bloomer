import { createSlice } from "@reduxjs/toolkit";
import { GroupStateType } from "../../../models/Group/groupStateTypes";
import { getGroupInfoAction } from "./group-action";

const initialState: GroupStateType = {
  userGroupList: [],
  group: {
    loading: false,
    data: null,
    error: null,
  },
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getGroupInfoAction.fulfilled, (state, { payload }) => {
      state.group.loading = false;
      state.group.data = payload;
      state.group.error = null;
      state.userGroupList = payload.response

    })
      .addCase(getGroupInfoAction.rejected, (state, { payload }) => {
        console.log("그룹 불러오기 실패");
      });
  }, 
});

export default groupSlice.reducer;