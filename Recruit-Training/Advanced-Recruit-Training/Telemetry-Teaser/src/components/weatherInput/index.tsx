import { type Action, type inputState } from "~/lib/types";

interface WeatherInputProps {
  dispatch: React.Dispatch<Action>;
  input: inputState;
}

function WeatherInput({ dispatch, input }: WeatherInputProps) {
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        value={input.weatherInput}
        onChange={(e) => {
          const newWeatherInput = e.target.value;
          dispatch({ type: "weatherInput", payload: newWeatherInput });
        }}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
}

export default WeatherInput;
