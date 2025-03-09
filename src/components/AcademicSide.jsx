import React from "react";
import MathTeam from "./academic/MathTeam";
import Speech from "./academic/Speech";
import SkillsUSA from "./academic/SkillsUSA";
import Stats from "./academic/Stats";
import StudentCouncil from "./academic/StudentCouncil";
import MathHonorsSociety from "./academic/MathHonorsSociety";

const AcademicSide = () => {
  return (
    <div className="border border-gray-300 rounded-lg px-6 w-full">
      <Stats />
      <MathTeam />
      <Speech />
      <SkillsUSA />
      <StudentCouncil />
      <MathHonorsSociety />
    </div>
  );
};

export default AcademicSide;
