import React from "react";
import Link from "next/link";

const HeaderSection = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <p className="border-r-4 border-r-white pr-5 text-xl text-gray-500 font-bold mt-5">
        Hi, my name is
      </p>
      <h1 className="mt-5 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-gray-700 font-bold">
        Tausif Fardin Sinha
      </h1>
      <p className=" mt-5 border-r-4 border-r-white pr-5 text-5xl text-gray-500 font-bold">
        I build things for the web
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
