import type {
  UserInitials,
  UserLoan,
} from "../components/UserLoanParametersForm/types";
import { BASE_URL } from "../constants";

export const sendApply = async (dataApply: UserLoan & UserInitials) => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify(dataApply),
  });
  return response.json();
};
