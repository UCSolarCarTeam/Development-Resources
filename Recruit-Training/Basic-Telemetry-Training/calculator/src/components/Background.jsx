import React, { useState } from "react";
import Button from "./Button";
import Screen from "./Screen";

export default function Background() {
  const operations = ["+", "-", "/", "*"];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "ac", "="];
  const [num, setNum] = useState("");
  const [operation, setOperation] = useState("");
  const [equation, setEquation] = useState("");
  const [isError, setisError] = useState(false);

  const handleOperation = (operation) => {
    if (!isError) {
      if ("/+*-".includes(equation.slice(-1))) {
        return "";
      } else {
        setEquation((prevSetEquation) => prevSetEquation.concat(operation));
        setOperation(operation);
      }
    } else {
      setEquation("");
      setisError(false);
    }
  };

  const handleNum = (num) => {
    if (!isError) {
      if (typeof num === "number") {
        setEquation((prevSetEquation) =>
          prevSetEquation.concat(num.toString())
        );
        setNum(num);
      } else {
        switch (num) {
          case "ac":
            setEquation("");
            break;
          case "=":
            const sol = calculateEquation(equation);
            if (sol === "error") {
              setEquation("error");
            } else {
              setEquation(sol.toString());
            }
            break;
        }
      }
    } else {
      setEquation("");
      setisError(false);
    }
  };

  const calculateEquation = (equation) => {
    const cleaned = equation.replace(/\b0+(?!\b)/g, ""); // idek how this regex works ong
    console.log(cleaned);
    if (cleaned.includes("/0")) {
      setisError(true);
      return "error";
    } else if ("/+*-".includes(cleaned.slice(0, 1))) {
      setisError(true);
      return "error";
    } else if ("/+*-".includes(cleaned.slice(-1))) {
      setisError(true);
      return "error";
    } else {
      const result = eval(cleaned).toFixed(7);
      return result;
    }
  };

  return (
    <div className="bg-pink-300 flex flex-col justify-center items-center w-64 h-96 rounded-lg shadow-lg p-4">
      <Screen equation={equation} />
      <div className="flex flex-row">
        <div className="gap-2 grid grid-cols-3">
          {numbers.map((number) => (
            <Button key={number} input={number} handler={handleNum} />
          ))}
        </div>
        <div className="gap-2 grid ml-2">
          {operations.map((operation) => (
            <Button
              key={operation}
              input={operation}
              handler={handleOperation}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
