import * as Yup from "yup";

export const validationSchema = Yup.object({
  amount: Yup.number()
    .min(200, "Минимальная сумма $200")
    .max(1000, "Максимальная сумма $1000")
    .required("Выберите сумму займа"),
  term: Yup.number()
    .min(10, "Минимум 10 дней")
    .max(30, "Максимум 30 дней")
    .required("Выберите срок займа"),
});
