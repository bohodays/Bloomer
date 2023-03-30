import { createSlice } from "@reduxjs/toolkit";
import { GuestBookStateType } from "../../../models/guestBook/GuestBookStateType";
import { getAllGuestBookList } from "./guestBook-action";

// const initialState: GroupStateType = {
//   userGroupList: [],
//   group: {
//     loading: false,
//     data: null,
//     error: null,
//   },
//   groupCheckList: [],
// };
const initialState: GuestBookStateType = {
  guestBookList: [],
};

const guestBookSlice = createSlice({
  name: "guestBook",
  initialState,
  reducers: {
    // replaceCheck(state, action) {
    //   state.groupCheckList = action.payload.checkList;
    // },
    // check(state, action) {
    //   const idx = action.payload.idx;
    //   for (let i of state.groupCheckList) {
    //     if (i.tseamId === idx) {
    //       i.check = !i.check;
    //     }
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllGuestBookList.fulfilled, (state, { payload }) => {
      state.guestBookList = payload.response;
    });
    // .addCase(getGroupInfoAction.rejected, (state, { payload }) => {
    //   console.log("그룹 불러오기 실패");
    // });
  },
});

export default guestBookSlice.reducer;
// export const guestBookActions = guestBookSlice.actions;
