import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useForm } from "../hooks";
import { welcomeText } from "../utils";
import { FORM_API } from "../api";
import axios from "axios";
import { State } from "../types";
import Dropdown from "../components/Dropdown";
import bcrypt from "bcryptjs-react";

type Props = {
  showAlert3s: () => void;
  setAlertStatus: (status: number) => void;
};

const LoginForm = ({ showAlert3s, setAlertStatus }: Props) => {
  const handleSubmit = async () => {
    var encryptedPassword = await bcrypt.hash(values.Password, 10);
    await axios
      .post(FORM_API, {
        name: values.Name,
        email: values.Email,
        password: encryptedPassword,
        occupation: values.Occupation,
        state: values.State,
      })
      .then((res) => {
        setAlertStatus(res.status);
        showAlert3s();
      })
      .catch((err) => {});
  };

  const [stateOptions, setStateOptions] = useState<State[]>([]);
  const [occupationOptions, setOccupationOptions] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { values, onChange, onSubmit, isValidInputs } = useForm(handleSubmit, {
    Email: "",
    Name: "",
    Password: "",
    Occupation: "",
    State: {},
    hasValidInputs: false,
  });

  useEffect(() => {
    async function fetchFormOptions() {
      setIsLoading(true);
      const { data } = await axios.get(FORM_API);
      const { states, occupations } = data;
      setStateOptions(states);
      setOccupationOptions(occupations);
      setIsLoading(false);
    }
    fetchFormOptions();
  }, []);

  return (
    <div className='flex justify-center'>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <form
          className=' card w-3/6 bg-base-200 shadow-xl p-12 '
          onSubmit={onSubmit}
        >
          {<h1 className='font-black text-2xl'>Sign In</h1>}
          <p className='my-6'>{welcomeText}</p>
          <Input varient='Name' onChange={onChange} />
          <Input varient='Email' onChange={onChange} />
          <Input varient='Password' onChange={onChange} />

          <div className='flex row'>
            <Dropdown
              options={occupationOptions}
              placeholder='Occupation'
              onChange={onChange}
            />
            <Dropdown
              options={stateOptions}
              placeholder='State'
              onChange={onChange}
            />
          </div>

          <div
            className='tooltip tooltip-bottom'
            data-tip={
              !values.hasValidInputs ? "Please Insert Valid Inputs" : ""
            }
          >
            <button
              className='btn btn-primary w-full mt-8 disabled:opacity-40 disabled:bg-primary disabled:text-white'
              type='submit'
              disabled={!isValidInputs}
            >
              Sign In
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginForm;
