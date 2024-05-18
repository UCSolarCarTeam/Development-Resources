import { useState } from "react";

interface WeatherInputProps {
  setInput: React.Dispatch<
    React.SetStateAction<{
      batteryInput: number;
      speedInput: number;
      weatherInput: number;
    }>
  >;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeatherInput({ setInput, setShow }: WeatherInputProps) {
  const [sliderValue, setSliderValue] = useState(50);
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        value={sliderValue}
        onChange={(e) => {
          const newWeatherInput = Number(e.target.value);
          setInput((prevState) => ({
            ...prevState,
            weatherInput: newWeatherInput,
          }));
          setSliderValue(newWeatherInput);
          setShow(false);
        }}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
}

export default WeatherInput;
