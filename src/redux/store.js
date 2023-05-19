/** @format */

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
