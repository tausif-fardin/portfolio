"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/** Gentle deceleration curve - no overshoot, no bounce. */
const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface RevealProps {
    children: ReactNode;
    className?: string;
    /** Seconds to stagger this element behind its siblings. */
    delay?: number;
}

/**
 * Fades content in once as it enters the viewport. Renders a plain wrapper
 * when the user has requested reduced motion, so nothing is ever hidden
 * behind an animation that will not play.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            // Hook for the no-JS fallback in the root layout: the SSR markup
            // carries inline opacity:0, which never clears if JS never runs.
            data-reveal=""
            className={className}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-64px" }}
            transition={{ duration: 0.5, delay, ease: EASE }}
        >
            {children}
        </motion.div>
    );
}
