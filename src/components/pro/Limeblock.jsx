import React from "react";

const Limeblock = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-white md:bg-gray-300" />
          <img
            onClick={() => {
              window.open("https://limeblock.io");
            }}
            src="/LimeblockLogo.png"
            className="size-12 hover:cursor-pointer"
          />
          <div className="flex h-40 md:h-28 w-0.5 bg-white md:bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Mar 2025 - Sept 2025</p>
          <h1
            onClick={() => {
              window.open("https://limeblock.io");
            }}
            className="font-bold text-lg hover:cursor-pointer hover:underline"
          >
            Limeblock
          </h1>
          <p className="text-sm text-gray-700">Founder + CEO</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm w-5/6 pt-2">
              <li>
                Coded, deployed, and managed the project all by myself. Became
                profitable in less than 1 month and scaled through early
                adopters.
              </li>
              <li>
                Accepted into Founder's Inc. and spent 6 weeks in summer 2025 to
                meet and learn from CEOs (Ex. Discord) and influencers (Ex. Jake
                Paul).
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limeblock;
