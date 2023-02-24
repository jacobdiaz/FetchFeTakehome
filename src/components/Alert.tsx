type AlertProps = {
  status: number | undefined;
};
const Alert = ({ status }: AlertProps) => {
  const alertClass = status === 201 ? "alert-success" : "alert-error";
  return (
    <div className='flex justify-center absolute bottom-10 left-0 w-screen '>
      <div className={`alert ${alertClass} shadow-lg w-fit`}>
        <div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='stroke-current flex-shrink-0 h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>

          <span>
            {" "}
            (StatusCode: {status})
            {status === 201
              ? " You have Successfully Logged In!"
              : " Oops there was an error"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
