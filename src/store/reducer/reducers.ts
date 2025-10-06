import { configureStore } from "@reduxjs/toolkit";
import { userDataReducer } from "./userDataSlice";
import { userEmploymentAddressReducer } from "./employmentAddressSlice";
import { userApplyReducer } from "./userApplySlice";

//Для управления состоянием приложения используется Redux Toolkit, так как он упрощает работу с Redux, сокращает количество шаблонного кода и делает логику состояния более предсказуемой и удобной в поддержке.

export const store = configureStore({
  reducer: {
    usersData: userDataReducer,
    employmentAddress: userEmploymentAddressReducer,
    applyData: userApplyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
