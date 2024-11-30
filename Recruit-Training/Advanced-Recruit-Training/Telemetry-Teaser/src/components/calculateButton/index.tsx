import DisplayText from "../displayMessage";

const CalculateButton = (props) => {
  const { calculatedRange, handleClick, isClicked, setIsClicked } = props;
  console.log(isClicked);

  return (
    <div className="flex flex-col justify-center text-center">
      <button
        type="button"
        onClick={handleClick}
        className="m-2 rounded-lg bg-sky-600 p-4"
      >
        Calculate
      </button>
      {isClicked && <DisplayText calculatedRange={calculatedRange} />}
    </div>
  );
};

export default CalculateButton;
