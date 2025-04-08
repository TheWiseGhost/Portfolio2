import React from "react";

const StudentCouncil = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-10 w-0.5 bg-gray-300" />
          <img
            src="https://image.maxpreps.io/school-mascot/f/1/1/f11e80d5-6129-4ca3-a64b-494007c79230.gif?version=637672846800000000&width=1024&height=1024"
            className="size-12 rounded-2xl"
          />
          <div className="flex h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-8">
          <p className="text-xs text-gray-700">Aug 2022 - Present</p>
          <h1 className="font-bold text-lg">Student Council</h1>
          <p className="text-sm text-gray-700">Committee Chair</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>Community Relations Committee Chair</li>
              <li>Over $2,500 raised for school + non-profits</li>
              <li>Created first Winter Wishes Bingo</li>
              <li>Helped shape my school</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentCouncil;
