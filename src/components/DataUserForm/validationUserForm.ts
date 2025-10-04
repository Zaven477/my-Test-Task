import * as Yup from "yup";

const phoneRegex = /^0\d{3}\s\d{3}\s\d{3}$/;

export const validationSchemaFieldsUserForm = Yup.object().shape({
  phone: Yup.string()
    .transform((value) => value.trim())
    .matches(phoneRegex, "Телефон должен быть в формате 0XXX XXX XXX")
    .required("Телефон обязателен"),
  firstName: Yup.string().required("Имя обязательно"),
  lastName: Yup.string().required("Фамилия обязательна"),
  gender: Yup.string().required("Пол обязателен"),
});
