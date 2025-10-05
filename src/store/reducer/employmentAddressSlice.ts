import { createSlice } from "@reduxjs/toolkit";

type TWorkplaceAddress = {
  workplace: string;
  address: string;
};

type EmploymentAddress = {
  employments: string[];
  workplaceAddress: TWorkplaceAddress | null;
};

type ErrorData = {
  error: string | null;
};

const initialState: EmploymentAddress & ErrorData = {
  employments: [],
  workplaceAddress: null,
  error: null,
};

export const employmentAddressSlice = createSlice({
  name: "userEmploymentAddress",
  initialState,
  reducers: {
    setEmployments: (state, { payload }) => {
      state.employments = payload;
    },
    setEmploymentAddress: (state, { payload }) => {
      state.workplaceAddress = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const { setEmployments, setEmploymentAddress, setError } =
  employmentAddressSlice.actions;

export const userEmploymentAddressReducer = employmentAddressSlice.reducer;
