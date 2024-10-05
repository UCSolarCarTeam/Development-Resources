import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import React, { useState, useCallback } from "react";

const App = () => {
  const [speed, setSpeed] = useState<number | string>("");
  const [battery, setBattery] = useState<number | string>("");
  const [weather, setWeather] = useState(0);
  const [range, setRange] = useState(-1);


  // Error messages
  const [speedError, setSpeedError] = useState<string>("")
  const [batteryError, setBatteryError] = useState<string>("")

  //to avoid the type errors:
  const handleSpeedChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSpeed(value === "" ? "" : Number(value))
    console.log("Speed:", value); // Add this line

  }, [])

  const handleBatteryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input, or convert to a number
    setBattery(value === "" ? "" : Number(value));
    console.log("Battery:", value); // Add this line

  }, []);
  const validInputs = () => {
    let valid = true;

    //reset battery and speed
    setSpeedError("");
    setBatteryError("");

    //check the input
    if (speed === "") {
      valid = false;
      setSpeedError("Speed is required");
    } else if (typeof speed === 'number' && (speed > 90 || speed < 0)) {
      valid = false;
      setSpeedError("The speed should be within the range of 0 to 90");
    }

    if (battery === "") {
      valid = false;
      setSpeedError("Battery is required");
    }
    else if (typeof battery === "number" && (battery < 0 || battery > 100)) {
      valid = false;
      setSpeedError("The battery percentage should be within the range of 0 to 100");
    }
    return valid;
  }
  const calculateRange = () => {
    //range = -(s * s * b / 2500) + (4 * b) + w
    //Where s = speed, b = battery percentage w = weather 
    if (validInputs()) { //only calculates if the inputs are valid
      const calculatedRange = -(Number(speed) * Number(speed) * Number(battery) / 2500) + (4 * Number(battery)) + weather;
      setRange(calculatedRange);

    } else {
      setRange(-1); // Reset range if inputs are invalid
    }
    console.log(range);
    return range;
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={speed} onChange={handleSpeedChange} />
            {speedError && <div className="text-red-500">{speedError}</div>} {/* speed error message */}

            <BatteryInput value={battery} onChange={handleBatteryChange} />
            {batteryError && <div className="text-red-500">{batteryError}</div>} {/* Battery error message */}

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
            {range === -1 ?
              null :
              <div className="mt-4">
                <p>The predicted range of the Eylsia is {range} km.</p>
              </div>
            }
          </div>

        </form>
      </div>
    </div>
  );
};

export default App;
