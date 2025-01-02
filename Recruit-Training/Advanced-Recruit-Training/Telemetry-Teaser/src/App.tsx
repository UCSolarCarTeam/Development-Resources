import { useReducer } from "react";

import { Action, State } from "~/types/types";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_SPEED_INPUT":
      return { ...state, speedInput: action.payload };
    case "SET_BATTERY_INPUT":
      return { ...state, batteryInput: action.payload };
    case "SET_WEATHER_INPUT":
      return { ...state, weatherInput: action.payload };
    case "SET_CALCULATED_RANGE":
      return { ...state, calculatedRange: action.payload };
    case "SET_IS_CLICKED":
      return { ...state, isClicked: action.payload };
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, {
    speedInput: "",
    batteryInput: "",
    weatherInput: 50,
    calculatedRange: { message: "", colour: "" },
    isClicked: false,
  });

  const calculateRange = (
    speed: string,
    battery: string,
    weather: number,
  ) => {
    if (speed == "" ) {
      return { message: "Speed is required", colour: "text-red-500" };
    } else if (0 > parseInt(speed) || parseInt(speed) > 90) {
      return {
        message: "The speed should be within the range of 0 to 90",
        colour: "text-red-500",
      };
    } else if (battery == "" ) {
      return {
        message: "Battery Percentage is required",
        colour: "text-red-500",
      };
    } else if (0 > parseInt(battery) || parseInt(battery) > 100) {
      return {
        message:
          "The battery percentage should be within the range of 0 to 100",
        colour: "text-red-500",
      };
    } else {
      const range = -((parseInt(speed) * parseInt(speed) * parseInt(battery)) / 2500) + 4 * parseInt(battery) + weather;
      return {
        message: `The predicted range of the Eylsia is ${range.toString()} km.`,
        colour: "white",
      };
    }
  };

  function handleClick() {
    const result = calculateRange(
      state.speedInput,
      state.batteryInput,
      state.weatherInput,
    );
    dispatch({
      type: "SET_CALCULATED_RANGE",
      payload: result,
    });
    dispatch({ type: "SET_IS_CLICKED", payload: true });
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput value={state.speedInput} dispatch={dispatch} />
            <BatteryInput value={state.batteryInput} dispatch={dispatch} />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput value={state.weatherInput} dispatch={dispatch} />
          </div>
          <div className="flex flex-col justify-center">
            <CalculateButton
              value={state.calculatedRange}
              handleClick={handleClick}
              isClicked={state.isClicked}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
