const BatteryInput = ({ value, setValue }) => {
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={(e) => e.target.value !== "" ? setValue(parseInt(e.target.value)) : setValue(null)}
      />
    </div>
  );
};

export default BatteryInput;
