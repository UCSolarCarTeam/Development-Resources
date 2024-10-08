interface WeatherInputProps {
  value: number | string; // Expecting a string for the input value
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Function to handle changes
}

const WeatherInput: React.FC<WeatherInputProps> = ({ value, onChange }) => {
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
