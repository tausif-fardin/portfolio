"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import {
    SunIcon,
    MoonIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { scrollToSection } from "@/lib/utils";

const Navbar = () => {
    const [mounted, setMounted] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { theme, setTheme } = useTheme();

    // Handle hydration mismatch with theme
    useEffect(() => {
        setMounted(true);
    }, []);

    const navigation = [
        { name: "Home", href: "home" },
        { name: "Skills", href: "skills" },
        { name: "Projects", href: "projects" },
        { name: "Experience", href: "experience" },
        { name: "Contact", href: "contact" },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        scrollToSection(href);
        setMobileMenuOpen(false);
    };

    return (
        <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and Brand */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="font-bold text-xl md:text-2xl gradient-text"
                        >
                            TF
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={`#${item.href}`}
                                    onClick={(e) =>
                                        handleNavClick(e, item.href)
                                    }
                                    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Theme Toggle */}
                    <div className="flex items-center">
                        {/* Theme toggle */}
                        <button
                            onClick={() =>
                                setTheme(theme === "dark" ? "light" : "dark")
                            }
                            className="rounded-full p-1 text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                            aria-label="Toggle Dark Mode"
                        >
                            {mounted && (
                                <>
                                    {theme === "dark" ? (
                                        <SunIcon className="h-6 w-6" />
                                    ) : (
                                        <MoonIcon className="h-6 w-6" />
                                    )}
                                </>
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex ml-3">
                            <button
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                                className="p-1 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
                                aria-label="Open menu"
                            >
                                {mobileMenuOpen ? (
                                    <XMarkIcon className="h-6 w-6" />
                                ) : (
                                    <Bars3Icon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div
                    id="mobile-menu"
                    className="md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 animate-fade-in"
                >
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.href}`}
                                onClick={(e) => handleNavClick(e, item.href)}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
