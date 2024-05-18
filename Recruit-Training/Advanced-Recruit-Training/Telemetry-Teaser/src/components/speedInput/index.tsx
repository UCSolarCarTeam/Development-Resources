import { type Action } from "~/lib/types";

interface SpeedInputProps {
  dispatch: React.Dispatch<Action>;
}

export function SpeedInput({ dispatch }: SpeedInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "speedInput", payload: Number(e.target.value) });
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
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}

export default SpeedInput;
