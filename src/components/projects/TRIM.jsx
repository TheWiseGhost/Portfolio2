import React from "react";
import Tool from "./Tool";
import { IconBrandYoutube, IconWorld, IconFileText } from "@tabler/icons-react";

const TRIM = () => {
  return (
    <div className="flex font-inter h-[460px] flex-col border border-gray-300 rounded-xl w-full p-4 rouned-xl">
      <img src="/TRIM.png" className="w-full h-1/2 object-cover mb-4" />
      <h1 className="font-bold pb-1 text-lg">T.R.I.M.</h1>
      <p className="text-gray-800 text-[12px] pb-6">
        Made for the Presidential AI Challenge 2026. It's an AI-powered auditing
        platform designed to promote citizen oversight on lengthy budget documents with hidden unnecessary
        costs and wastes
      </p>
      <div className="flex flex-wrap space-y-1 space-x-1 text-xs pb-2">
        <Tool text={"NextJS"} />
        <Tool text={"Framer Motion"} />
        <Tool text={"CockroachDB"} />
        <Tool text={"Tailwind"} />
        <Tool text={"Gemini API"} />
      </div>
      <div className="flex flex-wrap space-x-3 text-sm pt-3">
        <div
          onClick={() => {
            window.open("https://youtu.be/31f9BzG0-c");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandYoutube className="size-3" />
          <p className="text-xs pl-2">Demo</p>
        </div>
        <div
          onClick={() => {
            window.open("https://trytrim.org/");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconWorld className="size-3" />
          <p className="text-xs pl-2">Website</p>
        </div>
        <div
          onClick={() => {
            window.open(
              "https://noteslide-pdf.s3.us-east-2.amazonaws.com/uploads/TRIM+UPDATED.pdf"
            );
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconFileText className="size-3" />
          <p className="text-xs pl-2">Research Paper</p>
        </div>
      </div>
    </div>
  );
};

export default TRIM;

