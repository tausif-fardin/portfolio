import React from "react";

const Skill = ({ name }) => {
  return (
    <span className="p-2 font-mono border-cyan-300 shadow-md border-r-1 rounded-md bg-gradient-to-r from-[#E0E7E9] to-[#A3C6C4]">
      {name}
    </span>
  );
};

const Skills = () => {
  const skills = [
    "Javascript",
    "Typescript",
    "Next.js",
    "React.js",
    "Node.js",
    "C#",
    "TailwindCSS",
    "MySQL",
    "MongoDb",
  ];

  return (
    <div>
      <div className="flex flex-wrap space-x-3 space-y-3 items-center justify-center">
        {skills.map((skill, index) => (
          <Skill key={index} name={skill} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
