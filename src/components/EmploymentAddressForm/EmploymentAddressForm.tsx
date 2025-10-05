import { ErrorMessage, Field, Form, Formik } from "formik";
import { fetchWorkplaces } from "../../api/getWorkplaces";
import { validationSchemaFieldsForm } from "./validationFieldsForm";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ROUTES } from "../../AppRouter/routes";

export const EmploymentAddressForm = () => {
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["workplaces"],
    queryFn: fetchWorkplaces,
  });

  const initialValues = {
    workPlace: "",
    address: "",
  };

  const goToUserData = () => {
    navigate(ROUTES.USER_DATA);
  };

  return (
    <Formik
      validationSchema={validationSchemaFieldsForm}
      initialValues={initialValues}
      onSubmit={(values) => {}}
    >
      {() => {
        return (
          <Form>
            <div className="flex flex-col items-center justify-center h-[100vh] gap-[10px]">
              <div className="flex flex-col gap-[5px]">
                <label>Место работы:</label>
                <Field
                  as="select"
                  name="workPlace"
                  className="h-[29px] w-[307px]"
                >
                  <option value="">Выберите место работы</option>
                  {data?.map((name: string, index: number) => (
                    <option key={index}>{name}</option>
                  ))}
                </Field>
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
