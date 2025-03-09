import React from "react";

const Kumon = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-gray-300" />
          <img
            src="https://www.kumon.ie/storage/uploads/wZP2QfNDj62UJXBjUjGDnAssrMW3ihbx7JUyzFqY.png"
            className="size-12 rounded-full"
          />
          <div className="flex h-40 md:h-32 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">May 2023 - Oct 2023</p>
          <h1 className="font-bold text-lg">Kumon</h1>
          <p className="text-sm text-gray-700">Lead Math Tutor</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm w-5/6 pt-2">
              <li>
                Helped students learn challenging math concepts that included
                Algebra, Geometry, and Calculus.
              </li>
              <li>
                Graded student work, organized files related to student work,
                and completed student readiness checks
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kumon;
