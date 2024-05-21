import { type Action } from "~/lib/types";

interface BatteryInputProps {
  dispatch: React.Dispatch<Action>;
}

export function BatteryInput({ dispatch }: BatteryInputProps) {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={(e) => {
          const newBatteryInput = Number(e.target.value);
          dispatch({ type: "batteryInput", payload: newBatteryInput });
        }}
      />
    </div>
  );
}

export default BatteryInput;
