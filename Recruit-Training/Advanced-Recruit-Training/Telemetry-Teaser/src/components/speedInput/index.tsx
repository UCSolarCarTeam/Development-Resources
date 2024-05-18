interface SpeedInputProps {
  setSpeedInput: (value: number) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SpeedInput({ setSpeedInput, setShow }: SpeedInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const speedValue = Number(e.target.value);
    setShow(false);
    setSpeedInput(speedValue);
  };

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
          onChange={(e) => handleChange(e)}
        />
      </div>
    </>
  );
}

export default SpeedInput;
