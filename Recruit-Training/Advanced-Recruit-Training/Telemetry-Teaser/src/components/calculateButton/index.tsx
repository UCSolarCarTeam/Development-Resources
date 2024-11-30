const CalculateButton = (props) => {
  const { calculatedRange, setCalculatedRange } = props;

  return (
    <div>
      <button className="m-2 rounded-lg bg-sky-600 p-4">Calculate</button>
    </div>
  );
};

export default CalculateButton;
