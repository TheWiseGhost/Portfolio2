import React from "react";
import { motion } from "framer-motion";

const AnimatedHeading = () => {
  const text = "Hi, I'm Aditya";
  const emoji = "👋";

  return (
    <motion.h1
      className="text-6xl font-bold flex"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.05, // Delay each letter slightly
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          variants={{
            hidden: { opacity: 0, y: 0 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.3 }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
      <motion.span
        initial={{ opacity: 0, y: 0, rotate: 0 }}
        animate={{
          opacity: 1,
          y: 0,
          rotate: [0, -20, 20, -20, 20, -20, 20, 0], // Moves back and forth
        }}
        transition={{
          duration: 2, // Total duration
          delay: text.length * 0.05, // Delays the emoji animation
          ease: "easeInOut",
        }}
      >
        {emoji}
      </motion.span>
    </motion.h1>
  );
};

const Hero = () => {
  return (
    <div className="flex flex-row w-full font-inter">
      <div className="flex flex-col space-y-4 w-3/4 pt-3">
        <AnimatedHeading />
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
