import React from "react";

const Stanford = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-white md:bg-gray-300" />
          <img
            src="https://i.pinimg.com/736x/16/ab/a7/16aba75437972bfb0fbcefe1bcd2f3c9.jpg"
            className="size-12 object-contain"
          />
          <div className="flex h-40 md:h-28 w-0.5 bg-white md:bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Advanced Courses</p>
          <h1 className="font-bold text-lg">Stanford</h1>
          <p className="text-sm text-gray-700">Completed Remotely</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>CS229 Maching Learning</li>
              <li>CS230 Deep Learning</li>
              <li>CS25 Transformers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stanford;
