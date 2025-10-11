import React from "react";
import Limeblock from "./projects/Limeblock";
import NoteSlide from "./projects/NoteSlide";
import Competiboard from "./projects/Comeptiboard";

const Projects = () => {
  return (
    <div className="flex flex-col font-inter w-full pt-20">
      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl md:text-3xl font-semibold">Featured Projects</h1>
        <button
          onClick={() => {
            window.location.href = "/projects";
          }}
          className="text-sm md:text-base text-gray-800 hover:cursor-pointer hover:text-black"
        >
          View More
        </button>
      </div>
      <div className="pt-6 flex flex-col md:grid md:grid-cols-2 gap-6">
        <Limeblock />
        <NoteSlide />
      </div>
    </div>
  );
};

export default Projects;
