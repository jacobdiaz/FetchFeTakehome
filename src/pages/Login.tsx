import { useEffect, useState } from "react";
import Input from "../components/Input";
import { useForm } from "../hooks";
import { welcomeText } from "../utils";
import { FORM_API } from "../api";
import axios from "axios";
import { State } from "../types";
import Dropdown from "../components/Dropdown";

const Login = () => {
  const handleSubmit = () => {
    // Call HTTP Post
  };

  const [stateOptions, setStateOptions] = useState<State[]>([]);
  const [occupationOptions, setOccupationOptions] = useState<string[]>([]);

  const { values, onChange, onSubmit, isLoading } = useForm(handleSubmit, {
    Email: "",
    Password: "",
    Occupation: "",
    State: {},
    hasValidInputs: false,
  });

  useEffect(() => {
    // call fetch with Form API
    async function fetchFormOptions() {
      const { data } = await axios.get(FORM_API);
      const { states, occupations } = data;
      setStateOptions(states);
      setOccupationOptions(occupations);
    }
    fetchFormOptions();
  }, []);

  //   const { errors, setErrors } = useState([]);

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <form
          className='card w-1/3 bg-base-200 shadow-xl p-12 '
          onSubmit={onSubmit}
        >
          {<h1 className='font-black text-2xl'>Sign In</h1>}
          <p className='my-6'>{welcomeText}</p>
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
          <button
            className='btn btn-primary mt-8 disabled:opacity-40 disabled:bg-primary disabled:text-white'
            type='submit'
            disabled={!values.hasValidInputs}
          >
            Sign In
          </button>
        </form>
      )}
    </>
  );
};

export default Login;
