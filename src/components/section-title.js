import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-0 my-4 max-w-fit border-solid border-b-2 border-[#20514e]  text-2xl font-mono font-semibold text-[#354649] flex items-center justify-start ">
      <div className="flex self-center">{title}</div>
    </div>
  );
};

export default SectionTitle;
