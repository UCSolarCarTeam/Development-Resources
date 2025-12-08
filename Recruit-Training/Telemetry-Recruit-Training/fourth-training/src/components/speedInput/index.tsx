import React from "react";
const SpeedInput = ({speedValue, isVal}:{speedValue: (value:number) => void; isVal:(value:boolean) => void}) => {
  const [error, setError] = React.useState('')
  function handleChange(speVal:any) {
    const value = speVal.target.value

    if (value === '') {
      setError('Speed is required');
      isVal(false);
      return;
    }
    if (Number(value) > 90 || Number(value) < 0) {
      setError("The speed should be with the range of 0 to 90")
      isVal(false);
      return;
    };
    setError('');
    isVal(true)
    speedValue(Number(value))
  }

  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <label>Speed (km/h):</label>
        <input
          id="speed"
          className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
          name="speed"
          min="0"
          type="number"
          placeholder="Speed"
          onChange={handleChange}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </>
  );
};

export default SpeedInput;
