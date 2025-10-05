import type {
  UserInitials,
  UserLoan,
} from "../components/UserLoanParametersForm/types";

const BASE_URL = "https://dummyjson.com";

export const sendApply = async (dataApply: UserLoan & UserInitials) => {
  const response = await fetch(`${BASE_URL}/products/add`, {
    method: "POST",
    body: JSON.stringify(dataApply),
  });
  return response.json();
};
