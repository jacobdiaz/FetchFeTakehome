import { useState } from "react";
import { FormValues } from "../types";
import { isValidEmail } from "../utils";

export const useForm = (callback: Function, initialState: FormValues) => {
  const [values, setValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const onChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let currValidInputs = false;
    // Check if valid inputs
    if (
      isValidEmail(values.Email) &&
      values.Email.length &&
      values.Password.length > 3
    ) {
      currValidInputs = true;
    }

    // Set new value
    setValues({
      ...values,
      [event.currentTarget.name]: event.currentTarget.value,
      hasValidInputs: currValidInputs,
    });

    console.log(values);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    isLoading,
  };
};
