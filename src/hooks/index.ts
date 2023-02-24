import { useEffect, useState } from "react";
import { FormValues } from "../types";
import { isValidEmail } from "../utils";

export const useForm = (
  callback: Function,
  initialState: FormValues = {
    Email: "",
    Name: "",
    Password: "",
    Occupation: "",
    State: {},
    hasValidInputs: false,
  }
) => {
  const [values, setValues] = useState(initialState);
  const [isValidInputs, setIsValidInputs] = useState(false);

  // When values changes, check if the inputs are valid
  useEffect(() => {
    setIsValidInputs(
      Boolean(
        isValidEmail(values.Email) &&
          values.Email.length &&
          values.Password.length > 3 &&
          values.Occupation.length &&
          values.State
      )
    );
  }, [values]);

  const onChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setValues({
      ...values,
      [event.currentTarget.name]:
        // If the input is the State, then we need to set the value to an object
        event.currentTarget.value === "State"
          ? {
              name: event.currentTarget.value,
              abbreviation: event.currentTarget.value,
            }
          : event.currentTarget.value,
    });
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    callback();
  };

  return {
    onChange,
    onSubmit,
    values,
    isValidInputs,
  };
};
