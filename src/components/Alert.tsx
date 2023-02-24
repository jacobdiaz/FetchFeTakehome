type Props = {
  data: Object;
};

const Alert = (props: Props) => {
  return (
    <div className='flex justify-center absolute w-2/6 bottom-10 left-0 w-screen '>
      <div className='alert alert-success shadow-lg w-2/6 '>
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
          <span>You have Successfully Logged In!</span>
        </div>
      </div>
    </div>
  );
};

export default Alert;
