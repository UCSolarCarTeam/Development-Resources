const SpeedInput = ({ value, setValue, setRange }) => {
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
          onChange={(e) => {
            setRange(null);
            e.target.value !== ""
              ? setValue(parseInt(e.target.value))
              : setValue(null);
          }}
        />
      </div>
    </>
  );
};

export default SpeedInput;
