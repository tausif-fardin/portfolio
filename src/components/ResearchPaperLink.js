"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Optional for animation

const ResearchPaperLink = ({ title, description, paperUrl }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(paperUrl); // Use `router.push` for navigation
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // Optional animation
      className="flex flex-col items-center justify-center py-4 px-6 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 active:bg-gray-200"
      onClick={handleClick}
    >
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-base text-gray-600 mt-2">{description}</p>
      {/* Optional: Add an icon or image for visual appeal */}
      <div className="mt-4 flex items-center">
        <span className="text-gray-600 mr-2">Read More</span>
        <svg
          className="w-4 h-4 fill-current text-gray-600"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10.293 3.293a1 1 0 00-1.414 0l-6 6a1 1 0 000 1.414l6 6a1 1 0 001.414-1.414L4.893 11.707l5.4-5.4z" />
        </svg>
      </div>
    </motion.div>
  );
};

export default ResearchPaperLink;
