import type { FieldInputProps } from "formik";

export type PersonalData = {
  phone: string;
  firstName: string;
  lastName: string;
  gender: string;
};

export type FieldPhone = {
  field: FieldInputProps<string>;
};

export interface MaskedInputProps {
  field: FieldInputProps<string>;
  mask: string;
  placeholder: string;
  className: string;
}
