import React from "react";
import Tool from "./Tool";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

const Limeblock = () => {
  return (
    <div className="flex font-inter h-[460px] flex-col border border-gray-300 rounded-xl w-full p-4 rouned-xl">
      <img src="/Limeblock.png" className="w-full h-1/2 object-cover" />
      <h1 className="font-bold pb-1 text-lg">Limeblock</h1>
      <p className="text-gray-800 text-[12px] pb-6">
        AI chat widget that embeds into any app or website and performs in app
        actions or navigation for users. Helps make good products have a good UX
        so even the newest of users can use the product easily.
      </p>
      <div className="flex flex-wrap space-y-1 space-x-1 w-full pr-2 text-xs pb-2">
        <Tool text={"NextJS"} />
        <Tool text={"Django"} />
        <Tool text={"Vercel"} />
        <Tool text={"Stripe"} />
        <Tool text={"Langchain"} />
        <Tool text={"DeepSeek"} />
      </div>
      <div className="flex flex-wrap space-x-3 text-sm pt-3">
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/LimeblockBackend");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Backend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/Limeblock");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Frontend</p>
        </div>
      </div>
    </div>
  );
};

export default Limeblock;
