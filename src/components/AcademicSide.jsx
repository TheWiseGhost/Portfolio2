import React from "react";
import MathTeam from "./academic/MathTeam";
import Speech from "./academic/Speech";
import SkillsUSA from "./academic/SkillsUSA";
import Stats from "./academic/Stats";
import StudentCouncil from "./academic/StudentCouncil";
import MathHonorsSociety from "./academic/MathHonorsSociety";
import Stanford from "./academic/Stanford";

const AcademicSide = () => {
  return (
    <div className="border border-gray-300 rounded-lg px-6 w-full">
      <Stats />
      <MathTeam />
      <Speech />
      <SkillsUSA />
      <StudentCouncil />
      <MathHonorsSociety />
      <Stanford />
    </div>
  );
};

export default AcademicSide;
