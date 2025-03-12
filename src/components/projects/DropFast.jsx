import React from "react";
import Tool from "./Tool";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

const DropFast = () => {
  return (
    <div className="flex font-inter h-[460px] flex-col border border-gray-300 rounded-xl w-full p-4 rouned-xl">
      <img src="/DropFast.png" className="w-full h-1/2 object-cover mb-4" />
      <h1 className="font-bold pb-1 text-lg">DropFast</h1>
      <p className="text-gray-800 text-[12px] pb-6">
        Store creation tool for dropshippers to easily build their own simple
        storefront to test products. Made for quick and easy testing just to
        validate ideas rather than function as long term.
      </p>
      <div className="flex flex-wrap space-y-1 space-x-1 text-xs pb-2">
        <Tool text={"NextJS"} />
        <Tool text={"Django"} />
        <Tool text={"MongoDB"} />
        <Tool text={"AWS S3"} />
        <Tool text={"Vercel"} />
        <Tool text={"Stripe"} />
      </div>
      <div className="flex flex-wrap space-x-3 text-sm pt-3">
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/DropFastBackend");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Backend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/DropFast");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Frontend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://trydropfast.com");
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

export default DropFast;
