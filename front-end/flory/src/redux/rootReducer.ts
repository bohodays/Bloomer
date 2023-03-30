import { combineReducers } from "redux";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import weather from "./modules/weather";
import diaryCreate from "./modules/diaryCreate";
import group from "./modules/group";
import guestBook from "./modules/guestBook";

export const reducer = combineReducers({
  user,
  garden,
  diary,
  diaryCreate,
  weather,
  group,
  guestBook,
});
