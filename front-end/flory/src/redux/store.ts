import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import map from "./modules/map";
import weather from "./modules/weather";

const store = configureStore({
  reducer: {
    user,
    map,
    garden,
    diary,
    weather,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
