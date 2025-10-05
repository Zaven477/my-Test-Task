import * as Yup from "yup";

export const validationSchemaFieldsForm = Yup.object().shape({
  workPlace: Yup.string().required("Поле обязательное"),
  address: Yup.string().required("Полe обязательное"),
});
