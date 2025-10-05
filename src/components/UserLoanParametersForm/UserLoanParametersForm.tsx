import { ErrorMessage, Form, Formik } from "formik";
import { validationSchema } from "./validation";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../AppRouter/routes";
import { useCallback } from "react";
import type { UserLoan } from "./types";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUserApply } from "../../store/reducer/userApplySlice";
import { selectUserData } from "../../store/selectors";
import { sendDataApply } from "../../store/effectsSendApply";

export const UserLoanParametersForm = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(selectUserData);
  const initialValues = { amount: 200, term: 10 };

  const goToEmploymentAddress = useCallback(() => {
    navigate(ROUTES.WORK_ADDRESS);
  }, [navigate]);

  const apply = useCallback(
    (values: UserLoan) => {
      dispatch(setUserApply(values));
      if (userData) {
        const userInitials = `${userData.firstName} ${userData.lastName}`;
        const dataApply = { title: userInitials, ...values };
        dispatch(sendDataApply(dataApply));
      }
    },
    [dispatch, userData]
  );

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={(values) => apply(values)}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <div className="flex flex-col items-center justify-center h-[100vh] gap-[10px]">
              <h2>Параметры займа</h2>
              <div className="flex flex-col gap-[5px]">
                <label>Сумма займа: {values.amount}</label>
                <input
                  type="range"
                  name="amount"
                  min={200}
                  max={1000}
                  step={100}
                  value={values.amount}
                  onChange={(event) =>
                    setFieldValue("amount", Number(event.target.value))
                  }
                  className="w-[300px] cursor-pointer"
                />
                <ErrorMessage
                  name="amount"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <div className="flex flex-col gap-[5px] mt-[20px]">
                <label>Срок займа: {values.term} дней</label>
                <input
                  type="range"
                  name="term"
                  min={10}
                  max={30}
                  step={1}
                  value={values.term}
                  onChange={(event) =>
                    setFieldValue("term", Number(event.target.value))
                  }
                  className="w-[300px] cursor-pointer"
                />
                <ErrorMessage
                  name="term"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <div className="flex gap-[10px] ml-[90px] mt-[10px]">
                <button
                  className="w-[100px] h-[30px] bg-[#00BFFF] border-none text-[white] cursor-pointer"
                  type="button"
                  onClick={goToEmploymentAddress}
                >
                  Назад
                </button>
                <button
                  className="w-[100px] h-[30px] bg-[#00BFFF] border-none text-[white] cursor-pointer"
                  type="submit"
                >
                  Подать заявку
                </button>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
