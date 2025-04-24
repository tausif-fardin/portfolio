"use client";

import { motion } from "framer-motion";
import SectionTitle from "./section-title";

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            skills: [
                { name: "Node.js", level: 90 },
                { name: "NestJS", level: 85 },
                { name: "Express.js", level: 90 },
                { name: "GraphQL", level: 75 },
                { name: "Microservices", level: 70 },
            ],
        },
        {
            title: "Databases",
            skills: [
                { name: "MongoDB", level: 85 },
                { name: "PostgreSQL", level: 80 },
                { name: "Redis", level: 70 },
                { name: "Mongoose", level: 85 },
                { name: "Prisma", level: 75 },
            ],
        },
        {
            title: "Frontend Knowledge",
            skills: [
                { name: "React", level: 75 },
                { name: "Next.js", level: 70 },
                { name: "TypeScript", level: 80 },
                { name: "JavaScript", level: 90 },
                { name: "HTML/CSS", level: 75 },
            ],
        },
        {
            title: "DevOps & Tools",
            skills: [
                { name: "Git", level: 85 },
                { name: "Docker", level: 70 },
                { name: "CI/CD", level: 65 },
                { name: "AWS", level: 60 },
                { name: "Testing", level: 75 },
            ],
        },
    ];

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="skills"
            className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Technical Skills"
                    subtitle="My technical expertise and proficiency in various technologies."
                    centered
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-6"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                        >
                            <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">
                                {category.title}
                            </h3>

                            <motion.div
                                className="space-y-4"
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                            >
                                {category.skills.map((skill) => (
                                    <motion.div
                                        key={skill.name}
                                        variants={item}
                                    >
                                        <div className="flex justify-between mb-1">
                                            <span className="text-gray-700 dark:text-gray-300 font-medium">
                                                {skill.name}
                                            </span>
                                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                                {skill.level}%
                                            </span>
                                        </div>
                                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                                            <motion.div
                                                className="h-full bg-primary rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{
                                                    width: `${skill.level}%`,
                                                }}
                                                transition={{
                                                    duration: 1,
                                                    ease: "easeOut",
                                                }}
                                                viewport={{ once: true }}
                                            ></motion.div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <motion.div
                        className="bg-white dark:bg-gray-900 rounded-xl shadow-sm p-8"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white text-center">
                            Other Skills & Tools
                        </h3>

                        <div className="flex flex-wrap justify-center gap-3">
                            {[
                                "RESTful APIs",
                                "JSON",
                                "NPM",
                                "Yarn",
                                "JWT",
                                "OAuth",
                                "Swagger",
                                "Jest",
                                "Mocha",
                                "Chai",
                                "VS Code",
                                "Postman",
                                "GitHub",
                                "GitLab",
                                "Jira",
                                "Agile",
                                "Scrum",
                                "Figma",
                            ].map((tool, index) => (
                                <motion.span
                                    key={tool}
                                    className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: index * 0.03,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {tool}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
