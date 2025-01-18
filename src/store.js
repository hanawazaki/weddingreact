import { configureStore } from "@reduxjs/toolkit";
import guestReducer from "./features/guestSlice";

export const store = configureStore({
  reducer: {
    guest: guestReducer,
  },
});
