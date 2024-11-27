import React, { useState } from "react";

export default function Button({ input, handler }) {
  return (
    <button
      onClick={() => handler(input)}
      className="text-sm bg-white w-12 h-12 text-pink-500 border-pink-500 rounded-full flex items-center justify-center shadow-md gap-2 font-start"
    >
      {input}
    </button>
  );
}
