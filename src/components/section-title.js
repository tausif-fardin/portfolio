import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="py-2 my-4 bg-[#A3C6C4] rounded-lg text-3xl font-mono font-semibold text-[#354649]">
      - {title}
    </div>
  );
};

export default SectionTitle;
