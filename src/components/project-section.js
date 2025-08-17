"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./section-title";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ExternalLink, Github, ArrowUpRight, Folder } from "lucide-react";

const ProjectSection = () => {
    const [activeFilter, setActiveFilter] = useState("all");
    const [hoveredProject, setHoveredProject] = useState(null);

    const projects = [
        {
            id: 1,
            title: "E-commerce API Platform",
            description:
                "Comprehensive RESTful API for e-commerce with authentication, product management, and order processing.",
            image: "/P_1.png",
            tags: ["api", "nodejs", "mongodb"],
            technologies: ["Node.js", "Express", "MongoDB", "JWT"],
            demoLink: "https://github.com/tausif-fardin/ecommerce-api",
            githubLink: "https://github.com/tausif-fardin/ecommerce-api",
            featured: true,
            status: "Live",
            year: "2024",
        },
        {
            id: 2,
            title: "Task Management System",
            description:
                "NestJS-based task management backend with role-based access control and real-time notifications.",
            image: "/No_image.jpg",
            tags: ["api", "nestjs", "postgresql"],
            technologies: ["NestJS", "PostgreSQL", "TypeORM", "Socket.io"],
            demoLink: "https://github.com/tausif-fardin/task-manager",
            githubLink: "https://github.com/tausif-fardin/task-manager",
            featured: true,
            status: "Development",
            year: "2024",
        },
        {
            id: 3,
            title: "Content Management API",
            description:
                "GraphQL API for content management with image uploading, user permissions, and content versioning.",
            image: "/No_image.jpg",
            tags: ["api", "graphql", "mongodb"],
            technologies: ["Apollo Server", "GraphQL", "MongoDB", "AWS S3"],
            demoLink: "https://github.com/tausif-fardin/cms-api",
            githubLink: "https://github.com/tausif-fardin/cms-api",
            featured: false,
            status: "Completed",
            year: "2023",
        },
        {
            id: 4,
            title: "Real-time Chat Microservice",
            description:
                "Scalable chat microservice built with Node.js and WebSockets, supporting private and group chats.",
            image: "/No_image.jpg",
            tags: ["microservice", "nodejs", "mongodb"],
            technologies: ["Node.js", "Socket.io", "Redis", "MongoDB"],
            demoLink: "https://github.com/tausif-fardin/chat-service",
            githubLink: "https://github.com/tausif-fardin/chat-service",
            featured: true,
            status: "Live",
            year: "2024",
        },
        {
            id: 5,
            title: "Authentication Service",
            description:
                "Secure authentication microservice with OAuth, JWT, and multi-factor authentication support.",
            image: "/No_image.jpg",
            tags: ["microservice", "nestjs", "postgresql"],
            technologies: ["NestJS", "PostgreSQL", "JWT", "OAuth"],
            demoLink: "https://github.com/tausif-fardin/auth-service",
            githubLink: "https://github.com/tausif-fardin/auth-service",
            featured: false,
            status: "Completed",
            year: "2023",
        },
        {
            id: 6,
            title: "Payment Processing API",
            description:
                "Secure payment processing API integrated with Stripe and PayPal with detailed transaction reporting.",
            image: "/No_image.jpg",
            tags: ["api", "nodejs", "mongodb"],
            technologies: ["Node.js", "Express", "MongoDB", "Stripe API"],
            demoLink: "https://github.com/tausif-fardin/payment-api",
            githubLink: "https://github.com/tausif-fardin/payment-api",
            featured: false,
            status: "Live",
            year: "2023",
        },
    ];

    const filters = [
        { id: "all", label: "All", count: projects.length },
        {
            id: "api",
            label: "APIs",
            count: projects.filter((p) => p.tags.includes("api")).length,
        },
        {
            id: "microservice",
            label: "Microservices",
            count: projects.filter((p) => p.tags.includes("microservice"))
                .length,
        },
        {
            id: "nodejs",
            label: "Node.js",
            count: projects.filter((p) => p.tags.includes("nodejs")).length,
        },
        {
            id: "nestjs",
            label: "NestJS",
            count: projects.filter((p) => p.tags.includes("nestjs")).length,
        },
    ];

    const filteredProjects =
        activeFilter === "all"
            ? projects
            : projects.filter((project) => project.tags.includes(activeFilter));

    const getStatusColor = (status) => {
        switch (status) {
            case "Live":
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            case "Development":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
            case "Completed":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
        }
    };

    return (
        <section
            id="projects"
            className="py-24 md:py-32 bg-white dark:bg-neutral-950"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Selected Works"
                    subtitle="Backend solutions that showcase technical expertise and architectural thinking"
                />

                {/* Enhanced Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-16 justify-center mt-12">
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "relative px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                                "border border-gray-200 dark:border-neutral-800",
                                activeFilter === filter.id
                                    ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 border-neutral-900 dark:border-white"
                                    : "bg-white dark:bg-neutral-900 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-neutral-700"
                            )}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="flex items-center gap-2">
                                {filter.label}
                                <span
                                    className={cn(
                                        "text-xs px-2 py-0.5 rounded-full",
                                        activeFilter === filter.id
                                            ? "bg-white/20 dark:bg-neutral-900/20"
                                            : "bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-gray-400"
                                    )}
                                >
                                    {filter.count}
                                </span>
                            </span>
                        </motion.button>
                    ))}
                </div>

                {/* Projects Grid - Enhanced */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeFilter}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                onHoverStart={() =>
                                    setHoveredProject(project.id)
                                }
                                onHoverEnd={() => setHoveredProject(null)}
                                className={cn(
                                    "group relative bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden",
                                    "border border-gray-100 dark:border-neutral-800",
                                    "hover:border-gray-200 dark:hover:border-neutral-700",
                                    "transition-all duration-500 hover:-translate-y-1",
                                    "hover:shadow-xl hover:shadow-gray-100/50 dark:hover:shadow-neutral-900/50"
                                )}
                            >
                                {/* Project Image with Overlay */}
                                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-neutral-800 dark:to-neutral-900">
                                    {project.image !== "/No_image.jpg" ? (
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <Folder className="h-16 w-16 text-gray-300 dark:text-neutral-600" />
                                        </div>
                                    )}

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span
                                            className={cn(
                                                "px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm",
                                                getStatusColor(project.status)
                                            )}
                                        >
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Year Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/90 dark:bg-neutral-900/90 text-gray-700 dark:text-gray-300 backdrop-blur-sm">
                                            {project.year}
                                        </span>
                                    </div>

                                    {/* Hover Overlay */}
                                    <div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0",
                                            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        )}
                                    >
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="flex gap-2">
                                                <Link
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                                                >
                                                    <Github size={18} />
                                                </Link>
                                                <Link
                                                    href={project.demoLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                                                >
                                                    <ExternalLink size={18} />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-3">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                            {project.title}
                                        </h3>
                                        <ArrowUpRight
                                            className={cn(
                                                "h-5 w-5 text-gray-400 transition-all duration-300",
                                                hoveredProject === project.id
                                                    ? "text-primary translate-x-1 -translate-y-1"
                                                    : ""
                                            )}
                                        />
                                    </div>

                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.technologies
                                            .slice(0, 3)
                                            .map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-gray-50 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        {project.technologies.length > 3 && (
                                            <span className="px-3 py-1 bg-gray-50 dark:bg-neutral-800 text-gray-500 dark:text-gray-400 rounded-md text-xs">
                                                +
                                                {project.technologies.length -
                                                    3}
                                            </span>
                                        )}
                                    </div>

                                    {/* Bottom Action */}
                                    <div className="pt-4 border-t border-gray-100 dark:border-neutral-800">
                                        <Link
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-primary transition-colors group"
                                        >
                                            View Project
                                            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                        Interested in collaborating or want to see more of my
                        work?
                    </p>
                    <Link
                        href="https://github.com/tausif-fardin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                            "inline-flex items-center gap-2 px-6 py-3 rounded-xl",
                            "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900",
                            "hover:bg-neutral-800 dark:hover:bg-gray-100 transition-colors",
                            "font-medium shadow-lg hover:shadow-xl"
                        )}
                    >
                        <Github size={20} />
                        View All Projects on GitHub
                        <ArrowUpRight size={16} />
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectSection;
