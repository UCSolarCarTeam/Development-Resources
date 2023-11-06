interface BatteryInputProps {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const BatteryInput = ({onChangeHandler} : BatteryInputProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default BatteryInput;
