// import { parse } from "path";
// import { stringify } from "querystring";
import { useState } from "react";
import { useReducer } from "react";

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
  type Action =
    | { type: "SET_BATTERY"; payload: number | undefined }
    | { type: "SET_SPEED"; payload: number | undefined }
    | { type: "SET_WEATHER"; payload: number };

  const initialState: InputState = {
    speed: 0,
    battery: 100,
    weather: 50,
  };

  const calculateRange = () => {
    event?.preventDefault();
    setVisible(true);
  };
  function BatteryValid() {
    const battery = inputs["battery"];
    if (battery !== undefined && battery <= 100 && battery >= 0) {
      return true;
    } else {
      return false;
    }
  }

  function SpeedValid() {
    const speed = inputs["speed"];
    if (speed !== undefined && speed <= 90 && speed >= 0) {
      return true;
    } else {
      return false;
    }
  }

  const reducer = (state: InputState, action: Action) => {
    setVisible(false);

    switch (action.type) {
      case "SET_BATTERY":
        return { ...state, battery: action.payload };
      case "SET_SPEED":
        return { ...state, speed: action.payload };
      case "SET_WEATHER":
        return { ...state, weather: action.payload };
      default:
        return state;
    }
  };
  const [inputs, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput
              value={inputs["speed"]}
              onChange={(e) =>
                dispatch({
                  type: "SET_SPEED",
                  payload: parseInt(e.target.value),
                })
              }
            />
            {!SpeedValid() && (
              <p className="text-red-500">
                {" "}
                The speed should be within the range of 0 to 90
              </p>
            )}
            {inputs["speed"] === undefined && (
              <p className="text-red-500">Speed is required</p>
            )}
            <BatteryInput
              value={inputs["battery"]}
              onChange={(e) =>
                dispatch({
                  type: "SET_BATTERY",
                  payload: parseInt(e.target.value),
                })
              }
            />
            {!BatteryValid() && (
              <p className="text-red-500">
                The battery percentage should be with the range of 0 to 100
              </p>
            )}
            {inputs["battery"] === undefined && (
              <p className="text-red-500">Battery percentage is required</p>
            )}
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput
              value={inputs["weather"]}
              onChange={(value) =>
                dispatch({
                  type: "SET_WEATHER",
                  payload: value,
                })
              }
            />
          </div>

          <button
            className="mt-10 h-10 w-60 rounded bg-blue-200 text-white"
            type="submit"
            onClick={() => calculateRange()}
          >
            Submit
          </button>
          {visible &&
            BatteryValid() &&
            SpeedValid() &&
            inputs["battery"] !== undefined &&
            inputs["speed"] !== undefined && (
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
