import * as Yup from "yup";

const phoneRegex = /^0\d{3}\d{3}\d{3}$/;

export const validationSchemaFieldsUserForm = Yup.object().shape({
  phone: Yup.string()
    .transform((value) => value.replace(/\s/g, ""))
    .matches(phoneRegex, "Телефон должен быть в формате 0XXX XXX XXX")
    .required("Поле обязательное"),
  firstName: Yup.string().required("Поле обязательное"),
  lastName: Yup.string().required("Поле обязательное"),
  gender: Yup.string().required("Поле обязательное"),
});
