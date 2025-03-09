import React from "react";

const Freelancer = () => {
  return (
    <div className="flex flex-col font-inter">
      <div className="flex flex-row pr-2">
        <div className="pr-4 max-h-full min-w-fit place-items-center justify-center">
          <div className="flex h-8 w-0.5 bg-gray-300" />
          <img
            src="https://static.vecteezy.com/system/resources/previews/025/732/716/non_2x/fiverr-logo-icon-online-platform-for-freelancers-free-vector.jpg"
            className="size-12 rounded-full"
          />
          <div className="flex h-36 md:h-28 w-0.5 bg-gray-300" />
        </div>
        <div className="flex flex-col pt-6">
          <p className="text-xs text-gray-700">June 2024 - Dec 2024</p>
          <h1 className="font-bold text-lg">Freelancer</h1>
          <p className="text-sm text-gray-700">Frontend Developer</p>
          <div className="flex flex-col ml-4">
            <ul className="list-disc text-sm w-5/6 pt-2">
              <li>
                Created landing pages and portfolio site for clients in a medium
                price range ($50 - $250)
              </li>
              <li>
                Joined existing teams to improve UI and help improve sign up
                conversion from landing page
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
