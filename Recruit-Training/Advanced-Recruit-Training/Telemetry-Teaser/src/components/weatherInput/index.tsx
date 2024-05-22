const WeatherInput = ({ value, setValue }) => {
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
        onChange={(e) => e.target.value !== "" ? setValue(parseInt(e.target.value)) : setValue(null)}
      />
      <img src="/Sun.png" height="66px" width="66px" alt="Sun" />
    </>
  );
};

export default WeatherInput;
