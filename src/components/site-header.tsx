"use client";

import { useEffect, useState } from "react";

import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/lib/content";
import { NAV_ITEMS } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [activeId, setActiveId] = useState<string | null>(null);

    // Reveal the bottom hairline only once the page has moved.
    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight the section currently crossing the upper third of the viewport.
    useEffect(() => {
        const sections = NAV_ITEMS.map((item) =>
            document.getElementById(item.id),
        ).filter((element): element is HTMLElement => element !== null);

        if (sections.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const topmost = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top - b.boundingClientRect.top,
                    )[0];

                if (topmost) setActiveId(topmost.target.id);
            },
            { rootMargin: "-30% 0px -60% 0px" },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header
            className={cn(
                "sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md transition-colors duration-200",
                scrolled ? "border-border" : "border-transparent",
            )}
        >
            <div className="container-content flex h-16 items-center justify-between gap-4">
                <a
                    href="#top"
                    className="font-mono text-sm font-medium tracking-tight transition-colors hover:text-accent"
                >
                    <span className="sm:hidden">{profile.monogram}</span>
                    <span className="hidden sm:inline">
                        {profile.shortName}
                    </span>
                </a>

                <nav aria-label="Sections" className="hidden lg:block">
                    <ul className="flex items-center gap-0.5">
                        {NAV_ITEMS.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    aria-current={
                                        activeId === item.id ? "true" : undefined
                                    }
                                    className={cn(
                                        "rounded-md px-2.5 py-1.5 text-sm transition-colors hover:text-foreground",
                                        activeId === item.id
                                            ? "text-foreground"
                                            : "text-muted",
                                    )}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="flex items-center gap-2">
                    <ThemeToggle />
                </div>
            </div>
        </header>
    );
}
