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
      if (s >= 0 && s <= 90) {
        if (!isNaN(b)) {
          if (b >= 0 && b <= 100) {
            setOutput("The predicted range of the Eylsia is "+ range+"km");
          } else {
            setOutput(
              "The battery percentage should be with the range of 0 to 100",
            );
          }
        } else {
          setOutput("*Required Battery %*");
        }
      } else {
        setOutput("The speed should be with the range of 0 to 90");
      }
    } else {
      setOutput("*Required Speed*");
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
          className="rounded-md bg-blue-500 px-4 py-2 text-center text-white"
          onClick={() => {
            calculateRange(range);
          }}
        >
          Calculate
        </button>
        <h1 className="py-2" id="outputT">
          {output}
        </h1>
      </div>
    </div>
  );
};

export default App;
