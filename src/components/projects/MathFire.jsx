import React from "react";
import Tool from "./Tool";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

const MathFire = () => {
  return (
    <div className="flex font-inter h-[460px] flex-col border border-gray-300 rounded-xl w-full p-4 rouned-xl">
      <img src="/MathFire.png" className="w-full h-1/2 object-cover mb-4" />
      <h1 className="font-bold pb-1 text-lg">MathFire</h1>
      <p className="text-gray-800 text-[12px] pb-6">
        Trainer I made for my school's math team that helps students learn
        formulas and concepts through practice problems. Also can host
        competitions and track user scores across competitions.
      </p>
      <div className="flex flex-wrap space-x-1 text-xs pb-2">
        <Tool text={"HTML"} />
        <Tool text={"Node JS"} />
        <Tool text={"MongoDB"} />
      </div>
      <div className="flex flex-wrap space-x-3 text-sm pt-3">
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/MathFireBackend");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Backend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/MathFire");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Frontend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://mathfire.netlify.app");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconWorld className="size-3" />
          <p className="text-xs pl-2">Website</p>
        </div>
      </div>
    </div>
  );
};

export default MathFire;
