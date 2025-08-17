"use client";

import { motion } from "framer-motion";
import {
    Server,
    Database,
    Code,
    Cloud,
    Award,
    TrendingUp,
    Zap,
} from "lucide-react";
import SectionTitle from "./section-title";

const Skills = () => {
    const skillCategories = [
        {
            title: "Backend Development",
            icon: <Server className="h-7 w-7" />,
            description: "Building robust server-side applications",
            skills: [
                { name: "Node.js", proficiency: "Expert" },
                { name: "NestJS", proficiency: "Advanced" },
                { name: "Express.js", proficiency: "Expert" },
                { name: "GraphQL", proficiency: "Intermediate" },
                { name: "REST APIs", proficiency: "Expert" },
                { name: "Microservices", proficiency: "Advanced" },
            ],
            color: "from-blue-500 via-blue-600 to-indigo-600",
            bgPattern: "bg-blue-50 dark:bg-blue-950/20",
            borderColor: "border-blue-200 dark:border-blue-800",
        },
        {
            title: "Databases & Storage",
            icon: <Database className="h-7 w-7" />,
            description: "Data modeling and optimization",
            skills: [
                { name: "MongoDB", proficiency: "Advanced" },
                { name: "PostgreSQL", proficiency: "Advanced" },
                { name: "Redis", proficiency: "Intermediate" },
                { name: "Mongoose", proficiency: "Advanced" },
                { name: "Prisma", proficiency: "Intermediate" },
                { name: "Database Design", proficiency: "Advanced" },
            ],
            color: "from-green-500 via-green-600 to-emerald-600",
            bgPattern: "bg-green-50 dark:bg-green-950/20",
            borderColor: "border-green-200 dark:border-green-800",
        },
        {
            title: "Frontend Technologies",
            icon: <Code className="h-7 w-7" />,
            description: "Modern web development stack",
            skills: [
                { name: "React", proficiency: "Advanced" },
                { name: "Next.js", proficiency: "Intermediate" },
                { name: "TypeScript", proficiency: "Advanced" },
                { name: "JavaScript", proficiency: "Expert" },
                { name: "HTML5/CSS3", proficiency: "Advanced" },
                { name: "Tailwind CSS", proficiency: "Advanced" },
            ],
            color: "from-purple-500 via-purple-600 to-violet-600",
            bgPattern: "bg-purple-50 dark:bg-purple-950/20",
            borderColor: "border-purple-200 dark:border-purple-800",
        },
        {
            title: "DevOps & Cloud",
            icon: <Cloud className="h-7 w-7" />,
            description: "Deployment and infrastructure",
            skills: [
                { name: "Docker", proficiency: "Beginner" },
                { name: "AWS", proficiency: "Intermediate" },
                { name: "CI/CD", proficiency: "Beginner" },
                { name: "Git", proficiency: "Advanced" },
                { name: "Linux", proficiency: "Intermediate" },
                { name: "Nginx", proficiency: "Intermediate" },
            ],
            color: "from-orange-500 via-orange-600 to-red-600",
            bgPattern: "bg-orange-50 dark:bg-orange-950/20",
            borderColor: "border-orange-200 dark:border-orange-800",
        },
    ];

    const getProficiencyColor = (proficiency) => {
        switch (proficiency) {
            case "Expert":
                return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400";
            case "Advanced":
                return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400";
            case "Intermediate":
                return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "Beginner":
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
            default:
                return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400";
        }
    };

    const getProficiencyIcon = (proficiency) => {
        switch (proficiency) {
            case "Expert":
                return <Award className="h-3 w-3" />;
            case "Advanced":
                return <TrendingUp className="h-3 w-3" />;
            case "Intermediate":
                return <Zap className="h-3 w-3" />;
            default:
                return null;
        }
    };

    const additionalSkills = [
        {
            category: "Authentication & Security",
            items: [
                { name: "JWT", featured: true },
                { name: "OAuth", featured: true },
                { name: "Passport.js", featured: false },
                { name: "bcrypt", featured: true },
                { name: "CORS", featured: false },
            ],
            icon: "🔐",
        },
        {
            category: "API Documentation",
            items: [
                { name: "Swagger", featured: true },
                { name: "Postman", featured: true },
                { name: "Insomnia", featured: false },
                { name: "OpenAPI", featured: false },
            ],
            icon: "📚",
        },
        {
            category: "Testing & Quality",
            items: [
                { name: "Jest", featured: true },
                { name: "Mocha", featured: false },
                { name: "Chai", featured: false },
                { name: "Unit Testing", featured: true },
                { name: "Integration Testing", featured: false },
            ],
            icon: "🧪",
        },
        {
            category: "Development Tools",
            items: [
                { name: "VS Code", featured: true },
                { name: "GitHub", featured: true },
                { name: "Jira", featured: false },
                { name: "Figma", featured: false },
                { name: "NPM/Yarn", featured: true },
            ],
            icon: "🛠️",
        },
        {
            category: "Methodologies",
            items: [
                { name: "Agile", featured: true },
                { name: "Scrum", featured: false },
                { name: "MVC", featured: true },
                { name: "Clean Architecture", featured: true },
                { name: "TDD", featured: false },
            ],
            icon: "⚡",
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

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <section
            id="skills"
            className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Technical Expertise"
                    subtitle="The technologies and methodologies I leverage to build exceptional backend solutions"
                />

                {/* Enhanced Skills Grid */}
                <motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={cardVariants}
                            className="relative group"
                        >
                            <div
                                className={`relative overflow-hidden rounded-2xl border-2 ${category.borderColor} ${category.bgPattern} backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]`}
                            >
                                {/* Background Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                                    <div
                                        className={`w-full h-full bg-gradient-to-br ${category.color} rounded-full blur-3xl`}
                                    ></div>
                                </div>

                                <div className="relative p-8">
                                    {/* Header */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-4">
                                            <div
                                                className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                                            >
                                                {category.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                                    {category.title}
                                                </h3>
                                                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                                                    {category.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Skills Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {category.skills.map(
                                            (skill, skillIndex) => (
                                                <motion.div
                                                    key={skill.name}
                                                    initial={{
                                                        opacity: 0,
                                                        x: -20,
                                                    }}
                                                    whileInView={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        duration: 0.4,
                                                        delay:
                                                            index * 0.1 +
                                                            skillIndex * 0.05,
                                                    }}
                                                    viewport={{ once: true }}
                                                    className="group/skill flex items-center justify-between p-3 bg-white/60 dark:bg-neutral-800/60 rounded-lg border border-gray-200/50 dark:border-neutral-700/50 hover:bg-white dark:hover:bg-neutral-800 transition-all duration-300 hover:shadow-md"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-gradient-to-r from-primary to-blue-600 rounded-full"></div>
                                                        <span className="font-medium text-gray-900 dark:text-white">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                    <div
                                                        className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getProficiencyColor(
                                                            skill.proficiency
                                                        )}`}
                                                    >
                                                        {getProficiencyIcon(
                                                            skill.proficiency
                                                        )}
                                                        <span>
                                                            {skill.proficiency}
                                                        </span>
                                                    </div>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Enhanced Additional Skills */}
                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <div className="relative overflow-hidden rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm border border-gray-200 dark:border-neutral-800 shadow-xl">
                        {/* Background Decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-blue-600/5"></div>

                        <div className="relative p-8 md:p-12">
                            <div className="text-center mb-12">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
                                    Additional Expertise
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    A comprehensive toolkit of technologies,
                                    methodologies, and tools that enhance my
                                    development workflow
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {additionalSkills.map((skillGroup, index) => (
                                    <motion.div
                                        key={skillGroup.category}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        className="group space-y-4"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="text-2xl">
                                                {skillGroup.icon}
                                            </span>
                                            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                                                {skillGroup.category}
                                            </h4>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {skillGroup.items.map(
                                                (item, itemIndex) => (
                                                    <motion.span
                                                        key={item.name}
                                                        variants={skillVariants}
                                                        initial="hidden"
                                                        whileInView="visible"
                                                        transition={{
                                                            delay:
                                                                index * 0.1 +
                                                                itemIndex *
                                                                    0.03,
                                                        }}
                                                        viewport={{
                                                            once: true,
                                                        }}
                                                        className={`
                                                        px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-default
                                                        ${
                                                            item.featured
                                                                ? "bg-gradient-to-r from-primary to-blue-600 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                                                : "bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700"
                                                        }
                                                    `}
                                                    >
                                                        {item.name}
                                                    </motion.span>
                                                )
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Ready to bring your backend vision to life with these
                        technologies?
                    </p>
                    <motion.button
                        className="px-8 py-4 bg-gradient-to-r from-primary to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            document
                                .getElementById("contact")
                                ?.scrollIntoView({ behavior: "smooth" })
                        }
                    >
                        Let's Collaborate
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
