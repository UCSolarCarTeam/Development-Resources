import { InputProps } from '/Users/macbook/Documents/Development-Resources/Recruit-Training/Advanced-Recruit-Training/Telemetry-Teaser/src/InputProps.ts';

const BatteryInput: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default BatteryInput;
