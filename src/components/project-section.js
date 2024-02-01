"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { CheckCheck, CheckCircle } from "lucide-react";

const ProjectSection = ({
  githubLink,
  description,
  thumbnail,
  i_did,
  techstack,
}) => {
  const [imageError, setImageError] = useState(false);

  const fallbackImageSrc = "/No_image.jpg"; // Replace with the path to your fallback image

  return (
    <div className="max-w-lg mx-auto h-full">
      <div className="rounded-lg shadow-lg h-full flex flex-col justify-between">
        <div className="flex justify-center items-center border-b-2">
          {!imageError ? (
            <Image
              src={thumbnail}
              alt="Project Thumbnail"
              width={400}
              height={200}
              onError={() => setImageError(true)}
            />
          ) : (
            <Image
              src={fallbackImageSrc}
              alt="Fallback Image"
              width={155}
              height={150}
            />
          )}
        </div>
        <div className="px-6 py-4">
          <p className="text-gray-700 text-2xl">{description}</p>
        </div>
        <div className="px-6 mb-auto">
          {i_did.length > 0 &&
            i_did.map((item, index) => (
              <span
                key={index}
                className="flex flex-row justify-start items-center gap-1"
              >
                <CheckCircle
                  size={14}
                  className="flex self-start mt-2 mr-2"
                  style={{ flexShrink: 0, width: 14, height: 14 }}
                />
                <span>{item}</span>
              </span>
            ))}
        </div>
        <div className="flex flex-wrap px-6 gap-2 my-2 mb-auto">
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
