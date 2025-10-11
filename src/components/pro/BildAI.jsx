import React from "react";

const BildAI = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-9 w-0.5 bg-gray-300" />
          <img
            onClick={() => {
              window.open("https://bild.ai");
            }}
            src="/bildai_icon.png"
            className="size-12 hover:cursor-pointer"
          />
          <div className="flex h-40 md:h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-7">
          <p className="text-xs text-gray-700">Sept 2025 - Present</p>
          <h1
            onClick={() => {
              window.open("https://bild.ai");
            }}
            className="font-bold text-lg hover:cursor-pointer hover:underline"
          >
            Bild AI (YC W25)
          </h1>
          <p className="text-sm text-gray-700">Software Engineering Intern</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm w-5/6 pt-2">
              <li>
                Created significant codebase changes. Merged new updates &
                features to main production app.
              </li>
              <li>
                Worked directly with the founders to create these new founders;
                part of client meetings and made edits to project based off this
                feedback.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BildAI;
