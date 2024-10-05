const WeatherInput = ({stateChanger}) => {
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
        onChange={(event)=>stateChanger(event.target.value)}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
