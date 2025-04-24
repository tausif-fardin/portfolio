"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./section-title";
import Link from "next/link";

const ProjectSection = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const projects = [
        {
            id: 1,
            title: "E-commerce API Platform",
            description:
                "A comprehensive RESTful API for e-commerce applications with user authentication, product management, and order processing.",
            image: "/P_1.png",
            tags: ["api", "nodejs", "mongodb"],
            technologies: ["Node.js", "Express", "MongoDB", "JWT"],
            demoLink: "https://github.com/yourusername/ecommerce-api",
            githubLink: "https://github.com/yourusername/ecommerce-api",
            featured: true,
        },
        {
            id: 2,
            title: "Task Management System",
            description:
                "A NestJS-based task management backend with role-based access control and real-time notifications.",
            image: "/No_image.jpg",
            tags: ["api", "nestjs", "postgresql"],
            technologies: ["NestJS", "PostgreSQL", "TypeORM", "Socket.io"],
            demoLink: "https://github.com/yourusername/task-manager",
            githubLink: "https://github.com/yourusername/task-manager",
            featured: true,
        },
        {
            id: 3,
            title: "Content Management API",
            description:
                "A GraphQL API for content management with image uploading, user permissions, and content versioning.",
            image: "/No_image.jpg",
            tags: ["api", "graphql", "mongodb"],
            technologies: ["Apollo Server", "GraphQL", "MongoDB", "AWS S3"],
            demoLink: "https://github.com/yourusername/cms-api",
            githubLink: "https://github.com/yourusername/cms-api",
            featured: false,
        },
        {
            id: 4,
            title: "Real-time Chat Microservice",
            description:
                "A scalable chat microservice built with Node.js and WebSockets, supporting private and group chats.",
            image: "/No_image.jpg",
            tags: ["microservice", "nodejs", "mongodb"],
            technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
            demoLink: "https://github.com/yourusername/chat-service",
            githubLink: "https://github.com/yourusername/chat-service",
            featured: true,
        },
        {
            id: 5,
            title: "User Authentication Service",
            description:
                "A secure authentication microservice with OAuth, JWT, and multi-factor authentication.",
            image: "/No_image.jpg",
            tags: ["microservice", "nestjs", "postgresql"],
            technologies: ["NestJS", "PostgreSQL", "JWT", "OAuth"],
            demoLink: "https://github.com/yourusername/auth-service",
            githubLink: "https://github.com/yourusername/auth-service",
            featured: false,
        },
        {
            id: 6,
            title: "Payment Processing API",
            description:
                "A secure payment processing API integrated with Stripe and PayPal with detailed transaction reporting.",
            image: "/No_image.jpg",
            tags: ["api", "nodejs", "postgresql"],
            technologies: ["Node.js", "Express", "PostgreSQL", "Stripe API"],
            demoLink: "https://github.com/yourusername/payment-api",
            githubLink: "https://github.com/yourusername/payment-api",
            featured: false,
        },
    ];

    const filters = [
        { id: "all", label: "All Projects" },
        { id: "api", label: "APIs" },
        { id: "microservice", label: "Microservices" },
        { id: "nodejs", label: "Node.js" },
        { id: "nestjs", label: "NestJS" },
        { id: "mongodb", label: "MongoDB" },
        { id: "postgresql", label: "PostgreSQL" },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.tags.includes(activeFilter));

    return (
        <section
            id="projects"
            className="py-16 md:py-24 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A selection of my backend development projects showcasing my technical skills and problem-solving capabilities."
                />

                {/* Project Filters */}
                <div className="flex flex-wrap gap-3 mb-12 justify-center">
                    {filters.map((filter) => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                                activeFilter === filter.id
                                    ? "bg-primary text-white"
                                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                            }`}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className={`bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 ${
                                project.featured
                                    ? "md:col-span-2 lg:col-span-1"
                                    : ""
                            }`}
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {project.description}
                                </p>

                                {/* Technologies used */}
                                <div className="mb-4 flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3 mt-4">
                                    <Link
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 transition-colors"
                                    >
                                        View Demo
                                    </Link>
                                    <Link
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-3 py-2 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                                    >
                                        GitHub Repo
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* More Projects Link */}
                <div className="text-center mt-12">
                    <Link
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                        View More Projects on GitHub
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
