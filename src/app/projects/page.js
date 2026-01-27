"use client";

import NoteSlide from "@/components/projects/NoteSlide";
import Limeblock from "@/components/projects/Limeblock";
import Competiboard from "@/components/projects/Comeptiboard";
import DropFast from "@/components/projects/DropFast";
import MathFire from "@/components/projects/MathFire";
import TRIM from "@/components/projects/TRIM";
import React from "react";

const page = () => {
  return (
    <div className="bg-white text-black">
      <div className="w-full lg:w-[980px] mx-auto pt-16 pb-20 px-5 md:px-0">
        <div className="flex flex-col font-inter w-full">
          <div className="flex flex-row justify-between items-center">
            <h1 className="text-xl md:text-3xl font-semibold">All Projects</h1>
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="text-sm md:text-base text-gray-800 hover:cursor-pointer hover:text-black"
            >
              Return home
            </button>
          </div>
          <div className="pt-6 flex flex-col md:grid md:grid-cols-2 gap-6">
            <TRIM />
            <Limeblock />
            <NoteSlide />
            <Competiboard />
            <MathFire />
            <DropFast />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
