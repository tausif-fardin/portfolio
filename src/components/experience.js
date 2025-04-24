"use client";

import { motion } from "framer-motion";
import {
    CalendarIcon,
    BriefcaseIcon,
    AcademicCapIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./section-title";

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Senior Backend Developer",
            company: "TechNova Solutions",
            location: "Remote",
            period: "June 2023 - Present",
            description: [
                "Lead backend development for enterprise-level microservices architecture using NestJS",
                "Designed and optimized PostgreSQL database schemas improving query performance by 40%",
                "Implemented robust authentication and authorization systems with JWT and OAuth 2.0",
                "Mentored junior developers and conducted code reviews to maintain high quality standards",
            ],
            type: "work",
        },
        {
            id: 2,
            title: "Backend Developer",
            company: "WebSphere Inc.",
            location: "New York, NY",
            period: "August 2021 - May 2023",
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
            title: "Junior Full Stack Developer",
            company: "Digital Creations",
            location: "Boston, MA",
            period: "January 2020 - July 2021",
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
            title: "Bachelor of Science in Computer Science",
            company: "University of Technology",
            location: "Cambridge, MA",
            period: "September 2016 - December 2019",
            description: [
                "Graduated with honors (3.8 GPA)",
                "Specialized in web development and database systems",
                "Completed a capstone project developing a full-stack event management system",
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
                        {/* Timeline center line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700"></div>

                        {/* Timeline items */}
                        <div className="space-y-12">
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
                                    className={`flex items-center ${
                                        index % 2 === 0
                                            ? "flex-row-reverse text-right"
                                            : "flex-row text-left"
                                    }`}
                                >
                                    {/* Timeline content */}
                                    <div
                                        className={`w-5/12 ${
                                            index % 2 === 0 ? "pr-8" : "pl-8"
                                        }`}
                                    >
                                        <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                {experience.title}
                                            </h3>
                                            <h4 className="text-lg font-medium text-primary mt-1">
                                                {experience.company}
                                            </h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1 mb-4">
                                                <span>
                                                    {experience.location}
                                                </span>
                                                <span className="mx-1">•</span>
                                                <span className="flex items-center">
                                                    <CalendarIcon className="h-4 w-4 mr-1" />
                                                    {experience.period}
                                                </span>
                                            </p>
                                            <ul
                                                className={`space-y-2 ${
                                                    index % 2 === 0
                                                        ? "text-right"
                                                        : "text-left"
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

                                    {/* Timeline dot */}
                                    <div className="z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full shadow-lg">
                                        {experience.type === "work" ? (
                                            <BriefcaseIcon className="h-5 w-5 text-white" />
                                        ) : (
                                            <AcademicCapIcon className="h-5 w-5 text-white" />
                                        )}
                                    </div>

                                    {/* Empty space for the opposite side */}
                                    <div className="w-5/12"></div>
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
                        className="mt-16 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                            Professional Certifications
                        </h3>
                        <div className="space-y-4">
                            {[
                                {
                                    title: "MongoDB Certified Developer",
                                    issuer: "MongoDB University",
                                    date: "March 2023",
                                },
                                {
                                    title: "AWS Certified Developer - Associate",
                                    issuer: "Amazon Web Services",
                                    date: "September 2022",
                                },
                                {
                                    title: "Node.js Application Developer",
                                    issuer: "OpenJS Foundation",
                                    date: "June 2021",
                                },
                            ].map((cert, index) => (
                                <div
                                    key={index}
                                    className="flex justify-between items-center border-b border-gray-100 dark:border-gray-700 pb-3"
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
