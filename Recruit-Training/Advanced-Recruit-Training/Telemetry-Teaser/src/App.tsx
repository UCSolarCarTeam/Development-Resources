import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const calculateRange = () => {
    return;
  };

  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(0);
  const [weather, setWeather] = useState(0);

  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => setSpeed(Number(e.target.value));

  const onBatteryChange = (e: React.ChangeEvent<HTMLInputElement>) => setBattery(Number(e.target.value));

  const onWeatherChange = (e: React.ChangeEvent<HTMLInputElement>) => setWeather(Number(e.target.value));


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
            <BatteryInput onChangeHandler={onBatteryChange}/>
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput  onChangeHandler={onWeatherChange}/>
          </div>
          <div className="mb-4 flex w-full flex-row justify-center gap-4">
            <CalculateButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
