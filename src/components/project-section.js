"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({
  githubLink,
  description,
  thumbnail,
  i_did,
  techstack,
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="max-w-lg mx-auto h-full">
      <div className="rounded-lg overflow-hidden shadow-lg h-full flex flex-col justify-around">
        {!imageError ? (
          <Image
            className="w-full"
            src={thumbnail}
            alt="Project Thumbnail"
            width={400}
            height={200}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">No Image Available</span>
          </div>
        )}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-2xl">{description}</p>
        </div>
        <div className="px-6">
          {i_did.length > 0 &&
            i_did.map((item, index) => <li key={index}>{item}</li>)}
        </div>
        <div className="flex flex-wrap px-6 gap-2 my-2">
          {techstack.length > 0 &&
            techstack.map((item, index) => (
              <span
                key={index}
                className="py-1 px-2 bg-orange-200 rounded-md text-xs"
              >
                {item}
              </span>
            ))}
        </div>
        <div className="px-6 py-4 flex items-center">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center animate-bounce"
          >
            Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
