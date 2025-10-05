import { createSlice } from "@reduxjs/toolkit";

type Address = {
  address: string;
};

type EmploymentAddress = {
  employments: string[];
  address: Address | null;
};

type ErrorData = {
  error: string | null;
};

const initialState: EmploymentAddress & ErrorData = {
  employments: [],
  address: null,
  error: null,
};

export const employmentAddressSlice = createSlice({
  name: "userEmploymentAddress",
  initialState,
  reducers: {
    setEmployment: (state, { payload }) => {
      state.employments = payload;
    },
    setAddress: (state, { payload }) => {
      state.address = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setEmployment, setAddress, setError } =
  employmentAddressSlice.actions;

export const userEmploymentAddressReducer = employmentAddressSlice.reducer;
