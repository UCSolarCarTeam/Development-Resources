import type { InputProps } from "~/components/interfaces/interfaces.ts";

const SpeedInput: React.FC<InputProps> = ({ value, stateChanger }) => {
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
          value={value === 0 ? "" : value} //if the value is 0, show an empty string. else show the value
          onChange={(event) => stateChanger(Number(event.target.value))}
        />
      </div>
    </>
  );
};

export default SpeedInput;
