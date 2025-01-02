interface CalculatedRange {
  calculatedRange: { message: string; colour: string };
}

const DisplayText = ({ calculatedRange }: CalculatedRange) => {
  return (
    <div className={`p-4 ${calculatedRange.colour}`}>
      {calculatedRange.message}
    </div>
  );
};

export default DisplayText;
