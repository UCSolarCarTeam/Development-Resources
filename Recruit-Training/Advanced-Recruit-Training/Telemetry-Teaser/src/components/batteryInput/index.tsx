const BatteryInput = (props) => {
  const { batteryInput, setBatteryInput, setIsClicked } = props;

  function handleInput(e) {
    setBatteryInput(e.target.value);
    if (batteryInput) setIsClicked(false);
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={handleInput}
      />
    </div>
  );
};

export default BatteryInput;
