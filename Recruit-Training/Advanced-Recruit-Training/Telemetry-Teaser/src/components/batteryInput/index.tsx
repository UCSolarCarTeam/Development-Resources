import type { InputProps } from "~/components/interfaces/interfaces.ts";

const BatteryInput: React.FC<InputProps> = ({ value, stateChanger }) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        value={value === 0 ? "" : value} //if the value is 0, show an empty string. else show the value
        onChange={(event) => stateChanger(Number(event.target.value))}
      />
    </div>
  );
};

export default BatteryInput;
