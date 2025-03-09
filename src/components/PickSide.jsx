"use client";

import React from "react";

const PickSide = ({ side, setSide }) => {
  return (
    <div className="flex flex-row text-sm bg-gray-200 w-full mx-auto font-inter p-1 justify-center rounded-lg mt-16 mb-6">
      <button
        className={`w-1/2 py-1 rounded-md ${
          side === "pro"
            ? "bg-white text-black"
            : "text-gray-700  hover:cursor-pointer"
        }`}
        onClick={() => setSide("pro")}
      >
        Professional
      </button>
      <button
        className={`w-1/2 py-1 rounded-md ${
          side === "academic"
            ? "bg-white text-black"
            : "text-gray-700 hover:cursor-pointer"
        }`}
        onClick={() => setSide("academic")}
      >
        Academic
      </button>
    </div>
  );
};

export default PickSide;
