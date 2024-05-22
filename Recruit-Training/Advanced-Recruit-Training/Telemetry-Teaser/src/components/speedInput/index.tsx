import { type Action, type inputState } from "~/lib/types";

interface SpeedInputProps {
  dispatch: React.Dispatch<Action>;
  input: inputState;
}

export function SpeedInput({ dispatch, input }: SpeedInputProps) {
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
          value={input.speedInput}
          onChange={(e) => {
            const newSpeedInput = e.target.value;
            dispatch({ type: "speedInput", payload: newSpeedInput });
          }}
        />
      </div>
    </>
  );
}

export default SpeedInput;
