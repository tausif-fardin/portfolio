"use client";

import { motion } from "framer-motion";
import {
    Briefcase,
    GraduationCap,
    Calendar,
    MapPin,
    Award,
    TrendingUp,
    Users,
    Code,
} from "lucide-react";
import SectionTitle from "./section-title";
import { useEffect, useState } from "react";

const Experience = () => {
    const [activeTab, setActiveTab] = useState("experience");
    const [isDesktop, setIsDesktop] = useState(null);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const workExperience = [
        {
            id: 1,
            title: "Jr. Backend Developer",
            company: "ZAAG Systems Ltd.",
            location: "Dhaka, Bangladesh",
            period: "Apr 2024 - Present",
            duration: "8+ months",
            description:
                "Leading backend development for enterprise microservices architecture using modern Node.js stack.",
            achievements: [
                {
                    text: "Backend development for enterprise-level microservices architecture using NestJS",
                    icon: <Code className="h-4 w-4" />,
                },
                {
                    text: "Designed and optimized PostgreSQL database schemas improving query performance by 40%",
                    icon: <TrendingUp className="h-4 w-4" />,
                },
                {
                    text: "Implemented robust authentication and authorization systems with JWT and OAuth 2.0",
                    icon: <Award className="h-4 w-4" />,
                },
                {
                    text: "Mentored junior developers and conducted code reviews to maintain high quality standards",
                    icon: <Users className="h-4 w-4" />,
                },
            ],
            technologies: [
                "NestJS",
                "PostgreSQL",
                "JWT",
                "OAuth 2.0",
                "Microservices",
            ],
            isPresent: true,
        },
        {
            id: 2,
            title: "Software Engineer",
            company: "Orbit Digital Solutions Ltd.",
            location: "Dhaka, Bangladesh",
            period: "Oct 2022 - Mar 2024",
            duration: "1 year 6 months",
            description:
                "Full-stack development with focus on building scalable backend solutions for various client applications.",
            achievements: [
                {
                    text: "Developed RESTful APIs using Node.js and Express for various client applications",
                    icon: <Code className="h-4 w-4" />,
                },
                {
                    text: "Built and maintained MongoDB database architectures for scalable web applications",
                    icon: <TrendingUp className="h-4 w-4" />,
                },
                {
                    text: "Integrated third-party APIs including payment gateways and notification services",
                    icon: <Award className="h-4 w-4" />,
                },
                {
                    text: "Collaborated with frontend teams to ensure seamless API integration",
                    icon: <Users className="h-4 w-4" />,
                },
            ],
            technologies: [
                "Node.js",
                "Express",
                "MongoDB",
                "REST APIs",
                "Payment Integration",
            ],
            isPresent: false,
        },
        {
            id: 3,
            title: "Software Engineer Intern",
            company: "Entertech",
            location: "Dhaka, Bangladesh",
            period: "Jun 2022 - Sep 2022",
            duration: "4 months",
            description:
                "Full-stack internship focusing on both frontend and backend development with modern web technologies.",
            achievements: [
                {
                    text: "Worked on both frontend (React) and backend (Node.js) development",
                    icon: <Code className="h-4 w-4" />,
                },
                {
                    text: "Created and maintained RESTful APIs for web and mobile applications",
                    icon: <TrendingUp className="h-4 w-4" />,
                },
                {
                    text: "Implemented MongoDB database solutions for content management systems",
                    icon: <Award className="h-4 w-4" />,
                },
                {
                    text: "Participated in agile development processes including daily stand-ups and sprint planning",
                    icon: <Users className="h-4 w-4" />,
                },
            ],
            technologies: ["React", "Node.js", "MongoDB", "REST APIs", "Agile"],
            isPresent: false,
        },
    ];

    const education = [
        {
            id: 1,
            title: "BSc in Computer Science and Engineering",
            institution: "American International University-Bangladesh (AIUB)",
            location: "Dhaka, Bangladesh",
            period: "Sep 2018 - Sep 2022",
            gpa: "3.71/4.00",
            description:
                "Comprehensive computer science education with focus on web development and database systems.",
            highlights: [
                "Graduated with honors (3.71 GPA)",
                "Specialized in web development and database systems",
                "Published research paper on 'Stock Price Prediction using Machine Learning'",
                "Relevant coursework: Data Structures, Algorithms, Database Systems, Web Development",
            ],
            achievements: [
                "Dean's List",
                "Research Publication",
                "Web Development Specialization",
            ],
        },
    ];

    const certifications = [
        {
            title: "MongoDB Node.js Developer Path",
            issuer: "MongoDB University",
            date: "March 2024",
            credential: "Verified Certificate",
            featured: true,
        },
        {
            title: "JavaScript (Basic) Certificate",
            issuer: "HackerRank",
            date: "June 2023",
            credential: "Skills Verification",
            featured: true,
        },
        {
            title: "Python Data Structures",
            issuer: "Coursera",
            date: "June 2020",
            credential: "Course Certificate",
            featured: false,
        },
        {
            title: "Programming for Everybody (Getting Started with Python)",
            issuer: "Coursera",
            date: "May 2020",
            credential: "Course Certificate",
            featured: false,
        },
    ];

    return (
        <section
            id="experience"
            className="py-24 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <SectionTitle
                    title="Professional Journey"
                    subtitle="My career progression and educational background in backend development"
                />

                {/* Tab Navigation */}
                <div className="flex justify-center mt-12 mb-16">
                    <div className="bg-white dark:bg-neutral-900 p-2 rounded-2xl shadow-lg border border-gray-200 dark:border-neutral-800">
                        {[
                            {
                                id: "experience",
                                label: "Work Experience",
                                icon: <Briefcase className="h-4 w-4" />,
                            },
                            {
                                id: "education",
                                label: "Education",
                                icon: <GraduationCap className="h-4 w-4" />,
                            },
                            {
                                id: "certifications",
                                label: "Certifications",
                                icon: <Award className="h-4 w-4" />,
                            },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                                    activeTab === tab.id
                                        ? "bg-primary text-white shadow-md"
                                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                                }`}
                            >
                                {tab.icon}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Work Experience Tab */}
                {activeTab === "experience" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="space-y-8">
                            {workExperience.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{
                                        opacity: 0,
                                        x: index % 2 === 0 ? -50 : 50,
                                    }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-neutral-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        {/* Header */}
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-gradient-to-r from-primary to-blue-600 rounded-xl text-white shadow-lg">
                                                    <Briefcase className="h-6 w-6" />
                                                </div>
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-3 mb-2">
                                                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                                                            {exp.title}
                                                        </h3>
                                                        {exp.isPresent && (
                                                            <span className="px-3 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 rounded-full text-xs font-medium">
                                                                Current
                                                            </span>
                                                        )}
                                                    </div>
                                                    <h4 className="text-lg font-semibold text-primary mb-1">
                                                        {exp.company}
                                                    </h4>
                                                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            {exp.location}
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            {exp.period}
                                                        </div>
                                                        <div className="px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-md text-xs">
                                                            {exp.duration}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Description */}
                                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <div className="mb-6">
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                                                Key Achievements
                                            </h5>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                                {exp.achievements.map(
                                                    (achievement, idx) => (
                                                        <motion.div
                                                            key={idx}
                                                            initial={{
                                                                opacity: 0,
                                                                y: 10,
                                                            }}
                                                            whileInView={{
                                                                opacity: 1,
                                                                y: 0,
                                                            }}
                                                            transition={{
                                                                delay:
                                                                    idx * 0.1,
                                                            }}
                                                            viewport={{
                                                                once: true,
                                                            }}
                                                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg"
                                                        >
                                                            <div className="text-primary mt-0.5">
                                                                {
                                                                    achievement.icon
                                                                }
                                                            </div>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                                {
                                                                    achievement.text
                                                                }
                                                            </span>
                                                        </motion.div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                                                Technologies Used
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map(
                                                    (tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-gradient-to-r from-primary/10 to-blue-600/10 text-primary dark:text-blue-400 rounded-full text-xs font-medium border border-primary/20"
                                                        >
                                                            {tech}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Education Tab */}
                {activeTab === "education" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-neutral-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-neutral-800"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="p-4 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl text-white shadow-lg">
                                        <GraduationCap className="h-8 w-8" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                                    {edu.title}
                                                </h3>
                                                <h4 className="text-lg font-semibold text-primary mb-2">
                                                    {edu.institution}
                                                </h4>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                                                    <div className="flex items-center gap-1">
                                                        <MapPin className="h-4 w-4" />
                                                        {edu.location}
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-4 w-4" />
                                                        {edu.period}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="bg-green-100 dark:bg-green-900/30 px-4 py-2 rounded-xl">
                                                <span className="text-green-800 dark:text-green-400 font-bold">
                                                    GPA: {edu.gpa}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                                            {edu.description}
                                        </p>

                                        <div className="mb-6">
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-4 uppercase tracking-wider">
                                                Academic Highlights
                                            </h5>
                                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                                {edu.highlights.map(
                                                    (highlight, idx) => (
                                                        <div
                                                            key={idx}
                                                            className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-neutral-800 rounded-lg"
                                                        >
                                                            <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                                                            <span className="text-sm text-gray-700 dark:text-gray-300">
                                                                {highlight}
                                                            </span>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div>
                                            <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">
                                                Achievements
                                            </h5>
                                            <div className="flex flex-wrap gap-2">
                                                {edu.achievements.map(
                                                    (achievement, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 text-purple-800 dark:text-purple-400 rounded-full text-xs font-medium"
                                                        >
                                                            {achievement}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                )}

                {/* Certifications Tab */}
                {activeTab === "certifications" && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                        cert.featured
                                            ? "bg-gradient-to-br from-primary/5 to-blue-600/5 border-primary/20 shadow-md"
                                            : "bg-white dark:bg-neutral-900 border-gray-200 dark:border-neutral-800"
                                    }`}
                                >
                                    {cert.featured && (
                                        <div className="absolute top-4 right-4">
                                            <div className="px-2 py-1 bg-primary text-white rounded-full text-xs font-medium">
                                                Featured
                                            </div>
                                        </div>
                                    )}
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl text-white shadow-lg">
                                            <Award className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="font-bold text-gray-900 dark:text-white mb-1">
                                                {cert.title}
                                            </h4>
                                            <p className="text-primary font-semibold mb-2">
                                                {cert.issuer}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <span className="text-sm text-gray-600 dark:text-gray-400">
                                                    {cert.date}
                                                </span>
                                                <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-neutral-800 rounded-md">
                                                    {cert.credential}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </div>
        </section>
    );
};

export default Experience;
