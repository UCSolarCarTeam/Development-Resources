import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import ErrorMessage from "./components/errorMessage";
import RangeDisplay from "./components/rangeDisplay";

const App = () => {
  const calculateRange = (s: number, b: number, w:number) => {
    return -(s * s * b / 2500) + (4 * b) + w;
  };

  // Set up hooks for form field states
  const [speed, setSpeed] = useState("");
  const [battery, setBattery] = useState("");
  const [weather, setWeather] = useState(50);
  const [display, setDisplay] = useState(false);

  // Set up hooks for error states
  // Going to set empty flags as false so errors don't display at first render
  // Only want errors to display after a button click
  const [isSpeedEmpty, setSpeedEmpty] = useState(false);
  const [isBatteryEmpty, setBatteryEmpty] = useState(false);
  const [isSpeedError, setSpeedError] = useState(false);
  const [isBatteryError, setBatteryError ] = useState(false);

  // Field change event handlers to update states
  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Turn off range display. Only button click may turn it on.
    setDisplay(false);
    // Capture new speed value and update error states accordingly
    const newSpeed = e.target.value;
    newSpeed == "" ? setSpeedEmpty(true) : setSpeedEmpty(false);
    !(Number(newSpeed) >= 0 && Number(newSpeed) <= 90) ? setSpeedError(true): setSpeedError(false);
    // Set new speed
    setSpeed(newSpeed);
  };

  const onBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDisplay(false);
    const newBattery = e.target.value;
    (newBattery == "") ? setBatteryEmpty(true): setBatteryEmpty(false);
    !(Number(newBattery) >= 0 && Number(newBattery) <= 100) ? setBatteryError(true) : setBatteryError(false);

    setBattery(newBattery);
  };

  const onWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeather(Number(e.target.value));

  // Handle form submit
  const onButtonClick = () => {
    const isValidInput = !(isSpeedEmpty || isSpeedError || isBatteryEmpty || isBatteryError);
    if(isValidInput)
      setDisplay(true);
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
        {display && <RangeDisplay range={calculateRange(Number(speed), Number(battery), weather)}/>}
        <h1 className=" bg-[#212121]">{String(!(isSpeedEmpty || isSpeedError || isBatteryEmpty || isBatteryError))}</h1>
      </div>
    </div>
  );
};

export default App;
