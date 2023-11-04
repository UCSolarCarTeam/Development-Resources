const WeatherInput = (props: {
  setWeather: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const handleWeatherChange = (newValue: number) => {
    props.setWeather(newValue);
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
        value="50"
        onChange={(e) => {
          if (e.target.value !== " ") {
            handleWeatherChange(parseInt(e.target.value));
          }
        }}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
