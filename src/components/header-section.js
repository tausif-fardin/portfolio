"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const HeaderSection = () => {
    const [typedText, setTypedText] = useState("");
    const fullText = "Backend Developer";
    const typingSpeed = 150;

    useEffect(() => {
        if (typedText.length < fullText.length) {
            const timeout = setTimeout(() => {
                setTypedText(fullText.slice(0, typedText.length + 1));
            }, typingSpeed);

            return () => clearTimeout(timeout);
        }
    }, [typedText]);

    return (
        <section className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden min-h-[92vh] flex items-center">
            {/* Background decoration */}
            <div className="absolute inset-0 z-0 opacity-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100%"
                    height="100%"
                >
                    <defs>
                        <pattern
                            id="grid"
                            width="40"
                            height="40"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                d="M 40 0 L 0 0 0 40"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="0.5"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
                    {/* Left Content - Text */}
                    <motion.div
                        className="w-full md:w-3/5 space-y-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white">
                            <span>Hello, I'm </span>
                            <span className="gradient-text">Tausif Fardin</span>
                        </h1>

                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-700 dark:text-gray-200 flex items-center">
                            <span>{typedText}</span>
                            <span className="ml-1 h-8 w-1 bg-primary animate-pulse"></span>
                        </h2>

                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                            I craft robust backend solutions with Node.js,
                            NestJS, and modern databases. Building scalable APIs
                            and efficient microservices is my passion.
                        </p>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary/90 transition-colors duration-300"
                            >
                                Get In Touch
                            </Link>

                            <Link
                                href="/resume/Tausif_Resume.pdf"
                                target="_blank"
                                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                            >
                                Download CV
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Content - Image */}
                    <motion.div
                        className="w-full md:w-2/5 mt-8 md:mt-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <div className="relative h-72 sm:h-80 md:h-96 glass rounded-2xl overflow-hidden">
                            <Image
                                src="/dp.jpg"
                                alt="Tausif Fardin - Portrait"
                                fill
                                className="object-cover rounded-2xl"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 5L12 19M12 19L5 12M12 19L19 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </section>
    );
};

export default HeaderSection;
