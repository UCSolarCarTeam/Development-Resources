import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import React, { useState } from "react";

const App = () => {
  const[speed, setSpeed] = useState(0);
  const[battery, setBattery] = useState(100);
  const[weather, setWeather] = useState(0);
  const[range, setRange] = useState(0);

  const calculateRange = () => {
    //range = -(s * s * b / 2500) + (4 * b) + w
    //Where s = speed, b = battery percentage w = weather 
    const calculatedRange = -(speed * speed * battery / 2500) + (4 * battery) + weather;

    setRange(calculatedRange);
    return;
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput />
            <BatteryInput />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput />
          </div>

        {/*make the button*/}
          <div className="mt-8">
            <button type="button" 
            onClick={calculateRange}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-48"
            >
              Calculate</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;
