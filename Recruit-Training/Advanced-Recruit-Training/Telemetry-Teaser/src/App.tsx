import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import CalculateButton from "~/components/calculateButton";

import { useState, } from "react";

const App = () => {
  const calculateRange = () => {
    return;
  }

  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(0);

  const onSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value));
    console.log(speed);
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center bg-[#212121]">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput onChangeHandler={onSpeedChange} />
            <BatteryInput />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput />
          </div>
          <div className="flex w-full flex-row justify-center gap-4 mb-4">
            <CalculateButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
