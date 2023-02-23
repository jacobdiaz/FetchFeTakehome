type HTMLInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  varient?: "Email" | "Password";
};

const Input = (props: HTMLInputProps) => {
  const { varient } = props;

  return (
    <>
      <label htmlFor={varient}>{varient}</label>
      <input
        className='input input-bordered w-full my-2 '
        {...props}
        autoComplete='on'
        placeholder={varient}
        type={varient === "Password" ? "password" : "text"}
        name={varient}
        maxLength={30}
      />
    </>
  );
};

export default Input;
