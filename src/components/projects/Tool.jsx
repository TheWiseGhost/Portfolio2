import React from "react";

const Tool = ({ text }) => {
  return (
    <div className="bg-gray-500 text-gray-100 py-1 px-2 text-[11px] rounded-md">
      <p>{text}</p>
    </div>
  );
};

export default Tool;
