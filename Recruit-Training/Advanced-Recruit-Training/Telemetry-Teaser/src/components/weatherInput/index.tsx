import type { InputProps } from "~/components/interfaces/interfaces.ts";

const WeatherInput: React.FC<InputProps> = ({ value, stateChanger }) => {
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        value={value} //if the value is 0, show an empty string. else show the value
        onChange={(event) => stateChanger(Number(event.target.value))}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
