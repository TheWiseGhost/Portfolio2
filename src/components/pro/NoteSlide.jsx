import React from "react";

const NoteSlide = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-9 w-0.5 bg-gray-300" />
          <img
            onClick={() => {
              window.open("https://note-slide.com");
            }}
            src="/NoteSlideLogo.png"
            className="size-12 hover:cursor-pointer"
          />
          <div className="flex h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-7">
          <p className="text-xs text-gray-700">June 2024 - Present</p>
          <h1
            onClick={() => {
              window.open("https://note-slide.com");
            }}
            className="font-bold text-lg hover:cursor-pointer hover:underline"
          >
            NoteSlide
          </h1>
          <p className="text-sm text-gray-700">Founder + CEO</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm w-5/6 pt-2">
              <li>
                Coding, deployed, and managed the project all by myself.
                Currently have 10 interns managing sales + marketing for me
              </li>
              <li>
                Used SEO, marketing, user feedback, sponsorships to grow the
                platform to reach hundreds of students
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteSlide;
