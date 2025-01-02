import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="box-border h-1/2 w-1/5 bg-pink-200 rounded-lg">
          <div className="box-border h-1/5 w-5/6 bg-pink-300 rounded-lg m-auto mt-4"></div>
          <div class="h-56 grid grid-cols-3 gap-4 content-start ..." id = "buttons">
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
            <Button />
          </div>
          </div>
        </div>
    </>
  );
}

export default App;
