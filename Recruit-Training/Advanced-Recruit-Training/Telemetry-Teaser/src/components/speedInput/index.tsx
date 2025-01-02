import { Action } from "~/types/types";

interface Props {
  value: string;
  dispatch: React.Dispatch<Action>;
}

const SpeedInput = ({ value, dispatch }: Props) => {
  const handleLetters = (e: any) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };
  const handleInput = (e: any) => {
    dispatch({ type: "SET_SPEED_INPUT", payload: e.target.value });
    if (e.target.value) {
      dispatch({ type: "SET_IS_CLICKED", payload: false });
    }
  };

  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <label>Speed (km/h):</label>
        <input
          id="speed"
          className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
          name="speed"
          type="number"
          placeholder="Speed"
          onChange={handleInput}
          value={value}
          onKeyDown={handleLetters}
        />
      </div>
    </>
  );
};

export default SpeedInput;
