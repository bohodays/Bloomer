import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import map from "./modules/map";
import weather from "./modules/weather";
// import persistReducer from "redux-persist/es/persistReducer";

// // storage -> 로컬스토리지를 사용하겠다는 의미
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user", "map", "garden", "diary", "weather"],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

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
