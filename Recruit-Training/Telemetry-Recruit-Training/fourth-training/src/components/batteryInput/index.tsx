import React from "react";
const BatteryInput = ({batteryValue, isVal}:{batteryValue:(value:number) => void; isVal:(value:boolean) => void}) => {
  const [error, setError] = React.useState<string>('');
  function handleChange(batVal:any) {
    const value = batVal.target.value;
    if (value === '') {
      setError('Battery percentage is required');
      isVal(false);
      return;
    }
    if (Number(value) > 100 || Number(value) < 0) {
      setError('The battery percentage should be within the range of 0 to 100');
      isVal(false);
      return;
    }
    setError('');
    isVal(true)
    batteryValue(Number(value));
    
  }
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        min={0}
        max={100}
        type="number"
        placeholder="Battery"
        onChange={handleChange}
        required
      />
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default BatteryInput;
