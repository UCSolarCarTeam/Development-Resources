import { useState } from "react";

interface WeatherInputProps {
  setWeatherInput: (value: number) => void;
  setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

function WeatherInput({ setWeatherInput, setShow }: WeatherInputProps) {
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
          setWeatherInput(Number(e.target.value));
          setSliderValue(Number(e.target.value));
          setShow(false);
        }}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
}

export default WeatherInput;
