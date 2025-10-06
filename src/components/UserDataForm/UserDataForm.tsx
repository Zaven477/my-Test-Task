import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaFieldsUserForm } from "./validationUserForm";
import type { FieldPhone, PersonalData } from "./types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../AppRouter/routes";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { setUserData } from "../../store/reducer/userDataSlice";
import { selectUserData } from "../../store/selectors";
import { MaskedInput } from "./MaskedInput/MaskedInput";

//В приложении используется библиотека Formik, так как она хорошо подходит для работы с многошаговыми формами.
//Логика формы изолируется внутри Formik, что делает код более читаемым и масштабируемым и хорошо интегрируется с Yup.
//Для стилизации использую Tailwind CSS, потому что он обеспечивает быструю разработку интерфейса за счёт утилитарных классов.

export const UserDataForm = () => {
  const dispatch = useAppDispatch();
  const { userData } = useAppSelector(selectUserData);
  const navigate = useNavigate();

  const initialValues = {
    phone: userData?.phone || "",
    firstName: userData?.firstName || "",
    lastName: userData?.lastName || "",
    gender: userData?.gender || "",
  };

  const goToEmploymentAddress = (values: PersonalData) => {
    dispatch(setUserData(values));
    navigate(ROUTES.WORK_ADDRESS);
  };

  return (
    <Formik
      validationSchema={validationSchemaFieldsUserForm}
      initialValues={initialValues}
      onSubmit={(values) => goToEmploymentAddress(values)}
    >
      {() => {
        return (
          <Form>
            <div className="flex flex-col items-center justify-center h-[100vh] gap-[10px]">
              <h2>Личные данные</h2>
              <div className="flex flex-col gap-[5px]">
                <label>Телефон:</label>
                <Field name="phone">
                  {({ field }: FieldPhone) => (
                    <MaskedInput
                      field={field}
                      mask="0 000 000 000"
                      placeholder="0XXX XXX XXX"
                      className="h-[25px] w-[300px] text-[16px]"
                    />
                  )}
                </Field>
                <ErrorMessage
                  name="phone"
                  component="span"
                  className="text-[red] w-[300px]"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label>Имя:</label>
                <Field
                  type="text"
                  name="firstName"
                  className="h-[25px] w-[300px] text-[16px]"
                />
                <ErrorMessage
                  name="firstName"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label>Фамилия:</label>
                <Field
                  type="text"
                  name="lastName"
                  className="h-[25px] w-[300px] text-[16px]"
                />
                <ErrorMessage
                  name="lastName"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <div className="flex flex-col gap-[5px] items-center mt-[10px] mr-[160px]">
                <div className="flex gap-[5px]">
                  <label>Пол:</label>
                  <Field
                    as="select"
                    name="gender"
                    className="h-[25px] w-[140px] text-[16px]"
                  >
                    <option value="">Выберите пол</option>
                    <option value="male">Мужской</option>
                    <option value="female">Женский</option>
                  </Field>
                </div>
                <ErrorMessage
                  name="gender"
                  component="span"
                  className="text-[red]"
                />
              </div>
              <button
                className="w-[100px] h-[30px] ml-[200px] bg-[#00BFFF] border-none text-[white] cursor-pointer"
                type="submit"
              >
                Далее
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};
