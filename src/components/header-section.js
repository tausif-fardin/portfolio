import React from "react";

const HeaderSection = () => {
  return (
    <div className="flex min-h-screen flex-col items-start justify-start gap-2">
      <p className=" border-r-4 border-r-white pr-5 text-xl text-gray-500 font-bold">
        Hi, my name is
      </p>
      <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-5xl text-gray-700 font-bold">
        Tausif Fardin Sinha
      </h1>
      <p className="border-r-4 border-r-white pr-5 text-5xl text-gray-500 font-bold">
        I build things for the web
      </p>
      <p className="lg:w-1/2 mt-10 text-gray-500">
        I specialize in crafting exceptional digital experiences as a dedicated
        software engineer. My focus revolves around creating accessible,
        human-centered products at{" "}
        <a
          href="https://orbitdsl.com/"
          className="text-blue-500 hover:text-blue-900"
        >
          Orbit Digital Solutions
        </a>{" "}
        , where I contribute my skills in both building and occasionally
        designing these innovative solutions.
      </p>
    </div>
  );
};

export default HeaderSection;
