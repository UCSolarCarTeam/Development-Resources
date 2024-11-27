import React, { useState } from "react";

export default function Screen(props) {
  const { equation } = props;
  let toPrint = "";
  if (equation.length >= 13) {
    toPrint = "error";
  } else {
    toPrint = equation;
  }
  return (
    <div className="mt-2 bg-white text-black w-full h-20 flex items-center justify-end rounded-md shadow-md mb-8 font-start">
      {toPrint}
    </div>
  );
}
