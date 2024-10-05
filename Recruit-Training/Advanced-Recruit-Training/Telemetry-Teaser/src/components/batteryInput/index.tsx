interface inputProps {
  stateChanger: (value: number) => void;
}

const BatteryInput: React.FC<inputProps> = ({ stateChanger }) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={(event) => stateChanger(Number(event.target.value))}
      />
    </div>
  );
};

export default BatteryInput;
