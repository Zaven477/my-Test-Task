import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userApplyData: null,
  resultApply: null,
  error: null,
};

export const userApplySlice = createSlice({
  name: "userApply",
  initialState,
  reducers: {
    setUserApply: (state, { payload }) => {
      state.userApplyData = payload;
    },
    setResultApply: (state, { payload }) => {
      state.resultApply = payload;
    },
    setErrorApply: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setUserApply, setResultApply, setErrorApply } =
  userApplySlice.actions;

export const userApplyReducer = userApplySlice.reducer;
