import React from "react";

const Skill = ({ name }) => {
  return (
    <span className="p-2 text-sm font-mono border-cyan-300 shadow-md border-r-1 rounded-md bg-gradient-to-r from-[#E0E7E9] to-[#A3C6C4]">
      {name}
    </span>
  );
};

const Skills = () => {
  const ProgrammingLanguages = [
    "Javascript",
    "Typescript",
    "Python",
    "C#",
    "C++",
  ];
  const Frameworks = ["Next.js", "React.js", "Node.js", "TailwindCSS"];
  const Database = ["MySQL", "Microsoft SQL Server", "MongoDb"];
  const Language = ["Bengali (Native)", "English", "Hindi"];

  return (
    <div className="flex flex-col justify-center items-start gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-lg text-gray-800">Programming Languages:</div>
        <div className="flex flex-wrap space-x-3 items-center">
          {ProgrammingLanguages.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-lg text-gray-800">Frameworks:</div>
        <div className="flex flex-wrap space-x-3 items-center">
          {Frameworks.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <div className="text-lg text-gray-800">Database Techs:</div>
        <div className="flex flex-wrap space-x-3 items-center">
          {Database.map((skill, index) => (
            <Skill key={index} name={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
