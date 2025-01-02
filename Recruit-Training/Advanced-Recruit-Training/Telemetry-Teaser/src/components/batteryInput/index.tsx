import { Action } from "~/types/types";

interface Props {
  value: string;
  dispatch: React.Dispatch<Action>;
}

const BatteryInput = ({value, dispatch}: Props) => {
  const handleLetters = (e: any) => {
    if (["e", "E", "+", "-", "."].includes(e.key)) {
      e.preventDefault();
    }
  };
  const handleInput = (e: any) => {
    dispatch({type:'SET_BATTERY_INPUT', payload: e.target.value});
    if (e.target.value) {
      dispatch({type:'SET_IS_CLICKED', payload: false})
    };
  }

  return (
    <div className="flex w-full flex-col items-center gap-2">
      <label>Battery Percentage (%):</label>
      <input
        id="battery"
        className="mx-[8px] w-1/4 rounded-md border border-solid border-[#ccc] px-[20px] py-[12px] text-black"
        name="battery"
        type="number"
        placeholder="Battery"
        onChange={handleInput}
        value = {value}
        onKeyDown = {handleLetters}
      />
    </div>
  );
};

export default BatteryInput;
