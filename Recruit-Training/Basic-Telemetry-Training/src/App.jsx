import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="box-border h-1/2 w-1/5 bg-pink-200 rounded-lg">
          <div className="box-border h-1/5 w-5/6 bg-pink-300 rounded-lg m-auto mt-4"></div>
          <div>
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
