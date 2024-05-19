// import { useState } from "react";

const WeatherInput = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (num: number) => void;
}) => {
  const handleWeatherIncrement = () => {
    onChange(value + 1);
  };
  const handleWeatherDecrement = () => {
    onChange(value - 1);
  };

  return (
    <>
      <img
        src="/Cloud.png"
        height="66px"
        width="66px"
        alt="Cloud"
        onClick={() => handleWeatherDecrement()}
      />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
      <img
        src="/Sun.png"
        height="66px"
        width="66px"
        alt="Sun"
        onClick={() => handleWeatherIncrement()}
      />
    </>
  );
};

export default WeatherInput;
