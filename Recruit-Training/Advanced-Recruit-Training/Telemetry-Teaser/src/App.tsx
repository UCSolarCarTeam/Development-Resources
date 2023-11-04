import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

import {useState, useEffect} from 'react';

const App = () => {
  const calculateRange = () => {
    return;
  }
  
  const [battery, setBattery] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [weather, setWeather] = useState(0)

  useEffect(() => {
    console.log("Battery: " + battery);
  }, [battery])

  useEffect(()=>{
    console.log("Speed: " + speed)
  }, [speed])

  useEffect(()=>{
    console.log("Visible Sunlight (%): " + weather)
  })

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput speed={battery} setSpeed={setSpeed}/>
            <BatteryInput battery={battery} setBattery={setBattery}/>
            <button id="CalcButt" onClick={(e) => calculateRange()}>Calculate!</button>
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput weather={weather} setWeather={setWeather}/>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
