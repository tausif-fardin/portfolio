"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Briefcase, GraduationCap, Calendar, MapPin,
    ChevronRight, ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionTitle from "./section-title";

const TABS = [
    { id: "work",      label: "Work",      icon: Briefcase     },
    { id: "education", label: "Education", icon: GraduationCap },
];

const WORK = [
    {
        id: 1,
        title:    "Jr. Backend Developer",
        company:  "ZAAG Systems Ltd.",
        location: "Dhaka, Bangladesh",
        period:   "Apr 2024 – Present",
        badge:    "Current",
        badgeColor: "bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
        description: "Leading backend development for enterprise-level microservices architecture.",
        achievements: [
            "Architected microservices with NestJS handling 50k+ daily requests",
            "Optimized PostgreSQL schemas, improving query performance by ~40%",
            "Implemented JWT + OAuth 2.0 authentication across multiple services",
            "Mentored junior devs and led code-review sessions",
        ],
        stack: ["NestJS", "PostgreSQL", "JWT", "OAuth 2.0", "Microservices", "Docker"],
    },
    {
        id: 2,
        title:    "Software Engineer",
        company:  "Orbit Digital Solutions Ltd.",
        location: "Dhaka, Bangladesh",
        period:   "Oct 2022 – Mar 2024",
        badge:    null,
        description: "Full-stack development focused on scalable backend solutions for client applications.",
        achievements: [
            "Built 10+ RESTful APIs with Node.js / Express serving various clients",
            "Developed e-commerce features with Stripe payment integration",
            "Migrated MongoDB databases, cutting storage costs by 25%",
            "Delivered React Native mobile app published on Google Play Store",
        ],
        stack: ["Node.js", "Express", "MongoDB", "React", "React Native", "Stripe"],
    },
];

const EDUCATION = [
    {
        id: 1,
        degree:     "B.Sc. in Computer Science",
        institution:"North South University",
        location:   "Dhaka, Bangladesh",
        period:     "2018 – 2022",
        gpa:        "3.60 / 4.00",
        highlights: [
            "Thesis on distributed caching strategies for microservices",
            "Teaching assistant for Data Structures & Algorithms",
            "Core member of NSU Programming Club",
        ],
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden:  { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
    const [tab, setTab] = useState("work");

    return (
        <section
            id="experience"
            className="section-padding bg-white dark:bg-gray-950"
        >
            <div className="container-inner">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional journey and academic background."
                />

                {/* Tab switcher */}
                <div className="inline-flex p-1 rounded-xl bg-gray-100 dark:bg-gray-800 mb-12 mt-4">
                    {TABS.map(({ id, label, icon: Icon }) => (
                        <button
                            key={id}
                            onClick={() => setTab(id)}
                            className={cn(
                                "flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                                tab === id
                                    ? "bg-white dark:bg-gray-700 shadow text-gray-900 dark:text-white"
                                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
                            )}
                        >
                            <Icon className="w-4 h-4" />
                            {label}
                        </button>
                    ))}
                </div>

                {/* Timeline */}
                <AnimatePresence mode="wait">
                    {tab === "work" && (
                        <motion.div
                            key="work"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 10 }}
                            className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800 space-y-10"
                        >
                            {WORK.map((job) => (
                                <motion.div
                                    key={job.id}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[41px] w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 bg-blue-500 shadow-md" />

                                    <div className="glass-card p-6 hover:shadow-md transition-shadow">
                                        {/* Header row */}
                                        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 dark:text-white">{job.title}</h3>
                                                <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">{job.company}</p>
                                            </div>
                                            {job.badge && (
                                                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${job.badgeColor}`}>
                                                    {job.badge}
                                                </span>
                                            )}
                                        </div>

                                        {/* Meta */}
                                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{job.period}</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{job.location}</span>
                                        </div>

                                        {/* Achievements */}
                                        <ul className="space-y-2 mb-5">
                                            {job.achievements.map((a, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <ChevronRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                                    {a}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {job.stack.map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-xs font-medium px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-100 dark:border-blue-800/40"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}

                    {tab === "education" && (
                        <motion.div
                            key="education"
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: 10 }}
                            className="relative pl-8 border-l-2 border-gray-100 dark:border-gray-800 space-y-10"
                        >
                            {EDUCATION.map((edu) => (
                                <motion.div
                                    key={edu.id}
                                    variants={itemVariants}
                                    className="relative"
                                >
                                    <div className="absolute -left-[41px] w-4 h-4 rounded-full border-4 border-white dark:border-gray-950 bg-violet-500 shadow-md" />

                                    <div className="glass-card p-6 hover:shadow-md transition-shadow">
                                        <div className="mb-3">
                                            <h3 className="text-lg font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                                            <p className="text-violet-600 dark:text-violet-400 font-semibold text-sm mt-0.5">{edu.institution}</p>
                                        </div>

                                        <div className="flex flex-wrap gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{edu.period}</span>
                                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{edu.location}</span>
                                            <span className="font-semibold text-gray-700 dark:text-gray-300">GPA: {edu.gpa}</span>
                                        </div>

                                        <ul className="space-y-2">
                                            {edu.highlights.map((h, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                                                    <ChevronRight className="w-4 h-4 text-violet-500 mt-0.5 flex-shrink-0" />
                                                    {h}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
