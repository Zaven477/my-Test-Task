import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./reducer/reducers";

export const selectUserDataFormState = (state: RootState) => state;
export const selectUserData = createSelector(
  selectUserDataFormState,
  (state) => state.usersData
);
export const selectEmploymentAddress = createSelector(
  selectUserDataFormState,
  (state) => state.employmentAddress
);
