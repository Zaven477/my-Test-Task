import { ErrorMessage, Field, Form, Formik } from "formik";
import { validationSchemaFieldsUserForm } from "./validationUserForm";
import type { PersonalData } from "./types";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../AppRouter/routes";

export const UserDataForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    phone: "",
    firstName: "",
    lastName: "",
    gender: "",
  };

  const goToEmploymentAddress = (values: PersonalData) => {
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
              <div className="flex flex-col gap-[5px]">
                <label>Телефон:</label>
                <Field
                  type="tel"
                  name="phone"
                  placeholder="0XXX XXX XXX"
                  className="h-[25px] w-[300px]"
                />
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
                  className="h-[25px] w-[300px]"
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
                  className="h-[25px] w-[300px]"
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
                    className="h-[25px] w-[110px]"
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
