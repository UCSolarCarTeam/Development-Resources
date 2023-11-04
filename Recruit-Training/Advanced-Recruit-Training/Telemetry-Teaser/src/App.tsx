import { useState } from "react";
import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const calculateRange = () => {
    return;
  }

  const [speed, setSpeed] = useState(0);
  const [battery, setBattery] = useState(0);
  const [weather, setWeather] = useState(0);

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput speed={speed} setSpeed={setSpeed}/>
            <BatteryInput battery={battery} setBattery={setBattery}/>
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput weather={weather} setWeather={setWeather}/>
          </div>
        </form>
        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={calculateRange}>Calculate</button>
        
      </div>
    </div>
  );
};

export default App;
