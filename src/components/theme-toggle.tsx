"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // The resolved theme is unknown during SSR; wait for hydration before
    // committing to an icon so the markup matches on both sides.
    useEffect(() => {
        setMounted(true);
    }, []);

    const isDark = resolvedTheme === "dark";

    return (
        <button
            type="button"
            onClick={() => setTheme(isDark ? "light" : "dark")}
            aria-label={
                mounted
                    ? isDark
                        ? "Switch to light theme"
                        : "Switch to dark theme"
                    : "Toggle theme"
            }
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground"
        >
            {mounted ? (
                isDark ? (
                    <Sun aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                    <Moon aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                )
            ) : (
                <span className="h-4 w-4" />
            )}
        </button>
    );
}
