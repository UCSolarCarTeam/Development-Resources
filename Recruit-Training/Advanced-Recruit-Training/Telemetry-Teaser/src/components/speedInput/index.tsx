interface SpeedInputProps {
  setInput: React.Dispatch<
    React.SetStateAction<{
      batteryInput: number;
      speedInput: number;
      weatherInput: number;
    }>
  >;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

export function SpeedInput({ setInput, setShow }: SpeedInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShow(false);
    console.log(e.target.value);
    setInput((prevState) => ({
      ...prevState,
      speedInput: Number(e.target.value),
    }));
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
