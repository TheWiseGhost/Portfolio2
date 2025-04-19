import React from "react";

const Limeblock = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-9 w-0.5 bg-gray-300" />
          <img
            onClick={() => {
              window.open("https://limeblock.io");
            }}
            src="/LimeblockLogo.png"
            className="size-12 hover:cursor-pointer"
          />
          <div className="flex h-40 md:h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-7">
          <p className="text-xs text-gray-700">Mar 2025 - Present</p>
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
                Coded, deployed, and managed the project all by myself. Scaling
                with my brother through early adopters.
              </li>
              <li>
                Used LangChain to create AI backend + npm package for chat
                widget (@limeblock/react and @limeblock/vue)
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Limeblock;
