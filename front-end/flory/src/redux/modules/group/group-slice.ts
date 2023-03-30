import { createSlice } from "@reduxjs/toolkit";
import { GroupStateType } from "../../../models/Group/groupStateTypes";
import { getAllGroupByKeywordAction, getGroupInfoAction } from "./group-action";

const initialState: GroupStateType = {
  userGroupList: [],
  group: {
    loading: false,
    data: null,
    error: null,
  },
  groupCheckList: [],
};

const groupSlice = createSlice({
  name: "group",
  initialState,
  reducers: {
    replaceCheck(state, action) {
      state.groupCheckList = action.payload.checkList;
    },
    check(state, action) {
      const idx = action.payload.idx;
      for (let i of state.groupCheckList) {
        if (i.teamId === idx) {
          i.check = !i.check;
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGroupInfoAction.fulfilled, (state, { payload }) => {
        state.group.loading = false;
        state.group.data = payload;
        state.group.error = null;
        state.userGroupList = payload.response;
      })
      .addCase(getGroupInfoAction.rejected, (state, { payload }) => {
        console.log("그룹 불러오기 실패");
      });
  },
});

export default groupSlice.reducer;
export const groupActions = groupSlice.actions;
