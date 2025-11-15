import BatteryInput from "~/components/batteryInput";
import Header from "~/components/header";
import SpeedInput from "~/components/speedInput";
import WeatherInput from "~/components/weatherInput";

const App = () => {
  const calculateRange = () => {
    return;
  }
  function handleClick() {

  }
  return (
    <div className="h-screen w-screen bg-[#212121]">
      <div className="flex h-full flex-col items-center pt-36 text-white">
        <Header />
        <form name="simulator" className="flex w-full flex-col items-center">
          <div className="mb-4 flex w-full flex-col items-center gap-y-4">
            <SpeedInput />
            <BatteryInput />
          </div>
          <div className="flex w-full flex-row justify-center gap-4">
            <WeatherInput />
          </div>
          <button type="button" onClick={handleClick}>Calculate</button>
        </form>
      </div>
    </div>
  );
};

export default App;
