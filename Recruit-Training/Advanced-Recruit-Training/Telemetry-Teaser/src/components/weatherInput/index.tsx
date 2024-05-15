// import { useState } from "react";

const WeatherInput = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (num: string) => void;
}) => {
  const handleWeatherIncrement = () => {
    onChange(String(value + 1));
  };
  const handleWeatherDecrement = () => {
    onChange(String(value - 1));
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
        onChange={(e) => onChange(e.target.value)}
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
