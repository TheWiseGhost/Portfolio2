import React from "react";

const MathHonorsSociety = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-gray-300" />
          <img
            src="https://1000logos.net/wp-content/uploads/2024/02/National-Honor-Society-Logo.jpg"
            className="size-12 rounded-2xl object-cover"
          />
          <div className="flex h-40 md:h-32 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Sept 2023 - Present</p>
          <h1 className="font-bold text-lg">Math Honors Society</h1>
          <p className="text-sm text-gray-700">Exec + Tutor</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>Inducted Member of Mu Alpha Theta</li>
              <li>20+ hours of Volunteer Tutoring</li>
              <li>
                Managed internals of the club including induction for members
              </li>
              <li>Helped spread my love for math</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathHonorsSociety;
