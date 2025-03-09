import React from "react";
import Kumon from "./pro/Kumon";
import NoteSlide from "./pro/NoteSlide";
import Freelancer from "./pro/Freelancer";

const ProSide = () => {
  return (
    <div className="border border-gray-300 rounded-lg px-6 w-full">
      <NoteSlide />
      <Freelancer />
      <Kumon />
    </div>
  );
};

export default ProSide;
