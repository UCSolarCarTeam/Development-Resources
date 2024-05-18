import { type Action } from "~/lib/types";

interface BatteryInputProps {
  dispatch: React.Dispatch<Action>;
}

export function BatteryInput({ dispatch }: BatteryInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: "batteryInput", payload: Number(e.target.value) });
  };

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default BatteryInput;
