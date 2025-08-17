"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, Mail, MapPin, Coffee } from "lucide-react";

const HeaderSection = () => {
    const [typedText, setTypedText] = useState("");
    const roles = ["Backend Developer", "API Architect", "Node.js Expert"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const fullText = roles[currentRoleIndex];
    const typingSpeed = 80;
    const deleteSpeed = 40;
    const pauseTime = 2000;
    const [isDeleting, setIsDeleting] = useState(false);
    const { theme } = useTheme();
    const headerRef = useRef(null);

    // Stats for visual impact
    const stats = [
        { label: "Years Experience", value: "2.5+", icon: Coffee },
        { label: "Projects Built", value: "10+", icon: Coffee },
        { label: "APIs Created", value: "15+", icon: Coffee },
    ];

    useEffect(() => {
        const typeWriter = () => {
            if (!isDeleting && typedText === fullText) {
                // Pause at the end of the text
                setTimeout(() => setIsDeleting(true), pauseTime);
                return;
            } else if (isDeleting && typedText === "") {
                // Move to next role
                setIsDeleting(false);
                setCurrentRoleIndex(
                    (prevIndex) => (prevIndex + 1) % roles.length
                );
                return;
            }

            // Set the timer for typing or deleting
            const timeout = setTimeout(
                () => {
                    if (isDeleting) {
                        setTypedText(
                            fullText.substring(0, typedText.length - 1)
                        );
                    } else {
                        setTypedText(
                            fullText.substring(0, typedText.length + 1)
                        );
                    }
                },
                isDeleting ? deleteSpeed : typingSpeed
            );

            return () => clearTimeout(timeout);
        };

        typeWriter();
    }, [typedText, isDeleting, fullText, currentRoleIndex]);

    return (
        <section
            ref={headerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800"
        >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating geometric shapes */}
                <motion.div
                    className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute top-40 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
                    animate={{
                        x: [0, -80, 0],
                        y: [0, 60, 0],
                        scale: [1, 0.8, 1],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"
                    animate={{
                        x: [0, 60, 0],
                        y: [0, -40, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content - Text */}
                    <motion.div
                        className="space-y-8"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* Status Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full"
                        >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-green-700 dark:text-green-400 text-sm font-medium">
                                Available for new opportunities
                            </span>
                        </motion.div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <motion.h1
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                <span className="block text-gray-900 dark:text-white">
                                    Hi, I'm
                                </span>
                                <span className="block bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    Tausif Fardin
                                </span>
                            </motion.h1>

                            {/* Animated Role */}
                            <motion.div
                                className="flex items-center gap-3 text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-700 dark:text-gray-300"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <span>I'm a</span>
                                <span className="text-primary font-semibold min-w-[280px]">
                                    {typedText}
                                    <span className="ml-1 w-1 h-8 bg-primary animate-pulse inline-block"></span>
                                </span>
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-2xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                        >
                            I craft robust, scalable backend solutions that
                            power modern applications. Specializing in Node.js
                            ecosystems, API architecture, and database
                            optimization to bring your ideas to life.
                        </motion.p>

                        {/* Location & Status */}
                        <motion.div
                            className="flex flex-wrap items-center gap-6 text-gray-600 dark:text-gray-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                        >
                            <div className="flex items-center gap-2">
                                <MapPin size={18} />
                                <span>Based in Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Coffee size={18} />
                                <span>2.5+ Years Experience</span>
                            </div>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-wrap gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.9 }}
                        >
                            <Link
                                href="#contact"
                                className={cn(
                                    "group inline-flex items-center gap-2 px-8 py-4 rounded-2xl",
                                    "bg-gradient-to-r from-primary to-blue-600 text-white font-semibold",
                                    "hover:shadow-xl hover:shadow-primary/25 transition-all duration-300",
                                    "hover:-translate-y-1 text-lg"
                                )}
                            >
                                <Mail size={20} />
                                Let's Work Together
                                <ArrowDown
                                    size={16}
                                    className="group-hover:translate-y-1 transition-transform"
                                />
                            </Link>

                            <Link
                                href="/resume/Tausif_Resume.pdf"
                                target="_blank"
                                className={cn(
                                    "group inline-flex items-center gap-2 px-8 py-4 rounded-2xl",
                                    "border-2 border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300",
                                    "hover:border-primary hover:text-primary transition-all duration-300",
                                    "hover:-translate-y-1 font-semibold text-lg backdrop-blur-sm",
                                    "bg-white/50 dark:bg-gray-800/50"
                                )}
                            >
                                <Download size={20} />
                                Download Resume
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.1 }}
                        >
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    className="text-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                >
                                    <div className="text-2xl lg:text-3xl font-bold text-primary mb-1">
                                        {stat.value}
                                    </div>
                                    <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                                        {stat.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Content - Enhanced Image Section */}
                    <motion.div
                        className="relative flex justify-center lg:justify-end"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="relative">
                            {/* Background decoration */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-blue-500/10 to-purple-500/20 rounded-3xl blur-3xl transform rotate-6 scale-110"></div>

                            {/* Main image container */}
                            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-3xl transform rotate-6"></div>
                                <div className="relative w-full h-full rounded-3xl overflow-hidden transform hover:scale-105 transition-transform duration-500 border-4 border-white dark:border-gray-800 shadow-2xl">
                                    <Image
                                        src="/dp.jpg"
                                        alt="Tausif Fardin - Backend Developer"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700"
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                <Coffee className="text-primary" size={24} />
                            </motion.div>

                            <motion.div
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary rounded-2xl shadow-lg flex items-center justify-center text-white font-bold text-lg"
                                animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            >
                                2.5+
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 }}
            >
                <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    Scroll to explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="p-2 rounded-full border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm"
                >
                    <ArrowDown className="text-primary" size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default HeaderSection;
