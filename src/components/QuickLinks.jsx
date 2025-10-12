import React from "react";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileDownload,
  IconMail,
} from "@tabler/icons-react";

const QuickLinks = () => {
  return (
    <div className="flex flex-row space-x-8 font-inter items-center justify-start mt-6 md:-mt-4">
      <div
        onClick={() => {
          window.open(
            "https://docs.google.com/document/d/1wzWnRyRV6_jeJ4tnLJmUT8UGw5ZWiKtfKQirT4DY650/edit?tab=t.0"
          );
        }}
        className="w-fit bg-white hover:bg-gray-200 border border-gray-200 flex flex-row items-center justify-center py-1.5 px-4 rounded-md transition duration-400 hover:hover:cursor-pointer"
      >
        <p className="text-sm font-semibold pr-1.5 text-black">Resume</p>
        <IconFileDownload className="size-6" />
      </div>
      <div className="flex flex-row space-x-8">
        <IconBrandLinkedin
          onClick={() => {
            window.open("https://www.linkedin.com/in/aditya-byju/");
          }}
          className="size-6 text-gray-600 hover:text-black hover:cursor-pointer"
        />
        <IconBrandGithub
          onClick={() => {
            window.open("https://github.com/TheWiseGhost");
          }}
          className="size-6 text-gray-600 hover:text-black hover:cursor-pointer"
        />
        <IconMail
          onClick={() => {
            window.alert("Email me at byjuaditya@gmail.com");
          }}
          className="size-6 text-gray-600 hover:text-black hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default QuickLinks;
