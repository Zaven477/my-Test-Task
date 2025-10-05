import { sendApply } from "../api/sendApply";
import type {
  UserInitials,
  UserLoan,
} from "../components/UserLoanParametersForm/types";
import type { AppDispatch } from "./reducer/reducers";
import { setErrorApply, setResultApply } from "./reducer/userApplySlice";

export const sendDataApply = (dataApply: UserLoan & UserInitials) => {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await sendApply(dataApply);
      if (response) {
        dispatch(setResultApply(response));
      }
    } catch (error) {
      if (error instanceof Error) {
        dispatch(setErrorApply(error.message));
      }
    }
  };
};
