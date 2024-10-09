import React from 'react';
import { InputProps } from '/Users/macbook/Documents/Development-Resources/Recruit-Training/Advanced-Recruit-Training/Telemetry-Teaser/src/InputProps.ts';

const WeatherInput: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={onChange}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
