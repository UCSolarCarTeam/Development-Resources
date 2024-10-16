import React, { useCallback, useMemo, useReducer } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

// 1. Define the State interface
interface State {
  speed: number | string;
  battery: number | string;
  weather: number | string;
  changed: {
    speed: boolean;
    battery: boolean;
  };
}

type ActionType =
  | { type: "UPDATE_SPEED"; payload: number | string }
  | { type: "UPDATE_BATTERY"; payload: number | string }
  | { type: "UPDATE_WEATHER"; payload: number | string }
  | {
      type: "CHANGED";
      field: "speed" | "battery" | "weather";
      payload: boolean;
    };

const initialState: State = {
  speed: "",
  battery: "",
  weather: 0,
  changed: {
    speed: false,
    battery: false,
  },
};

const reducer = (state: State, action: ActionType): State => {
  switch (action.type) {
    case "UPDATE_SPEED":
      return { ...state, speed: action.payload };
    case "UPDATE_BATTERY":
      return { ...state, battery: action.payload };
    case "UPDATE_WEATHER":
      return { ...state, weather: action.payload };
    case "CHANGED":
      return {
        ...state,
        changed: { ...state.changed, [action.field]: action.payload },
      };
    default:
      return state;
  }
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { speed, battery, weather } = state; //initialize the state
  let range = 0;

  //to avoid the type errors:
  const handleSpeedChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch({
        type: "UPDATE_SPEED",
        payload: value === "" ? "" : Number(value),
      });
      // Dispatch to update changed state when the input changes
      dispatch({
        type: "CHANGED",
        field: "speed", // Correctly specify the field
        payload: value === "", // Set to true if the value is an empty string
      });

      console.log("Speed:", value); // Add this line
    },
    [],
  );

  const handleBatteryChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty input, or convert to a number
      dispatch({
        type: "UPDATE_BATTERY",
        payload: value === "" ? "" : Number(value),
      });
      console.log("Battery:", value); // Add this line
      // Dispatch to update changed state when the input changes
      dispatch({
        type: "CHANGED",
        field: "battery", // Correctly specify the field
        payload: value === "", // Set to true if the value is an empty string
      });
    },
    [],
  );

  const handleWeatherChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Allow empty input, or convert to a number
      dispatch({
        type: "UPDATE_WEATHER",
        payload: value === "" ? "" : Number(value),
      });
      console.log("weather:", value); // Add this line
      // Dispatch to update changed state when the input changes
      dispatch({
        type: "CHANGED",
        field: "weather", // Correctly specify the field
        payload: value === "", // Set to true if the value is an empty string
      });
    },
    [],
  );
  const validInputs = useMemo(() => {
    //reset battery and speed
    let speedError = "";
    let batteryError = "";
    let isValid = true;

    //check the chnaged fields
    if (state.changed.speed) {
      if (speed === "") {
        isValid = false;
        speedError = "Speed is required";
      } else if (Number(speed) < 0 || Number(speed) > 90) {
        isValid = false;
        speedError = "The speed should be within the range of 0 to 90";
      }
    }

    if (state.changed.battery) {
      if (battery === "") {
        isValid = false;
        batteryError = "Battery is required";
      } else if (
        typeof battery === "number" &&
        (battery < 0 || battery > 100)
      ) {
        isValid = false;
        batteryError =
          "The battery percentage should be within the range of 0 to 100";
      }
    }

    return { speedError, batteryError, isValid };
  }, [state.changed, speed, battery]); //recompute the answer if speed, battery, or weather change

  const handleButtonClick = () => {
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

    // Directly manipulate the DOM to show the calculated range
    document.getElementById(
      "range-output",
    )!.innerText = `The predicted range of the Eylsia is ${range.toFixed(
      2,
    )} km.`;
  };
  //useReducer
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
            <div id="range-output" className="mt-4"></div>
            {/*{valid && ( // Assuming 'valid' is a state that indicates whether the inputs are valid
              <div className="mt-4">
                <p>
                  The predicted range of the Eylsia is {range.toFixed(2)} km.
                </p>
              </div>
            )}*/}
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
