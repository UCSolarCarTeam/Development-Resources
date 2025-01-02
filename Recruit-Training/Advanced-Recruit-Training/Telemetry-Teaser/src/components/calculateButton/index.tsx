import DisplayText from "../displayMessage";
interface Props {
  value: { message: string; colour: string };
  handleClick: any;
  isClicked: boolean;
}
const CalculateButton = ({ value, handleClick, isClicked }: Props) => {
  return (
    <div className={`flex-col justify-center text-center`}>
      <button
        type="button"
        onClick={handleClick}
        className="m-2 rounded-lg bg-sky-600 p-4"
      >
        Calculate
      </button>
      {isClicked && <DisplayText calculatedRange={value} />}
    </div>
  );
};

export default CalculateButton;
