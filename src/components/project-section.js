"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ChevronRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";

const PROJECTS = [
    {
        id: 1,
        title:       "Therapy Station",
        description: "A therapy booking platform with complex scheduling and patient management built on Next.js backend.",
        link:        "http://therapystation.org/",
        github:      null,
        thumbnail:   "/P_1.png",
        category:    "Full-Stack",
        highlights: [
            "Developed RESTful APIs with Next.js API routes",
            "Implemented secure authentication using next-auth",
            "Complex MySQL queries for booking & scheduling system",
            "Contributed to frontend design improvements",
        ],
        stack: ["JavaScript", "Next.js", "MySQL", "Tailwind CSS", "next-auth"],
        color: "blue",
    },
    {
        id: 2,
        title:       "One Piece E-commerce Admin",
        description: "Multi-store e-commerce admin dashboard with product, category, and order management.",
        link:        null,
        github:      "https://github.com/tausif-fardin/ecommerce-admin",
        thumbnail:   "/project2_thumbnail.jpg",
        category:    "Full-Stack",
        highlights: [
            "Built complete admin panel with multi-store support",
            "Authentication powered by Clerk",
            "Product, category, and sub-category management",
            "Order tracking and fulfillment dashboard",
        ],
        stack: ["TypeScript", "Next.js", "MySQL", "Tailwind CSS", "Clerk", "shadcn/ui"],
        color: "violet",
    },
    {
        id: 3,
        title:       "E-commerce Store",
        description: "Customer-facing store with multi-provider auth, cart management, and Stripe checkout.",
        link:        null,
        github:      "https://github.com/tausif-fardin/ecommerce-store",
        thumbnail:   "/project2_thumbnail.jpg",
        category:    "Full-Stack",
        highlights: [
            "Multi-provider auth: Email, Google, Facebook",
            "User-friendly cart and order placement flow",
            "Integrated Stripe for secure payment processing",
            "Real-time inventory sync with admin panel",
        ],
        stack: ["TypeScript", "Next.js", "MySQL", "Tailwind CSS", "Stripe", "next-auth"],
        color: "emerald",
    },
    {
        id: 4,
        title:       "Mitra – Mobile App",
        description: "A React Native mobile application published on Google Play Store.",
        link:        "https://play.google.com/store/apps/details?id=com.mitra.cygnus",
        github:      null,
        thumbnail:   "/project2_thumbnail.jpg",
        category:    "Mobile",
        highlights: [
            "Implemented UI components from design specifications",
            "Collaborated to integrate backend functionality",
            "Published and live on Google Play Store",
        ],
        stack: ["JavaScript", "React Native", "MySQL"],
        color: "orange",
    },
];

const colorMap = {
    blue:    { badge: "bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800/40",    accent: "bg-blue-500"    },
    violet:  { badge: "bg-violet-50 dark:bg-violet-900/20 text-violet-700 dark:text-violet-300 border-violet-100 dark:border-violet-800/40", accent: "bg-violet-500" },
    emerald: { badge: "bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-100 dark:border-emerald-800/40", accent: "bg-emerald-500" },
    orange:  { badge: "bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800/40",  accent: "bg-orange-500" },
};

const FILTERS = ["All", "Full-Stack", "Mobile"];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
    hidden:  { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProjectSection() {
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

    return (
        <section
            id="projects"
            className="section-padding bg-gray-50 dark:bg-gray-900/50"
        >
            <div className="container-inner">
                <SectionTitle
                    title="Featured Projects"
                    subtitle="A selection of projects that showcase my skills across backend, full-stack, and mobile development."
                />

                {/* Filter pills */}
                <div className="flex flex-wrap gap-2 mt-4 mb-10">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setFilter(f)}
                            className={cn(
                                "px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200",
                                filter === f
                                    ? "gradient-brand text-white border-transparent shadow-md"
                                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                            )}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-7"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                >
                    <AnimatePresence>
                        {filtered.map((project) => {
                            const c = colorMap[project.color];
                            return (
                                <motion.article
                                    key={project.id}
                                    variants={cardVariants}
                                    layout
                                    className="group glass-card overflow-hidden flex flex-col hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    {/* Thumbnail */}
                                    <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                                        <Image
                                            src={project.thumbnail}
                                            alt={project.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        {/* Overlay on hover */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-3">
                                            {project.link && (
                                                <a
                                                    href={project.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-gray-900 rounded-lg text-xs font-semibold hover:bg-gray-100 transition-colors"
                                                >
                                                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 text-white rounded-lg text-xs font-semibold hover:bg-gray-800 transition-colors"
                                                >
                                                    <Github className="w-3.5 h-3.5" /> GitHub
                                                </a>
                                            )}
                                        </div>
                                        {/* Category badge */}
                                        <div className="absolute top-3 right-3">
                                            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${c.badge}`}>
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex flex-col flex-1 p-6">
                                        {/* Title & links */}
                                        <div className="flex items-start justify-between gap-3 mb-2">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {project.title}
                                            </h3>
                                            <div className="flex gap-2 flex-shrink-0">
                                                {project.github && (
                                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="GitHub">
                                                        <Github className="w-4.5 h-4.5" />
                                                    </a>
                                                )}
                                                {project.link && (
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 transition-colors" aria-label="Live link">
                                                        <ExternalLink className="w-4.5 h-4.5" />
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                                            {project.description}
                                        </p>

                                        {/* Highlights */}
                                        <ul className="space-y-1.5 mb-5 flex-1">
                                            {project.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <ChevronRight className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800">
                                            {project.stack.map((t) => (
                                                <span key={t} className={`text-xs font-medium px-2 py-0.5 rounded border ${c.badge}`}>
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.article>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* GitHub CTA */}
                <motion.div
                    className="mt-12 text-center"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <a
                        href="https://github.com/tausif-fardin"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold text-sm hover:opacity-90 active:scale-95 transition-all shadow-lg"
                    >
                        <Github className="w-4.5 h-4.5" />
                        View All Projects on GitHub
                        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
