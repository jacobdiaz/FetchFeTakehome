import { State } from "../types";

type Props<T> = {
  options: T[];
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

const Dropdown = <T extends string | State>({
  options,
  placeholder,
  onChange,
}: Props<T>) => {
  const isState = (option: string | State): option is State => {
    return (
      (option as State).name !== undefined &&
      (option as State).abbreviation !== undefined
    );
  };

  return (
    <div className='my-2 pr-2 '>
      <label htmlFor={placeholder}>Select {placeholder}</label>
      <select
        className='select w-full'
        onChange={onChange}
        name={placeholder}
        defaultValue={placeholder}
      >
        {options.map((option, idx) => {
          if (isState(option)) {
            return (
              <option key={idx}>
                {option.name} {option.abbreviation}
              </option>
            );
          } else {
            return <option key={idx}>{option}</option>;
          }
        })}
      </select>
    </div>
  );
};

export default Dropdown;
