const DisplayText = ({ calculatedRange }) => {
  return <div className={`p-4 ${calculatedRange[1]}`}>{calculatedRange[0]}</div>;
};

export default DisplayText;
