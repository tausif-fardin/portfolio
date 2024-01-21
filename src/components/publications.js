import React from "react";
import Link from "next/link";
const Publications = () => {
  return (
    <div>
      <div className="font-bold text-xl">
        Stock Market Comparison and Analysis in Preceding and Following Pandemic
        in Bangladesh using Machine Learning Approaches
      </div>
      <Link
        href={"https://dl.acm.org/doi/10.1145/3542954.3542993"}
        className="text-blue-500 rounded-e-md p-2 bg-slate-200"
      >
        Paper Link
      </Link>
    </div>
  );
};

export default Publications;
