import React from "react";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="border-r-4 border-r-white pr-5 text-xl text-gray-500 font-bold mt-5">
        Hi, I&apos;m
      </p>
      <h1 className="mt-4 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 lg:text-5xl md:text-5xl text-2xl text-gray-700 font-bold">
        Tausif Fardin
      </h1>
      <p className=" mt-1 border-r-4 border-r-white pr-5 lg:text-5xl md:text-5xl text-2xl text-gray-500 font-bold">
        I build things for the people
      </p>
      <p className="lg:w-1/2 text-gray-500 mt-10">
        I specialize in crafting exceptional digital experiences as a dedicated
        software engineer. My focus revolves around creating accessible,
        human-centered products at{" "}
        <Link
          href="https://orbitdsl.com/"
          className="text-blue-500 hover:text-blue-900"
        >
          Orbit Digital Solutions
        </Link>{" "}
        , where I contribute my skills in both building and occasionally
        designing these innovative solutions.
      </p>
    </div>
  );
};

export default HeaderSection;
