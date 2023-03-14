import { ReduxStateType } from "../reduxStateType";
import { UserType } from "./userType";

export type UserStateType = {
  userData: UserType;
  signup: ReduxStateType;
  checkDupEmail: ReduxStateType;
};
