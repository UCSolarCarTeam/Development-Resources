import { type Action } from "~/lib/types";

interface WeatherInputProps {
  dispatch: React.Dispatch<Action>;
}

function WeatherInput({ dispatch }: WeatherInputProps) {
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        onChange={(e) => {
          const newWeatherInput = Number(e.target.value);
          dispatch({ type: "weatherInput", payload: newWeatherInput });
        }}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
}

export default WeatherInput;
