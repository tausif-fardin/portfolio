"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import SectionTitle from "./section-title";

const PublicationsSection = () => {
    const [hoveredArticle, setHoveredArticle] = useState(null);

    const articles = [
        {
            id: 1,
            title: "Building Scalable APIs with NestJS and TypeScript",
            excerpt:
                "Learn how to create robust, maintainable, and scalable REST APIs using NestJS framework and TypeScript.",
            platform: "Medium",
            date: "March 15, 2023",
            readTime: "8 min read",
            link: "https://medium.com/@yourusername/building-scalable-apis-with-nestjs-and-typescript",
            tags: ["NestJS", "TypeScript", "API Development"],
        },
        {
            id: 2,
            title: "Advanced PostgreSQL Optimization Techniques for Node.js Applications",
            excerpt:
                "Dive deep into database optimization strategies to improve your application's performance and response times.",
            platform: "Dev.to",
            date: "November 8, 2022",
            readTime: "12 min read",
            link: "https://dev.to/@yourusername/advanced-postgresql-optimization-techniques-for-nodejs-applications",
            tags: ["PostgreSQL", "Node.js", "Performance"],
        },
        {
            id: 3,
            title: "Implementing JWT Authentication in Express.js Applications",
            excerpt:
                "A comprehensive guide to implementing secure authentication flows using JSON Web Tokens in Express applications.",
            platform: "Personal Blog",
            date: "August 22, 2022",
            readTime: "10 min read",
            link: "https://yourblog.com/jwt-authentication-express",
            tags: ["Authentication", "Security", "Express.js"],
        },
        {
            id: 4,
            title: "Microservices Architecture with Node.js and Docker",
            excerpt:
                "Learn how to design, build, and deploy a microservices architecture using Node.js, Docker, and Kubernetes.",
            platform: "Hashnode",
            date: "May 5, 2022",
            readTime: "15 min read",
            link: "https://hashnode.com/@yourusername/microservices-architecture-with-nodejs-and-docker",
            tags: ["Microservices", "Docker", "Node.js"],
        },
    ];

    return (
        <section
            id="publications"
            className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Publications & Articles"
                    subtitle="Technical articles and tutorials I've written about backend development, databases, and web technologies."
                />

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {articles.map((article, index) => (
                        <motion.a
                            key={article.id}
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            onMouseEnter={() => setHoveredArticle(article.id)}
                            onMouseLeave={() => setHoveredArticle(null)}
                        >
                            <div className="h-full bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-800">
                                <div className="p-6">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors duration-200">
                                            {article.title}
                                        </h3>
                                        <ArrowTopRightOnSquareIcon
                                            className={`h-5 w-5 flex-shrink-0 ${
                                                hoveredArticle === article.id
                                                    ? "text-primary"
                                                    : "text-gray-400 dark:text-gray-600"
                                            } transition-colors duration-200`}
                                        />
                                    </div>

                                    <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-3">
                                        <span>{article.platform}</span>
                                        <span>•</span>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>

                                    <p className="mt-4 text-gray-600 dark:text-gray-300">
                                        {article.excerpt}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {article.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-12 text-center"
                >
                    <a
                        href="https://medium.com/@yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                    >
                        View More Articles
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default PublicationsSection;
