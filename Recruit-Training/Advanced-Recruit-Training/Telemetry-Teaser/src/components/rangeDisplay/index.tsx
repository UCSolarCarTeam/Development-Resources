interface RangeDisplayProps {
  range: number;
}

const RangeDisplay = ({ range }: RangeDisplayProps) => {
  return (
    <div className="flex w-full flex-col items-center gap-2 bg-[#212121]">
      <p>The range of Elsia is {range}</p>
    </div>
  );
};

export default RangeDisplay;

