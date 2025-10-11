import React from "react";
import BildAI from "./pro/BildAI";
import Kumon from "./pro/Kumon";
import NoteSlide from "./pro/NoteSlide";
import Freelancer from "./pro/Freelancer";
import Limeblock from "./pro/Limeblock";

const ProSide = () => {
  return (
    <div className="border border-gray-300 rounded-lg px-6 w-full">
      <BildAI />
      <Limeblock />
      <NoteSlide />
      <Freelancer />
      <Kumon />
    </div>
  );
};

export default ProSide;
