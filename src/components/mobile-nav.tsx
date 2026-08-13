"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

import { NAV_ITEMS } from "@/lib/site";
import { cn } from "@/lib/utils";

const PANEL_ID = "mobile-nav-panel";

/** Section navigation for viewports below `lg`, where the inline nav is hidden. */
export function MobileNav({ activeId }: { activeId: string | null }) {
    const [open, setOpen] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    const triggerRef = useRef<HTMLButtonElement>(null);
    const panelRef = useRef<HTMLDivElement>(null);

    const close = useCallback(() => {
        setOpen(false);
        triggerRef.current?.focus();
    }, []);

    // Lock background scrolling while the panel covers the page.
    useEffect(() => {
        if (!open) return;

        const previous = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previous;
        };
    }, [open]);

    // Move focus into the panel once it opens.
    useEffect(() => {
        if (!open) return;

        const first = panelRef.current?.querySelector("a");
        first?.focus();
    }, [open]);

    // Escape closes; Tab cycles within the panel rather than escaping behind it.
    useEffect(() => {
        if (!open) return;

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                close();
                return;
            }

            if (event.key !== "Tab") return;

            const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
                "a[href], button:not([disabled])",
            );
            if (!focusable || focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (!first || !last) return;

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [open, close]);

    return (
        <>
            <button
                ref={triggerRef}
                type="button"
                onClick={() => setOpen((value) => !value)}
                aria-expanded={open}
                aria-controls={PANEL_ID}
                aria-label={open ? "Close menu" : "Open menu"}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border text-muted transition-colors hover:bg-surface hover:text-foreground lg:hidden"
            >
                {open ? (
                    <X aria-hidden="true" className="h-4 w-4" strokeWidth={1.75} />
                ) : (
                    <Menu
                        aria-hidden="true"
                        className="h-4 w-4"
                        strokeWidth={1.75}
                    />
                )}
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        {/*
                          * Backdrop: dismisses on tap, hidden from the a11y tree.
                          * Positioned `absolute`, not `fixed` — the header's
                          * backdrop-blur makes it the containing block for fixed
                          * descendants, which would size this against the 64px
                          * header instead of the viewport.
                          */}
                        <motion.div
                            aria-hidden="true"
                            onClick={close}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.2,
                            }}
                            className="absolute inset-x-0 top-16 z-40 h-screen bg-background/60 backdrop-blur-sm lg:hidden"
                        />

                        <motion.div
                            id={PANEL_ID}
                            ref={panelRef}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                                duration: prefersReducedMotion ? 0 : 0.22,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="absolute inset-x-0 top-16 z-50 overflow-hidden border-b border-border bg-background lg:hidden"
                        >
                            <nav
                                aria-label="Sections"
                                className="container-content py-2"
                            >
                                <ul>
                                    {NAV_ITEMS.map((item) => (
                                        <li key={item.id}>
                                            <a
                                                href={`#${item.id}`}
                                                onClick={close}
                                                aria-current={
                                                    activeId === item.id
                                                        ? "true"
                                                        : undefined
                                                }
                                                className={cn(
                                                    "block rounded-md px-2 py-3 text-body transition-colors hover:bg-surface hover:text-foreground",
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
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
