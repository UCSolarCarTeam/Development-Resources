import { useState } from "react";

import BatteryInput from "~/components/batteryInput";
import CalculateButton from "~/components/calculateButton";
import DisplayText from "~/components/displayMessage";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const [speedInput, setSpeedInput] = useState();
  const [batteryInput, setBatteryInput] = useState();
  const [weatherInput, setWeatherInput] = useState();
  const [calculatedRange, setCalculatedRange] = useState();

  // console.log(speedInput);
  // console.log(batteryInput);
  // console.log(weatherInput);

  // const calculateRange = (speedInput, batteryInput, weatherInput) => {
  //   let range =
  //     -((speedInput * speedInput * batteryInput) / 2500) +
  //     4 * batteryInput +
  //     weatherInput;
  //   setCalculatedRange(range);
  // };

  setCalculatedRange(-((speedInput * speedInput * batteryInput) / 2500) +
  4 * batteryInput +
  weatherInput)
  // error too many re renders --> this doesnt look like an infinite loop to me
  console.log(calculatedRange)
  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput setSpeedInput={setSpeedInput} speedInput={speedInput} />
            <BatteryInput
              setBatteryInput={setBatteryInput}
              batteryInput={batteryInput}
            />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput
              setWeatherInput={setWeatherInput}
              weatherInput={weatherInput}
            />
          </div>
          <CalculateButton />
          <DisplayText calculatedRange = {calculatedRange}/>
        </form>
      </div>
    </div>
  );
};

export default App;
