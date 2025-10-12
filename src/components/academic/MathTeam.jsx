import React from "react";

const MathTeam = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-white md:bg-gray-300" />
          <img
            src="https://img.icons8.com/color/512/apple-calculator.png"
            className="size-12 rounded-full"
          />
          <div className="flex h-36 w-0.5 bg-white md:bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Oct 2020 - Present</p>
          <h1 className="font-bold text-lg">Math Team</h1>
          <p className="text-sm text-gray-700">Captain + Champion</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>Captain of 6th Best School in the State</li>
              <li>1st Place Geometry Individual Regional</li>
              <li>1st Place 2 Person Team Regional</li>
              <li>2nd Place Algebra2 Individual Regional</li>
              <li>7th Place Algebra 1 Team State</li>
              <li>Top25 Algebra 1 Individual State</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathTeam;
