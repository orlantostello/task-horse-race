import { combineReducers, configureStore } from "@reduxjs/toolkit";
import horsesSlice from "./horsesSlice";

const rootReducer = combineReducers({
  horses: horsesSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
