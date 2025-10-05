import { fetchWorkplaces } from "../api/getWorkplaces";
import { setEmployment, setError } from "./reducer/employmentAddressSlice";
import type { AppDispatch } from "./reducer/reducers";

export const getDataWorkplaces = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetchWorkplaces();
      dispatch(setEmployment(response));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
      }
    }
  };
};
