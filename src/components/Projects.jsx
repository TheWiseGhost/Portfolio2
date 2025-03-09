import React from "react";
import NoteSlide from "./projects/NoteSlide";
import Competiboard from "./projects/Comeptiboard";

const Projects = () => {
  return (
    <div className="flex flex-col font-inter w-full pt-20">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-3xl font-semibold">Featured Projects</h1>
        <button className="text-gray-800 hover:cursor-pointer hover:text-black">
          View More
        </button>
      </div>
      <div className="pt-6 grid grid-cols-2 gap-6">
        <NoteSlide />
        <Competiboard />
      </div>
    </div>
  );
};

export default Projects;
