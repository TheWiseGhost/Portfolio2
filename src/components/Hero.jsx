import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-row w-full font-inter">
      <div className="flex flex-col space-y-4 w-3/4 pt-3">
        <h1 className="text-6xl font-bold">Hi, I'm Aditya 👋</h1>
        <h4 className="text-xl text-gray-900">
          Software Developer in Chicago. Python (Django) and JS (NextJS) user. I
          love to build useful stuff.
        </h4>
      </div>
      <div className="flex w-1/4 justify-end items-center">
        <img
          src="/PixeledMe.png"
          className="w-full h-3/4 object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default Hero;
