import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectSection = ({ githubLink, description, thumbnail }) => {
  return (
    <div className="max-w-lg mx-auto mb-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Image
          className="w-full"
          src={thumbnail}
          alt="Project Thumbnail"
          height={200}
          width={400}
        />
        <div className="px-6 py-4">
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6">
          <li>Developed API&apos;s using Next.js backend.</li>
          <li>Implemented authentications using next-auth.</li>
          <li>Contributed in fixing frontend design issues</li>
          <li>Wrote complex queries for booking system in mysql.</li>
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
