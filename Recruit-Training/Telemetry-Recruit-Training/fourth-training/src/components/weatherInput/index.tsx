import { State } from "~/App";

export const WeatherInput = ({weatherValue}:{weatherValue: React.Dispatch<Partial<State>>}) => {
  function handleChange (weaval:any) {
    weatherValue({ weather: Number(weaval.target.value) })
  }
  return (
    <>
      <img src="/Cloud.png" height="66px" width="66px" alt="Cloud" />
      <input
        id="weather"
        className="w-1/4"
        type="range"
        min="0"
        defaultValue={50}
        max="100"
        onChange={handleChange}
        required
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

