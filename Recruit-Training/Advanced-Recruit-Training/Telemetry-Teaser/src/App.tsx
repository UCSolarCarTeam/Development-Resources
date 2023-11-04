import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [s, setSpeed] = useState(0);
  const [b, setBattery] = useState(0);
  const [w, setWeather] = useState(0);
  const range = -((s * s * b) / 2500) + 4 * b + w;
  const [output, setOutput] = useState<string>("");

  const calculateRange = (range: any) => {
    if (!isNaN(s)) {
      if (!isNaN(b)) {
        setOutput(range);
      } else {
        setOutput("Enter Value for Battery %");
      }
    } else {
      setOutput("Enter Value for Speed");
    }
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput setSpeed={setSpeed} speed={s} />
            <BatteryInput setBattery={setBattery} battery={b} />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput setWeather={setWeather} />
          </div>
        </form>
        <button
          className="rounded-md bg-blue-700 px-4 py-2 text-center text-white"
          onClick={() => {
            calculateRange(range);
          }}
        >
          Calculate
        </button>
        <h1 className="py-3" id="output">
          {output}
        </h1>
      </div>
    </div>
  );
};

export default App;
