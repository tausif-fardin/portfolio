"use client";

import { Github, Linkedin, Twitter, Code2, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const SOCIALS = [
    { name: "GitHub",   icon: Github,   href: "https://github.com/tausif-fardin" },
    { name: "LinkedIn", icon: Linkedin,  href: "https://www.linkedin.com/in/tausif-fardin/" },
    { name: "Twitter",  icon: Twitter,   href: "https://x.com/TausifFardin" },
];

const NAV = [
    { label: "Home",       id: "home"       },
    { label: "Skills",     id: "skills"     },
    { label: "Experience", id: "experience" },
    { label: "Projects",   id: "projects"   },
    { label: "Contact",    id: "contact"    },
];

function scrollTo(id) {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "smooth" });
}

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
                    {/* Brand */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg gradient-brand flex items-center justify-center shadow">
                                <Code2 className="text-white w-4 h-4" />
                            </div>
                            <span className="font-bold text-lg gradient-text">Tausif Fardin</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-xs">
                            Backend developer specializing in Node.js, NestJS, and scalable API architecture.
                        </p>
                        {/* Socials */}
                        <div className="flex gap-3 pt-1">
                            {SOCIALS.map(({ name, icon: Icon, href }) => (
                                <a
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 dark:hover:border-blue-600 transition-colors"
                                >
                                    <Icon className="w-4 h-4" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Navigation</p>
                        <ul className="space-y-2.5">
                            {NAV.map(({ label, id }) => (
                                <li key={id}>
                                    <button
                                        onClick={() => scrollTo(id)}
                                        className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact snippet */}
                    <div>
                        <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-4">Contact</p>
                        <div className="space-y-2.5">
                            <a
                                href="mailto:tausiffardin12@outlook.com"
                                className="block text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                tausiffardin12@outlook.com
                            </a>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Dhaka, Bangladesh</p>
                            <div className="inline-flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                Available for work
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 dark:text-gray-500">
                    <p>© {year} Tausif Fardin. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Built with <Heart className="w-3 h-3 text-red-400" /> using Next.js &amp; Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
}
