interface Props {
  speed: number;
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
}
const SpeedInput = (props: Props) => {
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
            props.setSpeed(e.target.valueAsNumber);
          }}
        />
      </div>
    </>
  );
};

export default SpeedInput;