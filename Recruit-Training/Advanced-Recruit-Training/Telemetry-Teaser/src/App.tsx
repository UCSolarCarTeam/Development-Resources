import { useEffect, useState } from "react";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [speedInput, setSpeedInput] = useState("");
  const [batteryInput, setBatteryInput] = useState("");
  const [weatherInput, setWeatherInput] = useState("");
  const [calculatedRange, setCalculatedRange] = useState();
  const [isClicked, setIsClicked] = useState(false);
  // console.log(speedInput);
  // console.log(batteryInput);
  // console.log(weatherInput);

  const calculateRange = (s, b, w) => {
    console.log(s);
    console.log(b);
    if (s == "") {
      return ["Speed is required", "text-red-500"];
    } else if (0 > s || s > 90) {
      return [
        "The speed should be within the range of 0 to 90",
        "text-red-500",
      ];
    } else if (b == "") {
      return ["Battery Percentage is required", "text-red-500"];
    } else if (0 > b || b > 100) {
      return [
        "The battery percentage should be within the range of 0 to 100",
        "text-red-500",
      ];
    } else {
      const range = -((s * s * b) / 2500) + 4 * b + w;
      return [
        `The predicted range of the Eylsia is ${range.toString()} km.`,
        "white",
      ];
    }
  };

  // useEffect(() => {
  //   setCalculatedRange(calculateRange(speedInput, batteryInput, weatherInput));
  // }, [speedInput, batteryInput, weatherInput]);

  function handleClick() {
    setCalculatedRange(calculateRange(speedInput, batteryInput, weatherInput));
    setIsClicked(true);
  }

  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput
              setSpeedInput={setSpeedInput}
              speedInput={speedInput}
              setIsClicked={setIsClicked}
            />
            <BatteryInput
              setBatteryInput={setBatteryInput}
              batteryInput={batteryInput}
              setIsClicked={setIsClicked}
            />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput
              setWeatherInput={setWeatherInput}
              weatherInput={weatherInput}
              setIsClicked={setIsClicked}
            />
          </div>
          <div className="flex flex-col justify-center">
            <CalculateButton
              calculatedRange={calculatedRange}
              handleClick={handleClick}
              isClicked={isClicked}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
