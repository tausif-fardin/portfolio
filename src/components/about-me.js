"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    CodeBracketIcon,
    CloudIcon,
    CommandLineIcon,
    ServerIcon,
} from "@heroicons/react/24/outline";
import SectionTitle from "./section-title";

const AboutMe = () => {
    const stats = [
        { label: "Years Experience", value: "2.5+" },
        { label: "Projects Completed", value: "10+" },
        { label: "Technologies", value: "10+" },
        // { label: "Satisfied Clients", value: "15+" },
    ];

    const specialties = [
        {
            icon: <ServerIcon className="h-8 w-8 text-primary" />,
            title: "Backend Development",
            description:
                "Building robust, scalable backend systems using Node.js and NestJS.",
        },
        {
            icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
            title: "API Development",
            description:
                "Creating RESTful and GraphQL APIs with comprehensive documentation.",
        },
        {
            icon: <CloudIcon className="h-8 w-8 text-primary" />,
            title: "Database Design",
            description:
                "Expertise in MongoDB and PostgreSQL database design and optimization.",
        },
        {
            icon: <CommandLineIcon className="h-8 w-8 text-primary" />,
            title: "DevOps",
            description:
                "CI/CD pipeline setup, containerization with Docker, and deployment.",
        },
    ];

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    return (
        <section
            id="about"
            className="py-16 md:py-24 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="About Me"
                    subtitle="A passionate backend developer with a strong foundation in creating efficient and scalable applications."
                />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Bio Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="prose prose-lg dark:prose-invert max-w-none">
                            <p>
                                As a Junior Backend Developer with more than two
                                years of industry experience, I specialize in
                                building robust, secure, and scalable backend
                                systems that power modern web applications.
                            </p>

                            <p>
                                My journey in software development began with a
                                passion for solving complex problems through
                                elegant, efficient code. Over the years,
                                I&apos;ve developed expertise in Node.js and
                                NestJS frameworks, complemented by deep
                                knowledge of MongoDB and PostgreSQL databases.
                            </p>

                            <p>
                                Although my primary focus is on backend
                                development, I also have experience with
                                frontend technologies like React and Next.js,
                                allowing me to understand the full stack and
                                collaborate effectively with frontend teams.
                            </p>

                            <p>
                                I&apos;m constantly learning and exploring new
                                technologies to stay at the forefront of backend
                                development best practices. When I&apos;m not
                                coding, I enjoy contributing to open-source
                                projects and sharing my knowledge through
                                technical articles.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats & Specialties Column */}
                    <div className="space-y-10">
                        {/* Stats Section */}
                        <div className="grid grid-cols-2 gap-8">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true, margin: "-100px" }}
                                >
                                    <p className="text-4xl font-bold text-primary">
                                        {stat.value}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Specialties Section */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                                My Specialties
                            </h3>

                            {specialties.map((specialty, index) => (
                                <motion.div
                                    key={specialty.title}
                                    variants={cardVariants}
                                    transition={{ duration: 0.3 }}
                                    className="flex items-start p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                                >
                                    <div className="flex-shrink-0 mr-4">
                                        {specialty.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900 dark:text-white">
                                            {specialty.title}
                                        </h4>
                                        <p className="text-gray-600 dark:text-gray-300 mt-1">
                                            {specialty.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
