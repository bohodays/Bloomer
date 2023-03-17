import { ReduxStateType } from "../reduxStateType";
import { UserType } from "./userType";

export type UserStateType = {
  userData: UserType;
  login: ReduxStateType;
  logout: ReduxStateType;
  signup: ReduxStateType;
  checkDupEmail: ReduxStateType;
};
