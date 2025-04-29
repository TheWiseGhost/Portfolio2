import React from "react";

const Stats = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-9 w-0.5 bg-gray-300" />
          <img
            src="https://i.pinimg.com/564x/bc/2e/52/bc2e526f9cf9815f5d1d3a712f4e91ad.jpg"
            className="size-12 rounded-full"
          />
          <div className="flex h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-7">
          <p className="text-xs text-gray-700">High School Career</p>
          <h1 className="font-bold text-lg">My Stats</h1>
          <p className="text-sm text-gray-700">Updated April 2025</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>4.67 GPA</li>
              <li>36 ACT</li>
              <li>1550 SAT</li>
              <li>Executive or higher in 5 clubs</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
