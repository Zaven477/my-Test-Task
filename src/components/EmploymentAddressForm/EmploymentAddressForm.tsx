import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaFieldsForm } from "./validationFieldsForm";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../AppRouter/routes";
import { useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { getDataWorkplaces } from "../../store/effectsDataWorkplaces";
import { selectEmploymentAddress } from "../../store/selectors";
import type { UserAddress } from "./types";
import { setEmploymentAddress } from "../../store/reducer/employmentAddressSlice";

export const EmploymentAddressForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { employments, error } = useAppSelector(selectEmploymentAddress);

  const initialValues = {
    workPlace: "",
    address: "",
  };

  const goToUserData = useCallback(() => {
    navigate(ROUTES.USER_DATA);
  }, [navigate]);

  const goToLoan = useCallback(
    (values: UserAddress) => {
      dispatch(setEmploymentAddress(values));
      navigate(ROUTES.LOAN);
    },
    [dispatch, navigate]
  );

  useEffect(() => {
    dispatch(getDataWorkplaces());
  }, [dispatch]);

  return (
    <Formik
      validationSchema={validationSchemaFieldsForm}
      initialValues={initialValues}
      onSubmit={(values) => goToLoan(values)}
    >
      {() => {
        return (
          <Form>
            <div className="flex flex-col items-center justify-center h-[100vh] gap-[10px]">
              <h2>Адрес и место работы</h2>
              <div className="flex flex-col gap-[5px]">
                <label>Место работы:</label>
                <Field
                  as="select"
                  name="workPlace"
                  className="h-[29px] w-[307px]"
                >
                  <option value="">Выберите место работы</option>
                  {employments.map((name: string, index: number) => (
                    <option key={index}>{name}</option>
                  ))}
                </Field>
                {error && <span className="text-[red]">{error}</span>}
                <ErrorMessage
                  name="workPlace"
                  component="span"
                  className="text-[red] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label>Адрес проживания:</label>
                <Field
                  type="text"
                  name="address"
                  className="h-[25px] w-[300px] pl-[3px]"
                />
                <ErrorMessage
                  name="address"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <div className="flex gap-[10px] ml-[90px] mt-[10px]">
                <button
                  className="w-[100px] h-[30px] bg-[#00BFFF] border-none text-[white] cursor-pointer"
                  type="button"
                  onClick={goToUserData}
                >
                  Назад
                </button>
                <button
                  className="w-[100px] h-[30px] bg-[#00BFFF] border-none text-[white] cursor-pointer"
                  type="submit"
                >
                  Далее
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
