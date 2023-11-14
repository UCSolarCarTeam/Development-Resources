import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import ErrorMessage from "./components/errorMessage";

const App = () => {
  const calculateRange = (s: number, b: number, w:number) => {
    return -(s * s * b / 2500) + (4 * b) + w;
  };

  // Set up hooks for info field states
  const [speed, setSpeed] = useState(Infinity);
  const [battery, setBattery] = useState(Infinity);
  const [weather, setWeather] = useState(50);

  // Set up hooks for error states
  // Going to set empty flags as false so errors don't display at first render
  // Only want errors to display after a button click
  const [isSpeedEmpty, setSpeedEmpty] = useState(false);
  const [isBatteryEmpty, setBatteryEmpty] = useState(false);
  const [isSpeedError, setSpeedError] = useState(false);
  const [isBatteryError, setBatteryError ] = useState(false);

  // Field change event handlers to update states
  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setSpeed(Number(e.target.value));

  const onBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => setBattery(Number(e.target.value));

  const onWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeather(Number(e.target.value));

  // Handle form submit
  const onButtonClick = () => {
    // Check for input errors upon click
    if(speed == Infinity)
      setSpeedEmpty(true);

    if(!(speed >= 0 && speed <= 90))
      setSpeedError(true);

    if(battery == Infinity)
      setBatteryEmpty(true);
    
    if(!(battery >= 0 && battery <= 100))
      setBatteryError(true);
    
  }


  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form
          name="simulator"
          className="flex w-full flex-col items-center bg-[#212121]"

        >
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput onChangeHandler={onSpeedChange} />
            {isSpeedEmpty && <ErrorMessage message="Speed is required."/>}
            {isSpeedError && <ErrorMessage message="The speed should be within the range of 0 to 90."/>}
            <BatteryInput onChangeHandler={onBatteryChange}/>
            {isBatteryEmpty && <ErrorMessage message="Battery percentage is required."/>}
            {isBatteryError && <ErrorMessage message="The battery percentage should be within the range of 0 to 100"/>}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput  onChangeHandler={onWeatherChange}/>
          </div>
          <div className="mb-4 flex w-full flex-row justify-center gap-4">
            <CalculateButton onClickHandler={onButtonClick}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
