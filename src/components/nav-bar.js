"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { label: "Home",       id: "home"       },
    { label: "Skills",     id: "skills"     },
    { label: "Experience", id: "experience" },
    { label: "Projects",   id: "projects"   },
    { label: "Contact",    id: "contact"    },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 72;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: "smooth" });
}

export default function Navbar() {
    const [mounted, setMounted]         = useState(false);
    const [open, setOpen]               = useState(false);
    const [scrolled, setScrolled]       = useState(false);
    const [active, setActive]           = useState("home");
    const { theme, setTheme }           = useTheme();

    useEffect(() => { setMounted(true); }, []);

    /* scroll shadow */
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    /* active section spy */
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        NAV_ITEMS.forEach(({ id }) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const handleNav = (id) => {
        scrollTo(id);
        setOpen(false);
    };

    return (
        <header
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl border-b border-gray-200/60 dark:border-gray-800/60 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Logo */}
                <button
                    onClick={() => handleNav("home")}
                    className="flex items-center gap-2 group"
                    aria-label="Go to top"
                >
                    <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                        <Code2 className="text-white w-4 h-4" />
                    </div>
                    <span className="font-bold text-lg gradient-text hidden sm:block">TF</span>
                </button>

                {/* Desktop links */}
                <ul className="hidden md:flex items-center gap-1">
                    {NAV_ITEMS.map(({ label, id }) => (
                        <li key={id}>
                            <button
                                onClick={() => handleNav(id)}
                                className={cn(
                                    "relative px-4 py-2 text-sm font-medium rounded-lg transition-colors duration-200",
                                    active === id
                                        ? "text-blue-600 dark:text-blue-400"
                                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                                )}
                            >
                                {active === id && (
                                    <motion.span
                                        layoutId="nav-pill"
                                        className="absolute inset-0 bg-blue-50 dark:bg-blue-500/10 rounded-lg"
                                        transition={{ type: "spring", bounce: 0.25, duration: 0.4 }}
                                    />
                                )}
                                <span className="relative z-10">{label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    {/* Theme toggle */}
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {mounted && (theme === "dark" ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />)}
                    </button>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="drawer"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.18 }}
                        className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-gray-950/95 backdrop-blur-xl"
                    >
                        <ul className="py-3 px-4 space-y-1">
                            {NAV_ITEMS.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => handleNav(id)}
                                        className={cn(
                                            "w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors",
                                            active === id
                                                ? "bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400"
                                                : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                                        )}
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
