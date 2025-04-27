"use client";

import { motion } from "framer-motion";
import {
    CalendarIcon,
    BriefcaseIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./section-title";
import { useEffect, useState } from "react";

const Experience = () => {
    // Initialize with null to prevent hydration mismatch
    const [isDesktop, setIsDesktop] = useState(null);

    useEffect(() => {
        // Only access window object after component has mounted (client-side only)
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const experiences = [
        {
            id: 1,
            title: "Jr. Backend Developer",
            company: "ZAAG Systems Ltd.",
            location: "Dhaka, Bangladesh",
            period: "Apr 2024 - Present",
            description: [
                "Backend development for enterprise-level microservices architecture using NestJS",
                "Designed and optimized PostgreSQL database schemas improving query performance by 40%",
                "Implemented robust authentication and authorization systems with JWT and OAuth 2.0",
                "Mentored junior developers and conducted code reviews to maintain high quality standards",
            ],
            type: "work",
        },
        {
            id: 2,
            title: "Software Engineer",
            company: "Orbit Digital Solutions Ltd.",
            location: "Dhaka, Bangladesh",
            period: "Oct 2022 - Mar 2024",
            description: [
                "Developed RESTful APIs using Node.js and Express for various client applications",
                "Built and maintained MongoDB database architectures for scalable web applications",
                "Integrated third-party APIs including payment gateways and notification services",
                "Collaborated with frontend teams to ensure seamless API integration",
            ],
            type: "work",
        },
        {
            id: 3,
            title: "Software Engineer Intern",
            company: "Entertech",
            location: "Dhaka, Bangladesh",
            period: "Jun 2022 - Sep 2022",
            description: [
                "Worked on both frontend (React) and backend (Node.js) development",
                "Created and maintained RESTful APIs for web and mobile applications",
                "Implemented MongoDB database solutions for content management systems",
                "Participated in agile development processes including daily stand-ups and sprint planning",
            ],
            type: "work",
        },
        {
            id: 4,
            title: "BSc in Computer Science and Engineering",
            company: "American International University-Bangladesh (AIUB)",
            location: "Dhaka, Bangladesh",
            period: "Sep 2018 - Sep 2022",
            description: [
                "Graduated with honors (3.71 GPA)",
                "Specialized in web development and database systems",
                "Published a research paper on 'Stock Price Prediction using Machine Learning'",
                "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
            ],
            type: "education",
        },
    ];

    return (
        <section
            id="experience"
            className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional journey and academic background."
                    centered
                />

                <div className="mt-12 max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Timeline center line - hidden on mobile, visible on md+ */}
                        <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                        {/* Mobile timeline line - left aligned */}
                        <div className="absolute md:hidden left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                        {/* Timeline items */}
                        <div className="space-y-8 md:space-y-12">
                            {experiences.map((experience, index) => (
                                <motion.div
                                    key={experience.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    className={`flex items-start md:items-center ${
                                        // Use CSS media queries instead of JS check for SSR compatibility
                                        index % 2 === 0
                                            ? "md:flex-row-reverse md:text-right"
                                            : "md:flex-row md:text-left"
                                    } flex-row`}
                                >
                                    {/* Mobile layout - always on the left side */}
                                    <div className="md:hidden z-10 flex-shrink-0 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg">
                                        {experience.type === "work" ? (
                                            <BriefcaseIcon className="h-5 w-5 text-white" />
                                        ) : (
                                            <AcademicCapIcon className="h-5 w-5 text-white" />
                                        )}
                                    </div>

                                    {/* Timeline content */}
                                    <div
                                        className={`pl-4 md:w-5/12 ${
                                            index % 2 === 0
                                                ? "md:pr-8"
                                                : "md:pl-8"
                                        } flex-grow md:flex-grow-0`}
                                    >
                                        <div className="bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-sm">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {experience.title}
                                            </h3>
                                            <h4 className="text-lg font-medium text-primary mt-1">
                                                {experience.company}
                                            </h4>
                                            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex flex-col sm:flex-row sm:items-center sm:gap-1 mb-4">
                                                <span>
                                                    {experience.location}
                                                </span>
                                                <span className="hidden sm:inline mx-1">
                                                    •
                                                </span>
                                                <span className="flex items-center mt-1 sm:mt-0">
                                                    {/* <CalendarIcon className="h-4 w-4 mr-1" /> */}
                                                    {experience.period}
                                                </span>
                                            </div>
                                            <ul
                                                className={`space-y-2 text-left ${
                                                    index % 2 === 0
                                                        ? "md:text-right"
                                                        : "md:text-left"
                                                }`}
                                            >
                                                {experience.description.map(
                                                    (item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="text-gray-600 dark:text-gray-300 text-sm"
                                                        >
                                                            {item}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Desktop Timeline dot - hidden on mobile */}
                                    <div className="hidden md:flex z-10 items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg">
                                        {experience.type === "work" ? (
                                            <BriefcaseIcon className="h-5 w-5 text-white" />
                                        ) : (
                                            <AcademicCapIcon className="h-5 w-5 text-white" />
                                        )}
                                    </div>

                                    {/* Empty space for the opposite side - hidden on mobile */}
                                    <div className="hidden md:block md:w-5/12"></div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Additional Certifications */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="mt-16 bg-white dark:bg-gray-900 p-4 md:p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Professional Certifications
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "MongoDB Node.js Developer Path",
                                    issuer: "MongoDB University",
                                    date: "March 2024",
                                },
                                {
                                    title: "JavaScript (Basic) Certificate",
                                    issuer: "HackerRank",
                                    date: "June 2023",
                                },
                                {
                                    title: "Python Data Structures",
                                    issuer: "Coursera",
                                    date: "June 2020",
                                },
                                {
                                    title: "Programming for Everybody (Getting Started with Python)",
                                    issuer: "Coursera",
                                    date: "May 2020",
                                },
                            ].map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-gray-100 dark:border-gray-700 pb-3 gap-1"
                                >
                                    <div>
                                        <h4 className="font-medium text-gray-900 dark:text-white">
                                            {cert.title}
                                        </h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            {cert.issuer}
                                        </p>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        {cert.date}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
