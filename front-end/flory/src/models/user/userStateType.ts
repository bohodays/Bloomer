import { ReduxStateType } from "../reduxStateType";
import { UserType } from "./userType";

export type UserStateType = {
  userData: UserType;
  getUserData: ReduxStateType;
  login: ReduxStateType;
  logout: ReduxStateType;
  axiosState: ReduxStateType;
};
