import { useEffect, useReducer } from "react";

import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import { WeatherInput } from "~/components/weatherInput";

export type State = {
  speed: number | string;
  battery: number | string;
  weather: number;
  isValid: boolean;
  isBatteryValid: boolean;
  isSpeedValid: boolean;
  result: number | null;
};

function App() {
  const [state, setState] = useReducer(
    (state: State, updates: Partial<State>) => ({ ...state, ...updates }),
    {
      speed: "",
      battery: "",
      weather: 50,
      isValid: false,
      isBatteryValid: false,
      isSpeedValid: false,
      result: null,
    },
  );

  useEffect(() => {
    setState({ isValid: state.isBatteryValid && state.isSpeedValid });
  }, [state.isBatteryValid, state.isSpeedValid]);

  function calculateRange() {
    if (state.speed === "" || state.battery === "" || state.weather === 0)
      return null;

    const s = Number(state.speed);
    const b = Number(state.battery);
    const w = Number(state.weather);

    return -((s * s * b) / 2500) + 4 * b + w;
  }

  function handleClick() {
    setState({ result: calculateRange() });
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput
              speedValue={(val) => setState({ speed: val })}
              isVal={(val) => setState({ isSpeedValid: val })}
            />
            <BatteryInput
              batteryValue={(val) => setState({ battery: val })}
              isVal={(val) => setState({ isBatteryValid: val })}
            />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput weatherValue={setState} />
          </div>
          <button
            className="rounded-md bg-blue-600 px-4 py-2 text-center text-white"
            type="button"
            onClick={handleClick}
            disabled={!state.isValid}
          >
            Calculate
          </button>
          {state.result !== null && state.isValid ? (
            <p>
              The predicted range of the Eylsia is {Math.round(state.result)}{" "}
              km.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}

export default App;
