import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";
import React, { useState, useCallback } from "react";

const App = () => {
  const [speed, setSpeed] = useState<number | string>("");
  const [battery, setBattery] = useState<number | string>("");
  const [weather, setWeather] = useState<number | string>(0);
  const [valid, setValid] = useState(false);


  // Error messages
  const [speedError, setSpeedError] = useState<string>("")
  const [batteryError, setBatteryError] = useState<string>("")

  //to avoid the type errors:
  const handleSpeedChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSpeed(value === "" ? "" : Number(value))
    console.log("Speed:", value); // Add this line
    if(value === ""){
      setValid(false)
    }

  }, [])

  const handleBatteryChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input, or convert to a number
    setBattery(value === "" ? "" : Number(value));
    console.log("Battery:", value); // Add this line
    if(value===""){
      setValid(false)
    }
  }, []);

  const handleWeatherChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow empty input, or convert to a number
    setWeather(value === "" ? "" : Number(value));
    console.log("weather:", value); // Add this line
    if(value===""){
      setValid(false)
    }
  }, []);

  const validInputs = () => {

    //reset battery and speed
    setSpeedError("");
    setBatteryError("");

    //check the input
    if (speed === "") {
      setValid(false);
      setSpeedError("Speed is required");
    } else if (typeof speed === 'number' && (speed > 90 || speed < 0)) {
      setValid(false);
      setSpeedError("The speed should be within the range of 0 to 90");
    }

    if (battery === "") {
      setValid(false);
      setSpeedError("Battery is required");
    }
    else if (typeof battery === "number" && (battery < 0 || battery > 100)) {
      setValid(false);
      setSpeedError("The battery percentage should be within the range of 0 to 100");
    }

    setValid(true);
  }

  //calculate range and then in the return function, call valid inputs. if it returns false, print null, else print confirmatin message
  const range = -(Number(speed) * Number(speed) * Number(battery) / 2500) + (4 * Number(battery)) + Number(weather);


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
            <WeatherInput value={weather} onChange={handleWeatherChange}/>
          </div>

          {/*make the button*/}
<div className="mt-8 text-center"> {/* Add text-center here */}
  <button
    type="button"
    onClick={validInputs}
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-48"
  >
    Calculate
  </button>
  {valid ? ( // Assuming 'valid' is a state that indicates whether the inputs are valid
    <div className="mt-4">
      <p>The predicted range of the Eylsia is {range} km.</p>
    </div>
  ) : null}
</div>


        </form>
      </div>
    </div>
  );
};

export default App;
