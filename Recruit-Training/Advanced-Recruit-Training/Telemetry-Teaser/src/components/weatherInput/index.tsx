import { Action } from "~/types/types";

interface Props {
  value: any;
  dispatch: React.Dispatch<Action>;
}

const WeatherInput = ({ value, dispatch }: Props) => {
  const handleInput = (e: any) => {
    dispatch({ type: "SET_WEATHER_INPUT", payload: e.target.value });
    if (e.target.value) {
      dispatch({ type: "SET_IS_CLICKED", payload: false });
    }
  };

  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        max="100"
        defaultValue="50"
        onChange={handleInput}
        value={value}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
