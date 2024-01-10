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
    <div className="max-w-lg mx-auto mb-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        {!imageError ? (
          <Image
            className="w-full"
            src={thumbnail}
            alt="Project Thumbnail"
            height={200}
            width={400}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-[200px] bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600">No Image Available</span>
          </div>
        )}
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6">
          {i_did.length > 0 &&
            i_did.map((item, index) => <li key={index}>{item}</li>)}
        </div>
        <div className="flex flex-wrap px-6 gap-2 mt-2">
          {techstack.length > 0 &&
            techstack.map((item, index) => (
              <span key={index} className="py-1 px-2 bg-orange-200 rounded-md">
                #{item}
              </span>
            ))}
        </div>
        <div className="px-6 py-4">
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            GitHub Link
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
