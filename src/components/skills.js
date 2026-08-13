"use client";

import { motion } from "framer-motion";
import {
    Server, Database, Code, Cloud, GitBranch, Wrench,
} from "lucide-react";
import SectionTitle from "./section-title";

const CATEGORIES = [
    {
        title: "Backend Development",
        icon: Server,
        color: "blue",
        skills: [
            { name: "Node.js",       level: 95 },
            { name: "NestJS",        level: 88 },
            { name: "Express.js",    level: 95 },
            { name: "GraphQL",       level: 72 },
            { name: "REST APIs",     level: 95 },
            { name: "Microservices", level: 82 },
        ],
    },
    {
        title: "Databases & Storage",
        icon: Database,
        color: "emerald",
        skills: [
            { name: "PostgreSQL",      level: 88 },
            { name: "MongoDB",         level: 85 },
            { name: "Redis",           level: 70 },
            { name: "Prisma",          level: 75 },
            { name: "Mongoose",        level: 85 },
            { name: "Database Design", level: 85 },
        ],
    },
    {
        title: "Frontend",
        icon: Code,
        color: "violet",
        skills: [
            { name: "React",       level: 80 },
            { name: "Next.js",     level: 78 },
            { name: "TypeScript",  level: 80 },
            { name: "Tailwind",    level: 85 },
            { name: "React Native",level: 65 },
            { name: "JavaScript",  level: 92 },
        ],
    },
    {
        title: "Cloud & DevOps",
        icon: Cloud,
        color: "sky",
        skills: [
            { name: "AWS",          level: 65 },
            { name: "Docker",       level: 75 },
            { name: "Nginx",        level: 70 },
            { name: "CI/CD",        level: 68 },
            { name: "Linux",        level: 78 },
            { name: "Vercel",       level: 80 },
        ],
    },
    {
        title: "Version Control",
        icon: GitBranch,
        color: "orange",
        skills: [
            { name: "Git",          level: 92 },
            { name: "GitHub",       level: 90 },
            { name: "GitLab",       level: 75 },
            { name: "Code Review",  level: 80 },
        ],
    },
    {
        title: "Tools & Practices",
        icon: Wrench,
        color: "pink",
        skills: [
            { name: "Postman",      level: 90 },
            { name: "Jest",         level: 72 },
            { name: "Swagger",      level: 82 },
            { name: "JIRA",         level: 75 },
            { name: "Agile/Scrum",  level: 80 },
        ],
    },
];

const colorMap = {
    blue:    { bg: "bg-blue-50 dark:bg-blue-950/20",    border: "border-blue-200 dark:border-blue-800/50",    icon: "bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400",    bar: "bg-blue-500",    pill: "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50" },
    emerald: { bg: "bg-emerald-50 dark:bg-emerald-950/20", border: "border-emerald-200 dark:border-emerald-800/50", icon: "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-400", bar: "bg-emerald-500", pill: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50" },
    violet:  { bg: "bg-violet-50 dark:bg-violet-950/20",   border: "border-violet-200 dark:border-violet-800/50",   icon: "bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-400",   bar: "bg-violet-500",   pill: "bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-700/50" },
    sky:     { bg: "bg-sky-50 dark:bg-sky-950/20",         border: "border-sky-200 dark:border-sky-800/50",         icon: "bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-400",         bar: "bg-sky-500",     pill: "bg-sky-50 dark:bg-sky-900/30 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-700/50" },
    orange:  { bg: "bg-orange-50 dark:bg-orange-950/20",   border: "border-orange-200 dark:border-orange-800/50",   icon: "bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-400", bar: "bg-orange-500",  pill: "bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700/50" },
    pink:    { bg: "bg-pink-50 dark:bg-pink-950/20",       border: "border-pink-200 dark:border-pink-800/50",       icon: "bg-pink-100 dark:bg-pink-900/40 text-pink-600 dark:text-pink-400",       bar: "bg-pink-500",    pill: "bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300 border-pink-200 dark:border-pink-700/50" },
};

const levelLabel = (l) => {
    if (l >= 90) return "Expert";
    if (l >= 75) return "Advanced";
    if (l >= 60) return "Intermediate";
    return "Beginner";
};

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};
const cardVariants = {
    hidden:  { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Skills() {
    return (
        <section
            id="skills"
            className="section-padding bg-gray-50 dark:bg-gray-900/50"
        >
            <div className="container-inner">
                <SectionTitle
                    title="Skills & Expertise"
                    subtitle="Technologies and tools I use to build reliable backend systems and full-stack applications."
                />

                <motion.div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {CATEGORIES.map((cat) => {
                        const c = colorMap[cat.color];
                        const Icon = cat.icon;
                        return (
                            <motion.div
                                key={cat.title}
                                variants={cardVariants}
                                className={`rounded-2xl border p-6 hover:shadow-lg transition-shadow duration-300 ${c.bg} ${c.border}`}
                            >
                                {/* Header */}
                                <div className="flex items-center gap-3 mb-5">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${c.icon}`}>
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 dark:text-white text-base">{cat.title}</h3>
                                </div>

                                {/* Skills */}
                                <ul className="space-y-3">
                                    {cat.skills.map((skill) => (
                                        <li key={skill.name}>
                                            <div className="flex items-center justify-between mb-1">
                                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                                                <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${c.pill}`}>
                                                    {levelLabel(skill.level)}
                                                </span>
                                            </div>
                                            <div className="h-1.5 rounded-full bg-gray-200 dark:bg-gray-700/60 overflow-hidden">
                                                <motion.div
                                                    className={`h-full rounded-full ${c.bar}`}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                                                    viewport={{ once: true }}
                                                />
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Tech pill cloud */}
                <motion.div
                    className="mt-14 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 uppercase tracking-widest">Also familiar with</p>
                    <div className="flex flex-wrap justify-center gap-2">
                        {["RabbitMQ", "Kafka", "Socket.io", "Elasticsearch", "Stripe API", "Twilio", "SendGrid", "OAuth 2.0", "JWT", "Puppeteer"].map((t) => (
                            <span
                                key={t}
                                className="px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-default"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
