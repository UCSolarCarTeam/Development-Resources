interface CalculateButtonProps {
  onClickHandler: () => void;
}

const CalculateButton = ({onClickHandler} : CalculateButtonProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <button
          type="button"
          className="mx-[8px] w-1/4 rounded-md bg-sky-900 px-[20px] py-[12px]"
          onClick={onClickHandler}
        >
          Calculate
        </button>
      </div>
    </>
  );
};

export default CalculateButton;
