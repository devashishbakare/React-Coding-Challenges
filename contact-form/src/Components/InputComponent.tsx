type inputComponentProps = {
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  error: string;
  placeHolder: string;
};

const InputComponent = ({
  type,
  onChange,
  name,
  error,
  placeHolder,
}: inputComponentProps) => {
  return (
    <>
      <div className="h-auto w-full flex flex-col mt-[5px] mt-[px] centerDiv">
        <input
          type={type}
          name={name}
          onChange={onChange}
          className="h-[50px] w-[80%] outline-none pl-2 rounded-[20px] border-2 border-gray-200"
          placeholder={placeHolder}
        />
        {error && (
          <span className="h-auto w-[80%] text-[0.8rem] text-red-400">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

export default InputComponent;
