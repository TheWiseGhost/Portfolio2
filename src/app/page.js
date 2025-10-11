"use client";

import AcademicSide from "@/components/AcademicSide";
import CurrentlyWorkingOn from "@/components/CurrentlyWorkingOn";
import Hero from "@/components/Hero";
import PickSide from "@/components/PickSide";
import Projects from "@/components/Projects";
import ProSide from "@/components/ProSide";
import QuickLinks from "@/components/QuickLinks";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [side, setSide] = useState("pro");
  return (
    <div className="bg-white text-black">
      <div className="w-full lg:w-[780px] mx-auto pt-16 pb-20 px-5 md:px-0">
        <Hero />
        <QuickLinks />
        <PickSide side={side} setSide={setSide} />
        {side == "pro" ? <ProSide /> : <AcademicSide />}
        <Projects />
        {/* <CurrentlyWorkingOn /> */}
      </div>
    </div>
  );
}
