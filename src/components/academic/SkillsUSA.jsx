import React from "react";

const SkillsUSA = () => {
  return (
    <div className="flex flex-col font-inter -ml-2">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-white md:bg-gray-300" />
          <img
            src="https://www.skillsusa.org/wp-content/uploads/2023/07/SkillsUSA-Brand-Portal-Graphic.png"
            className="w-16"
          />
          <div className="flex h-32 w-0.5 bg-white md:bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Sept 2023 - Present</p>
          <h1 className="font-bold text-lg">SkillsUSA</h1>
          <p className="text-sm text-gray-700">President + Champion</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>President of the club</li>
              <li>1st Place Web Design State</li>
              <li>3rd Place Cybersecurity State</li>
              <li>3rd Place Extemporaneous Speaking State</li>
              <li>National Qualifier (State Champion)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsUSA;
