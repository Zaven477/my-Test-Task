import { Routes, Route, BrowserRouter } from "react-router";
import { UserDataForm } from "../components/UserDataForm/UserDataForm";
import { EmploymentAddressForm } from "../components/EmploymentAddressForm/EmploymentAddressForm";
import { ROUTES } from "./routes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.USER_DATA} element={<UserDataForm />} />
        <Route path={ROUTES.WORK_ADDRESS} element={<EmploymentAddressForm />} />
      </Routes>
    </BrowserRouter>
  );
};
