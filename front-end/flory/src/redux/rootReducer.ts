import { combineReducers } from "redux";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import weather from "./modules/weather";

export const reducer = combineReducers({
  user,
  garden,
  diary,
  weather,
});
