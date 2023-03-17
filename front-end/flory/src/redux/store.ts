import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import map from "./modules/map";

const store = configureStore({
  reducer: {
    user,
    map,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
