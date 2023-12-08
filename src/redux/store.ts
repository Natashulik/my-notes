import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import notesSlice from "./notesSlice";

const store = configureStore({
  reducer: {
    input: inputSlice,
    notes: notesSlice,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
