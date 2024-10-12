import React, { useCallback, useMemo, useState } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [speed, setSpeed] = useState<number | string>("");
  const [battery, setBattery] = useState<number | string>("");
  const [weather, setWeather] = useState<number | string>(0);
  const [valid, setValid] = useState(true);
  let range = 0;

  //to avoid the type errors:
  const handleSpeedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSpeed(value === "" ? "" : Number(value));
      console.log("Speed:", value); // Add this line
      if (value === "") {
        setValid(false);
      }
    },
    [],
  );

  const handleBatteryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty input, or convert to a number
      setBattery(value === "" ? "" : Number(value));
      console.log("Battery:", value); // Add this line
      if (value === "") {
        setValid(false);
      }
    },
    [],
  );

  const handleWeatherChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty input, or convert to a number
      setWeather(value === "" ? "" : Number(value));
      console.log("weather:", value); // Add this line
      if (value === "") {
        setValid(false);
      }
    },
    [],
  );

  const validInputs = useMemo((): {
    speedError: string;
    batteryError: string;
    isValid: boolean;
  } => {
    //reset battery and speed
    let speedError = "";
    let batteryError = "";
    let isValid = true;

    //use memo for this function : put the stuff inside the fxn inside the dependency array
    //check the input
    if (speed === "") {
      isValid = false;
      speedError = "Speed is required";
    } else if (Number(speed) < 0 || Number(speed) > 90) {
      isValid = false;
      speedError = "The speed should be within the range of 0 to 90";
    }

    if (battery === "") {
      isValid = false;
      batteryError = "Battery is required";
    } else if (typeof battery === "number" && (battery < 0 || battery > 100)) {
      isValid = false;
      batteryError =
        "The battery percentage should be within the range of 0 to 100";
    }
    return { speedError, batteryError, isValid };
  }, [speed, battery, weather]); //recompute the answer if speed, battery, or weather change

  const handleButtonClick = () => {
    // Use Type Assertion to specify that the queried element is an HTMLInputElement
    /*const speedInput =
      (document.querySelector('input[placeholder="Speed"]') as HTMLInputElement)
        ?.value || "";
    const batteryInput =
      (
        document.querySelector(
          'input[placeholder="Battery"]',
        ) as HTMLInputElement
      )?.value || "";*/

    const { speedError, batteryError, isValid } = validInputs;

    if (!isValid) {
      console.error(speedError, batteryError);
      return;
    }
    //calculate range and then in the return function, call valid inputs. if it returns false, print null, else print confirmatin message
    range =
      -((Number(speed) * Number(speed) * Number(battery)) / 2500) +
      4 * Number(battery) +
      Number(weather);

    console.log(`Calculated range: ${range.toFixed(2)} km`);
  };

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={speed} onChange={handleSpeedChange} />
            {validInputs.speedError && (
              <div className="text-red-500">{validInputs.speedError}</div>
            )}
            {/* speed error message */}
            <BatteryInput value={battery} onChange={handleBatteryChange} />
            {validInputs.batteryError && (
              <div className="text-red-500">{validInputs.batteryError}</div>
            )}
            {/* Battery error message */}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput value={weather} onChange={handleWeatherChange} />
          </div>

          {/*make the button*/}
          <div className="mt-8 text-center">
            {" "}
            {/* Add text-center here */}
            <button
              type="button"
              onClick={handleButtonClick}
              className="w-48 rounded bg-blue-500 px-4 py-2 font-bold text-white"
            >
              Calculate
            </button>
            {valid && ( // Assuming 'valid' is a state that indicates whether the inputs are valid
              <div className="mt-4">
                <p>
                  The predicted range of the Eylsia is {range.toFixed(2)} km.
                </p>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
