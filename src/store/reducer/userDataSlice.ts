import { createSlice } from "@reduxjs/toolkit";
import type { PersonalData } from "../../components/UserDataForm/types";

type UserDataForm = {
  userData: PersonalData | null;
};

const initialState: UserDataForm = {
  userData: null,
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    setUserData: (state, { payload }) => {
      state.userData = payload;
    },
  },
});

export const { setUserData } = userDataSlice.actions;

export const userDataReducer = userDataSlice.reducer;
