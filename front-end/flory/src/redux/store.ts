import { configureStore } from "@reduxjs/toolkit";
import user from "./modules/user";
import diary from "./modules/diary";
import garden from "./modules/garden";
import diaryCreate from "./modules/diaryCreate";
import weather from "./modules/weather";
// import storage from "redux-persist/lib/storage";
import { reducer } from "./rootReducer";
// import persistReducer from "redux-persist/es/persistReducer";

// storage -> 로컬스토리지를 사용하겠다는 의미
// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["user", "garden", "diary", "weather"],
// };

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: {
    user,
    garden,
    diary,
    diaryCreate,
    weather,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
