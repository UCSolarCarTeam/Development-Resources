import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [input, setInput] = useState({
    batteryInput: 0,
    speedInput: 0,
    weatherInput: 0,
  });
  const [show, setShow] = useState<boolean>(false);

  const range =
    -((input.speedInput * input.speedInput * input.batteryInput) / 2500) +
    4 * input.batteryInput +
    input.weatherInput;
  const calculateRange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  const isBatteryInputEmpty = input.batteryInput === 0;
  const invalidBatteryInput =
    input.batteryInput < 0 || input.batteryInput > 100;
  const isSpeedInputInvalid = input.speedInput < 0 || input.speedInput > 90;
  const invalidSpeedInput = input.speedInput === 0;

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center p-24 text-white">
        <Header />
        <form
          onSubmit={(e) => calculateRange(e)}
          name="simulator"
          className="flex w-full flex-col items-center"
        >
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput setInput={setInput} setShow={setShow} />
            {isSpeedInputInvalid ? (
              <p className="text-red-500">
                The speed should be with the range of 0 to 90
              </p>
            ) : null}
            {invalidSpeedInput ? (
              <p className="text-red-500">Speed is required</p>
            ) : null}
            <BatteryInput setInput={setInput} setShow={setShow} />
            {isBatteryInputEmpty ? (
              <p className="text-red-500">Battery percentage is required</p>
            ) : null}
            {invalidBatteryInput ? (
              <p className="text-red-500">
                The battery percentage should be with the range of 0 to 100
              </p>
            ) : null}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput setInput={setInput} setShow={setShow} />
          </div>
          <button
            type="submit"
            className="flex h-12 w-32 items-center justify-center rounded-md bg-blue-500"
          >
            Calculate
          </button>
        </form>
        {show && (
          <p>{"The predicted range of the Eylsia is " + range + " km."}</p>
        )}
      </div>
    </div>
  );
};

export default App;
