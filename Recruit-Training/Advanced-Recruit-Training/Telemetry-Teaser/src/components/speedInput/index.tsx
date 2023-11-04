interface Props {
  setSpeed: React.Dispatch<React.SetStateAction<number>>;
  speed: number;
}

const SpeedInput = (props: Props) => {
  const handleSpeedChange = (newValue: number) => {
    props.setSpeed(newValue);
  };
  return (
    <>
      <div className="flex w-full flex-col items-center gap-2">
        <label>Speed (km/h):</label>
        <input
          value={props.speed}
          id="speed"
          className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
          name="speed"
          type="number"
          placeholder="Speed"
          onChange={(e) => {
            handleSpeedChange(parseInt(e.target.value));
          }}
        />
      </div>
    </>
  );
};

export default SpeedInput;
