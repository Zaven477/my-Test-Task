import { configureStore } from "@reduxjs/toolkit";
import { userDataReducer } from "./userDataSlice";
import { userEmploymentAddressReducer } from "./employmentAddressSlice";
import { userApplyReducer } from "./userApplySlice";

export const store = configureStore({
  reducer: {
    usersData: userDataReducer,
    employmentAddress: userEmploymentAddressReducer,
    applyData: userApplyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
