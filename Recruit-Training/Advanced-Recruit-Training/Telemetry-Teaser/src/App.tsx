import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [speed, setSpeed] = useState<number | undefined>(0);
  const [speedValid, setSpeedValid] = useState(true);
  const [battery, setBattery] = useState<number | undefined>(100);
  const [batteryValid, setBatteryValid] = useState(true);
  const [weather, setWeather] = useState(50);
  const [range, setRange] = useState<number | null>(null);

  const calculateRange = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();
    if (
      speed !== undefined &&
      weather !== undefined &&
      battery !== undefined &&
      batteryValid &&
      speedValid
    ) {
      const value = parseFloat(
        (-((speed * speed * battery) / 2500) + 4 * battery + weather).toFixed(
          3,
        ),
      );

      setRange(value);
    } else {
      setRange(null);
    }
  };

  const BatteryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    if (value <= 100 && value >= 0) {
      setBattery(value);
      setBatteryValid(true);
    } else if (value > 100 || value < 0) {
      setBatteryValid(false);
      setBattery(value);
    } else {
      setBattery(undefined);
      setBatteryValid(true);
    }
  };

  const SpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);

    if (value <= 90 && value >= 0) {
      setSpeed(value);
      setSpeedValid(true);
    } else if (value > 90 || value < 0) {
      setSpeedValid(false);
      setSpeed(value);
    } else {
      setSpeed(undefined);
      setSpeedValid(true);
    }
  };

  const sliderChange = (num: string) => {
    const value = parseFloat(num);
    setWeather(value);
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={speed} onChange={SpeedChange} />
            {!speedValid && (
              <p className="text-red-500">
                {" "}
                The speed should be with the range of 0 to 90
              </p>
            )}
            {speed === undefined && (
              <p className="text-red-500">Speed is required</p>
            )}
            <BatteryInput value={battery} onChange={BatteryChange} />
            {!batteryValid && (
              <p className="text-red-500">
                The battery percentage should be with the range of 0 to 100
              </p>
            )}
            {battery === undefined && (
              <p className="text-red-500">Battery percentage is required</p>
            )}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput value={weather} onChange={sliderChange} />
          </div>

          <button
            className="mt-10 h-10 w-60 rounded bg-blue-200 text-white"
            onClick={(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
              calculateRange(event)
            }
          >
            Submit
          </button>
          {range && (
            <p className="mt-10">
              The predicted range of the Eylsia is {range} km
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default App;
