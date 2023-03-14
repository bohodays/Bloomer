import { createSlice } from "@reduxjs/toolkit";
import { UserStateType } from "../../../models/user/userStateType";
import { signupAction, checkDupEmailAction } from "./user-action";

const initialState: UserStateType = {
  userData: {
    userId: null,
    nickname: "",
    email: "",
    img: "",
  },
  signup: { loading: false, data: null, error: null },
  checkDupEmail: { loading: false, data: null, error: null },
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(signupAction.pending, (state) => {
        state.signup.loading = true;
        state.signup.data = null;
        state.signup.error = null;
      })
      .addCase(signupAction.fulfilled, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = payload;
        state.signup.error = null;
      })
      .addCase(signupAction.rejected, (state, { payload }) => {
        state.signup.loading = false;
        state.signup.data = null;
        state.signup.error = payload;
      })
      .addCase(checkDupEmailAction.pending, (state) => {
        state.checkDupEmail.loading = true;
        state.checkDupEmail.data = null;
        state.checkDupEmail.error = null;
      })
      .addCase(checkDupEmailAction.fulfilled, (state, { payload }) => {
        state.checkDupEmail.loading = false;
        state.checkDupEmail.data = payload;
        state.checkDupEmail.error = null;
      })
      .addCase(checkDupEmailAction.rejected, (state, { payload }) => {
        state.checkDupEmail.loading = false;
        state.checkDupEmail.data = null;
        state.checkDupEmail.error = payload;
      });
  },
});
export default userSlice.reducer;
