interface RangeDisplayProps {
  range: number;
}

const RangeDisplay = ({ range }: RangeDisplayProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-[#212121] py-6 text-lg">
      <p>The predicted range of the Eylsia is {range} KM.</p>
    </div>
  );
};

export default RangeDisplay;

