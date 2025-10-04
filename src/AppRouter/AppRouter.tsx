import { Routes, Route, BrowserRouter } from "react-router";
import { DataUserForm } from "../components/DataUserForm/DataUserForm";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DataUserForm />} />
      </Routes>
    </BrowserRouter>
  );
};
