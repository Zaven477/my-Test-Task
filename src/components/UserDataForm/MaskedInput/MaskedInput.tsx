import { IMaskInput } from "react-imask";
import type { MaskedInputProps } from "../types";

export const MaskedInput = ({ field, mask, ...props }: MaskedInputProps) => {
  return (
    <IMaskInput
      {...field}
      {...props}
      mask={mask}
      definitions={{ "9": /[0-9]/ }}
      inputMode="numeric"
    />
  );
};
