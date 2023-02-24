import { useEffect, useState } from "react";
import { FormValues } from "../types";
import { isValidEmail } from "../utils";

export const useForm = (callback: Function, initialState: FormValues) => {
  const [values, setValues] = useState(initialState);
  const [isValidInputs, setIsValidInputs] = useState(false);

  useEffect(() => {
    const criteria: boolean = Boolean(
      isValidEmail(values.Email) &&
        values.Email.length &&
        values.Password.length > 3 &&
        values.Occupation.length &&
        values.State
    );
    // Check if the inputs are valid
    setIsValidInputs(criteria);
    console.log("criteria", criteria, values);
  }, [values]);

  const onChange = (
    event:
      | React.FormEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    // If the changed input is state create an object
    if (event.currentTarget.name === "State") {
      setValues({
        ...values,
        [event.currentTarget.name]: {
          name: event.currentTarget.value,
          abbreviation: event.currentTarget.value,
        },
      });
    } else {
      setValues({
        ...values,
        [event.currentTarget.name]: event.currentTarget.value,
      });
    }
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
