import React from "react";

const Speech = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-gray-300" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2OE5lP6ej4-2fPJE2Co8bqAVhmCAO8V-lRg&s"
            className="size-12 rounded-full"
          />
          <div className="flex h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">Aug 2022 - Present</p>
          <h1 className="font-bold text-lg">Speech</h1>
          <p className="text-sm text-gray-700">
            Extemporanous (Political) Speaking
          </p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm pt-2">
              <li>1st Place Regional Invitational</li>
              <li>1st Place State Invitional</li>
              <li>National Qualifier (Top 3 in State)</li>
              <li
                className="underline hover:cursor-pointer"
                onClick={() => {
                  window.open(
                    "https://postings.speechwire.com/r-comp.php?compid=622920&seasonid=17"
                  );
                }}
              >
                See all awards
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speech;
