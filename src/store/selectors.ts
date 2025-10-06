import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "./reducer/reducers";

export const selectCurrentState = (state: RootState) => state;
export const selectUserData = createSelector(
  selectCurrentState,
  (state) => state.usersData
);
export const selectEmploymentAddress = createSelector(
  selectCurrentState,
  (state) => state.employmentAddress
);

export const selectApplyData = createSelector(
  selectCurrentState,
  (state) => state.applyData
);
