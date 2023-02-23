import { useState } from "react";
import { FormValues } from "../types";
import { isValidEmail } from "../utils";

export const useForm = (callback: Function, initialState: FormValues) => {
  const [values, setValues] = useState(initialState);
  const isValidInputs =
    isValidEmail(values.Email) &&
    values.Email.length &&
    values.Password.length > 3;

  const onChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    let currValidInputs = false;
    // Check if valid inputs
    if (isValidInputs) {
      currValidInputs = true;
    }

    // If the changed input is state create an object
    if (event.currentTarget.name === "State") {
      setValues({
        ...values,
        [event.currentTarget.name]: {
          name: event.currentTarget.value,
          abbreviation: event.currentTarget.value,
        },
        hasValidInputs: currValidInputs,
      });
    } else {
      setValues({
        ...values,
        [event.currentTarget.name]: event.currentTarget.value,
        hasValidInputs: currValidInputs,
      });
    }

    // console.log(values);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
