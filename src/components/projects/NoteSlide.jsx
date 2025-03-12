import React from "react";
import Tool from "./Tool";
import { IconBrandGithub, IconWorld } from "@tabler/icons-react";

const NoteSlide = () => {
  return (
    <div className="flex font-inter h-[460px] flex-col border border-gray-300 rounded-xl w-full p-4 rouned-xl">
      <img src="/NoteSlide.png" className="w-full h-1/2 object-cover mb-4" />
      <h1 className="font-bold pb-1 text-lg">NoteSlide</h1>
      <p className="text-gray-800 text-[12px] pb-6">
        Note-sharing platform designed for students to allow anonymous sharing,
        viewing, and uploading of notes all for free. We split profit with
        creators on earned money from ads. Current team of 10 interns.
      </p>
      <div className="flex flex-wrap space-y-1 space-x-1 text-xs pb-2">
        <Tool text={"React"} />
        <Tool text={"Django"} />
        <Tool text={"MongoDB"} />
        <Tool text={"AWS S3"} />
        <Tool text={"Vercel"} />
        <Tool text={"Stripe"} />
        <Tool text={"Prerender"} />
      </div>
      <div className="flex flex-wrap space-x-3 text-sm pt-3">
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/NoteSlideBackend");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Backend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://github.com/TheWiseGhost/NoteSlide");
          }}
          className="flex flex-row items-center bg-gray-900 text-white px-2 py-1.5 rounded-md hover:cursor-pointer"
        >
          <IconBrandGithub className="size-3" />
          <p className="text-xs pl-2">Frontend</p>
        </div>
        <div
          onClick={() => {
            window.open("https://note-slide.com");
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

export default NoteSlide;
