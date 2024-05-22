import { useEffect, useRef, useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [speed, setSpeed] = useState(null);
  const [battery, setBattery] = useState(null);
  const [weather, setWeather] = useState(50);
  const [range, setRange] = useState(null);
  const [messages, setMessages] = useState([]);

  const calculateRange = () => {
    setRange(null);
    if (checkErrors()) return;

    // s = speed, b = battery percentage w = weather
    // if s=1, b=2, w=50 then range=57.9992
    let s = speed,
      b = battery,
      w = weather;
    let range = -((s * s * b) / 2500) + 4 * b + w;
    console.log(range, "Code is running here");
    setRange(range);
  };

  const checkErrors = () => {
    let messages = [];

    if (speed == null) messages.push("Speed is required");
    if (battery == null) messages.push("Battery is required");
    if (speed < 0 || speed > 90)
      messages.push("The speed should be within a range of 0 and 90");
    if (battery < 0 || battery > 100)
      messages.push(
        "The battery percentage should be within a range of 0 and 100",
      );

    setMessages(messages);
    return messages.length !== 0;
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={speed} setValue={setSpeed} setRange={setRange} />
            <BatteryInput
              value={battery}
              setValue={setBattery}
              setRange={setRange}
            />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput
              value={weather}
              setValue={setWeather}
              setRange={setRange}
            />
          </div>

          <div className="my-4 flex flex-row rounded bg-blue-500 hover:bg-blue-600">
            <button
              type="button"
              className="flex items-center justify-center p-3 text-white"
              onClick={calculateRange}
            >
              Calculate
            </button>
          </div>

          <div className="text-black">
            {range && `The predicted range of the Eylsia is ${range} km.`}
            {messages &&
              messages.map((message, index) => <li key={index}>{message}</li>)}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
