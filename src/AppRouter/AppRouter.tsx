import { Routes, Route, BrowserRouter } from "react-router";
import { UserDataForm } from "../components/UserDataForm/UserDataForm";
import { EmploymentAddressForm } from "../components/EmploymentAddressForm/EmploymentAddressForm";
import { ROUTES } from "./routes";
import { UserLoanParametersForm } from "../components/UserLoanParametersForm/UserLoanParametersForm";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.USER_DATA} element={<UserDataForm />} />
        <Route path={ROUTES.EMPLOYMENT_ADDRESS} element={<EmploymentAddressForm />} />
        <Route path={ROUTES.LOAN_PARAMETERS} element={<UserLoanParametersForm />} />
      </Routes>
    </BrowserRouter>
  );
};
