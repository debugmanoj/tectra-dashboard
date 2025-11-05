import { configureStore } from "@reduxjs/toolkit";
import doctorReducer from "./slices/doctorSlice.js";

export const store = configureStore({
  reducer: {
    doctors: doctorReducer,
  },
});
