"use client";

import React from "react";
import { Briefcase } from "lucide-react";

const Experience = ({ jobs }) => {
  return (
    <main className="bg-gray-100 py-10 rounded-md">
      <div className="container mx-auto">
        <div className="relative pl-4">
          {jobs.map((job, index) => (
            <div key={index} className="mb-8 relative">
              <div className="flex items-start mb-4">
                <div className="border-2 border-[#354649] rounded-full h-8 w-8 flex items-center justify-center">
                  <span className="text-white">
                    <Briefcase color="#354649" size={18} />
                  </span>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {job.title}
                  </h3>
                  <p className="text-gray-600">{job.location}</p>
                  <p className="text-sm text-gray-600">{job.duration}</p>
                </div>
              </div>

              <ul className="pl-12">
                {job.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="mb-2">
                    - {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Experience;
