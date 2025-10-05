import { fetchWorkplaces } from "../api/getWorkplaces";
import { setEmployments, setError } from "./reducer/employmentAddressSlice";
import type { AppDispatch } from "./reducer/reducers";

export const getDataWorkplaces = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await fetchWorkplaces();
      dispatch(setEmployments(response));
      dispatch(setError(null))
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setError(error.message));
        dispatch(setEmployments([]));
      }
    }
  };
};
