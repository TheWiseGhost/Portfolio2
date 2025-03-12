import React from "react";
import Limeblock from "./projects/Limeblock";

const CurrentlyWorkingOn = () => {
  return (
    <div className="flex flex-col font-inter w-full pt-24">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-lg md:text-3xl font-semibold">
          What I'm currently working on
        </h1>
      </div>
      <div className="pt-6 flex flex-col md:grid md:grid-cols-2 gap-6">
        <Limeblock />
      </div>
    </div>
  );
};

export default CurrentlyWorkingOn;
