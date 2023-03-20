import { combineReducers } from "redux";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import map from "./modules/map";
import weather from "./modules/weather";

export const reducer = combineReducers({
  user,
  map,
  garden,
  diary,
  weather,
});
