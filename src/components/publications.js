import React from "react";
import Link from "next/link";
const Publications = () => {
  return (
    <div>
      <div className="font-bold text-xl">
        Title : Stock Market Comparison and Analysis in Preceding and Following
        Pandemic in Bangladesh using Machine Learning Approaches
      </div>
      <Link href={"https://dl.acm.org/doi/10.1145/3542954.3542993"}>
        Paper Link
      </Link>
    </div>
  );
};

export default Publications;
