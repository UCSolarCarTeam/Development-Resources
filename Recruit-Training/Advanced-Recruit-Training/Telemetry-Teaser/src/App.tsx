import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [visible, setVisible] = useState(false);
  type InputState = {
    speed: number | undefined;
    battery: number | undefined;
    weather: number;
  };
  const [inputs, setInputs] = useState<InputState>({
    speed: 0,
    weather: 50,
    battery: 100,
  });

  const calculateRange = () => {
    event?.preventDefault();
    setVisible(true);
  };

  const BatteryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setVisible(false);
    if (value) {
      setInputs({ ...inputs, battery: value });
    } else {
      setInputs({ ...inputs, battery: undefined });
    }
  };

  const SpeedChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value);
    setVisible(false);
    if (value !== undefined) {
      setInputs({ ...inputs, speed: value });
    } else {
      setInputs({ ...inputs, speed: undefined });
    }
  };

  const sliderChange = (num: string) => {
    const value = parseFloat(num);
    setInputs({ ...inputs, weather: value });
    setVisible(false);
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={inputs["speed"]} onChange={SpeedChange} />
            {inputs["speed"] !== undefined &&
              (inputs["speed"] > 100 || inputs["speed"] < 0) && (
                <p className="text-red-500">
                  {" "}
                  The speed should be within the range of 0 to 90
                </p>
              )}
            {inputs["speed"] === undefined && (
              <p className="text-red-500">Speed is required</p>
            )}
            <BatteryInput value={inputs["battery"]} onChange={BatteryChange} />
            {inputs["battery"] !== undefined &&
              (inputs["battery"] > 100 || inputs["battery"] < 0) && (
                <p className="text-red-500">
                  The battery percentage should be with the range of 0 to 100
                </p>
              )}
            {inputs["battery"] === undefined && (
              <p className="text-red-500">Battery percentage is required</p>
            )}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput value={inputs["weather"]} onChange={sliderChange} />
          </div>

          <button
            className="mt-10 h-10 w-60 rounded bg-blue-200 text-white"
            onClick={() => calculateRange()}
          >
            Submit
          </button>
          {visible &&
            inputs["speed"] !== undefined &&
            inputs["battery"] !== undefined &&
            inputs["weather"] !== undefined &&
            inputs["battery"] <= 100 &&
            inputs["battery"] >= 0 &&
            inputs["speed"] <= 100 &&
            inputs["speed"] >= 0 && (
              <p className="mt-10">
                The predicted range of the Eylsia is{" "}
                {(
                  -(
                    (inputs["speed"] * inputs["speed"] * inputs["battery"]) /
                    2500
                  ) +
                  4 * inputs["battery"] +
                  inputs["weather"]
                ).toFixed(3)}{" "}
                km
              </p>
            )}
        </form>
      </div>
    </div>
  );
};

export default App;
