"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail, MapPin, Sparkles, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const ROLES = ["Backend Developer", "API Architect", "Node.js Expert", "NestJS Specialist"];

const STATS = [
    { value: "2.5+", label: "Years Exp." },
    { value: "10+",  label: "Projects"   },
    { value: "15+",  label: "APIs Built" },
];

function useTypewriter(words) {
    const [text, setText]         = useState("");
    const [wordIdx, setWordIdx]   = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const word = words[wordIdx % words.length];
        const speed = deleting ? 35 : 75;
        const pause = 2200;

        const tick = () => {
            if (!deleting && text === word) {
                setTimeout(() => setDeleting(true), pause);
                return;
            }
            if (deleting && text === "") {
                setDeleting(false);
                setWordIdx((i) => (i + 1) % words.length);
                return;
            }
            setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
        };

        const id = setTimeout(tick, speed);
        return () => clearTimeout(id);
    }, [text, deleting, wordIdx, words]);

    return text;
}

/* Floating blob */
const Blob = ({ className, animate }) => (
    <motion.div
        className={cn("absolute rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none", className)}
        animate={animate}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    />
);

export default function HeaderSection() {
    const typed = useTypewriter(ROLES);

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20"
        >
            {/* Ambient blobs */}
            <Blob
                className="w-[500px] h-[500px] bg-blue-400 top-[-100px] left-[-150px]"
                animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
            />
            <Blob
                className="w-[400px] h-[400px] bg-violet-400 bottom-[-80px] right-[-100px]"
                animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
            />
            <Blob
                className="w-[300px] h-[300px] bg-pink-400 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.15, 0.1] }}
            />

            {/* Grid overlay */}
            <div
                className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
                style={{
                    backgroundImage:
                        "linear-gradient(hsl(221 83% 53%) 1px, transparent 1px), linear-gradient(90deg, hsl(221 83% 53%) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="container-inner relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center py-24 lg:py-0 min-h-screen lg:min-h-0 lg:h-screen">

                    {/* ── Left: text ── */}
                    <motion.div
                        className="space-y-8 text-center lg:text-left"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        {/* Availability badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.15 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 text-sm font-medium"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            Available for opportunities
                        </motion.div>

                        {/* Heading */}
                        <div className="space-y-3">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-gray-500 dark:text-gray-400 text-lg font-medium flex items-center gap-2 justify-center lg:justify-start"
                            >
                                <Terminal className="w-4 h-4" />
                                Hello, World! — I&apos;m
                            </motion.p>

                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                            >
                                <span className="text-gray-900 dark:text-white">Tausif</span>
                                <br />
                                <span className="gradient-text">Fardin</span>
                            </motion.h1>

                            {/* Typewriter role */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                className="text-xl sm:text-2xl font-medium text-gray-600 dark:text-gray-300 flex items-center gap-2 justify-center lg:justify-start h-9"
                            >
                                <span className="text-blue-600 dark:text-blue-400 font-semibold">{typed}</span>
                                <span className="w-0.5 h-6 bg-blue-500 animate-[pulse_0.9s_step-end_infinite]" />
                            </motion.div>
                        </div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
                        >
                            I craft robust, scalable backend solutions that power modern applications.
                            Specializing in <span className="text-blue-600 dark:text-blue-400 font-medium">Node.js</span> ecosystems,
                            REST &amp; GraphQL <span className="text-violet-600 dark:text-violet-400 font-medium">API architecture</span>, and
                            database optimization.
                        </motion.p>

                        {/* Meta */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex items-center gap-5 text-sm text-gray-500 dark:text-gray-400 justify-center lg:justify-start"
                        >
                            <span className="flex items-center gap-1.5">
                                <MapPin className="w-4 h-4" /> Dhaka, Bangladesh
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Sparkles className="w-4 h-4" /> 2.5+ Years Experience
                            </span>
                        </motion.div>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const el = document.getElementById("contact");
                                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
                                }}
                                className={cn(
                                    "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white",
                                    "gradient-brand hover:opacity-90 active:scale-95",
                                    "shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40",
                                    "transition-all duration-200"
                                )}
                            >
                                <Mail className="w-4 h-4" />
                                Let&apos;s Work Together
                            </a>
                            <Link
                                href="/resume/Tausif_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold",
                                    "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200",
                                    "border border-gray-200 dark:border-gray-700",
                                    "hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400",
                                    "shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
                                )}
                            >
                                <Download className="w-4 h-4" />
                                Resume
                            </Link>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.95 }}
                            className="flex gap-8 pt-6 border-t border-gray-200 dark:border-gray-800 justify-center lg:justify-start"
                        >
                            {STATS.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 16 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.05 + i * 0.1 }}
                                    className="text-center lg:text-left"
                                >
                                    <div className="text-2xl font-bold gradient-text">{s.value}</div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mt-0.5">{s.label}</div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Right: avatar ── */}
                    <motion.div
                        className="flex justify-center lg:justify-end"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.35 }}
                    >
                        <div className="relative">
                            {/* Glow ring */}
                            <div className="absolute -inset-4 rounded-full gradient-brand opacity-20 blur-2xl animate-pulse" />

                            {/* Rotating dashed ring */}
                            <motion.div
                                className="absolute -inset-3 rounded-full border-2 border-dashed border-blue-400/40 dark:border-blue-500/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Avatar */}
                            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <div className="absolute inset-0 rounded-3xl gradient-brand opacity-70 blur-sm" />
                                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                                    <Image
                                        src="/dp.jpg"
                                        alt="Tausif Fardin"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Floating badge — experience */}
                            <motion.div
                                className="absolute -bottom-4 -left-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                                animate={{ y: [0, -8, 0] }}
                                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-2xl">💼</span>
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Experience</div>
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">2.5+ Years</div>
                                </div>
                            </motion.div>

                            {/* Floating badge — stack */}
                            <motion.div
                                className="absolute -top-4 -right-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2.5 shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2"
                                animate={{ y: [0, 8, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <span className="text-2xl">🚀</span>
                                <div>
                                    <div className="text-xs text-gray-500 dark:text-gray-400">Stack</div>
                                    <div className="text-sm font-bold text-gray-900 dark:text-white">Node.js</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll hint */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
            >
                <span className="text-xs text-gray-400 dark:text-gray-600 font-medium tracking-widest uppercase">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center pt-2"
                >
                    <div className="w-1 h-2 rounded-full bg-gray-400 dark:bg-gray-500" />
                </motion.div>
            </motion.div>
        </section>
    );
}
