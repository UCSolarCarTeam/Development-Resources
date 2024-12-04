const WeatherInput = (props) => {
  const { weatherInput, setWeatherInput, setIsClicked } = props;

  function handleInput(e) {
    setWeatherInput(e.target.value);
    if (weatherInput) setIsClicked(false);
  }

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
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
