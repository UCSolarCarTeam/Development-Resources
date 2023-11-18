interface Props {
  setBattery: React.Dispatch<React.SetStateAction<number>>;
  battery: number;
}

const BatteryInput = (props: {
  setBattery: React.Dispatch<React.SetStateAction<number>>;
  battery: number;
}) => {
  const handleBatteryChange = (newValue: number) => {
    props.setBattery(newValue);
  };
  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        value={props.battery}
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={(e) => {
          handleBatteryChange(parseInt(e.target.value));
        }}
      />
    </div>
  );
};

export default BatteryInput;
